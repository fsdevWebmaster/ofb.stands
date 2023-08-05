import bcrypt from "bcrypt";
import user from "../database/models/user.js";

export const register = (req, res, next) => {

  return res;

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
  
  return res;
  
  const { email, password } = req.body;
  user.findOne({ email })
    .then((found) => {
      if (!found) {
        return res.status(404).json({
          error: 'User not found.'
        })
      }
      bcrypt.compare(password, found.password, (err, result) => {
        if (result) {
          return res.json({ user: found.toJSON() });
        }
        else {
          return res.status(403).json({ 
            error: 'User not authorized.'
          });
        }
      })
    }).catch((err) => {
      console.log('Error getting user:', err);
      return res.status(500).json({
        error: 'Cannot login user.'
      })
    });
}

export const users = async (req, res) => {  
  const { role } = req.body;
  switch (role) {
    case 'coordinator':
      
      const tal = await user.find();

      console.log('tal::', tal);


    break;
  }


  console.log(role);

  res.json({ ok: true });

}