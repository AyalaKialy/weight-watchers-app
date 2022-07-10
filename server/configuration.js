const winston = require('winston');

const logconfiguration = {
    transports: [
        new winston.transports.Console(
            { level: 'warn' }),
        new winston.transports.File({
            level: 'error',
            filename: 'logger'
        }),
    ],
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'MMM-DD-YYYY hh:mm:ss'
        }),
        winston.format.printf(info => `${info.level} : ${info.timestamp} : ${info.message}`)
    )
}

const logger = winston.createLogger(logconfiguration);
module.exports = logger;