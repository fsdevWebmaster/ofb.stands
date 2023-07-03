
export const errors = (err, res, req, next) => {
  switch (err.message) {
    case 'DataIncomplete':
      return res.status(400).json({ error: 'Incomplete or invalid data.' });
    break;
  }
}  
