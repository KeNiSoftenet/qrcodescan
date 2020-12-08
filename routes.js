//const AWS = require('aws-sdk');
const express = require('express');
const router = express.Router();
module.exports = router;

const routes = require('./routes');

const multer  = require('multer');
const upload = multer();


// API Base URL : https://1yhe45u4z7.execute-api.ap-south-1.amazonaws.com/prod
const quecodescanService = require('./quecodescan.js');
routes.post('/qrcode',upload.single('base64string'), quecodescanService.ScanQrCode);

