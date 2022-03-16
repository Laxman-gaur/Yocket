 const { createLogger, transports } = require('winston');
 
const feedLogger = createLogger({
   transports: [
       new transports.Console()
     ]
});
 
module.exports = {
 feedLogger: feedLogger
};