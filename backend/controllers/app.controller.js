import user from "../database/models/user.js";

export const register = (req, res, next) => {
  const newUser = user(req.body);
  newUser.save().then((result) => {

    //TODO: encrypt password before save.

    res.status(201).json({
      userCreated: result
    })
  }).catch((err) => {
    next(new Error('DataIncomplete'));
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