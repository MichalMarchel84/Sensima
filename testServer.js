// Simple server to test if static export works as on development server

const express = require("express");

const app = express();
app.use('/', express.static('./out'));

app.listen(8080);