require('dotenv').config();
const express = require('express');
const app = express();
const { PORT, ENVIRONMENT } = require('./config');
const logger = require('./configuration');
const path = require('path')
const meeting = require('./src/server/router/meeting.router');

const user = require('./router/user.router');

app.use(express.json());

app.use('/api/user', user);
app.use('/api/meeting', meeting);

app.use((err, req, res, next) => {
    if (ENVIRONMENT === 'development')
        logger.error(err.message)
    else {
        logger.error(`${error}`)
    }
    res.status(500).send(err.message)
    next();
})

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '../client/src/html/404.html'));
    next();
});

app.listen(PORT, () => logger.warn(`server is runing on port ${PORT}`));





