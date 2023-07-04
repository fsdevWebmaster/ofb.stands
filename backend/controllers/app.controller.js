import user from "../database/models/user.js";
import bcrypt from "bcrypt";

export const register = (req, res, next) => {
  let userData = req.body;
  bcrypt.hash(userData.password, 10, function(err, hash) {
    if (err) {
      return res.status(500).json({ err });
    }
    userData = {...userData, password: hash};
    const newUser = user(userData);
    newUser.save().then((userData) => {
      return res.status(201).json({
        userCreated: userData
      })
    }).catch((err) => {
      next(new Error('DataIncomplete'));
    });
  });
}

export const login = (req, res) => {
  const { email, password } = req.body;
  const tal = user.findOne({ email, password })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          error: 'User not found.'
        })
      }
      return res.json({ user: result.toJSON() });
    }).catch((err) => {
      console.log('Error getting user:', err);
      return res.status(500).json({
        error: 'Cannot login user.'
      })
    });

}