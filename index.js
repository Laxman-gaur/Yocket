const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require("body-parser");
const helmet = require('helmet');
const logger = require('./logger');
const feedRouter = require("./routers/feedRouter");

const whitelistOrigins = ['http://localhost:3000'];
const port = process.env.PORT

var corsOptions = {
    origin: whitelistOrigins,
    optionsSuccessStatus: 200, 
    credentials: true
};
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(helmet());
cors({
    origin: [
    "*"],
    credentials: true,
    exposedHeaders: ['Access-Control-Allow-Origin', 'Vary', 'Content-Length']
    })

// router imports


app.use("/feed", feedRouter);

app.listen(port, () => {
    logger.feedLogger.info(`Feed application listening at http://localhost:${port}`)
})