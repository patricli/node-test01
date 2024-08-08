const winston = require("winston");
const format = winston.format;

const logger = winston.createLogger({
  level: "debug",
  //format: winston.format.json(),
  format: format.combine(format.timestamp(), format.prettyPrint()),
  transports: [new winston.transports.Console()],
  transports: [new winston.transports.File({
    level: "error",
    filename: "logs/notes.log"})
  ]
});

module.exports = logger;