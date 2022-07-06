require('dotenv').config();
const express = require('express');
const app = express();
const { PORT, ENVIRONMENT } = require('./config');
const logger = require('./configuration');
const path = require('path')

const user = require('./src/server/router/user.router');

app.use(express.json());

app.use('/api/user', user);

// app.use((err, req, res) => {
//     if (ENVIRONMENT === 'development')
//         logger.error(err.message)
//     else {
//         ////////////////////////////////////////////////
//         res.status(500).send(err.message)
//         logger.error(`${error}`),
//             res.status(500).json({ error })
//     }
// })

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, './src/client/html/404.html'));

});

app.listen(PORT, () => logger.warn(`server is runing on port ${PORT}`));





