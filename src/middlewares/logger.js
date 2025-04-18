const logger = (req, res, next) =>{
    console.log(`Method is : ${req.method} ${req.url}`);
    next();
};
export default logger

