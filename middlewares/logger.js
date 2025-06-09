
export const logger = (req, res, next) => {
  // console.log('Passou pela middleware.');
  
  req.user_id = 1;
  
  return next();
}