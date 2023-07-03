import user from "../database/models/user.js";

export const register = (req, res, next) => {
  const newUser = user(req.body);
  newUser.save().then((result) => {
    res.status(201).json({
      userCreated: result
    })
  }).catch((err) => {
    next(new Error('DataIncomplete'));
  });
}