
export const register = (req, res) => {

  console.log('body::', req.body);

  res.json(req.body);
}