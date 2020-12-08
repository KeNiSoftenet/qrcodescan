
const AWS = require('aws-sdk');
const fs  = require('fs');

const Jimp = require("jimp");
const QrCode = require('qrcode-reader');

exports.ScanQrCode =  function(req, res) {
    const base64String = req.body.base64string;
    const buffer = Buffer.from(base64String, 'base64');

  Jimp.read(buffer, function(err, image) {
        
    if (err) {
        console.error(err);
        // TODO handle error
        res.json(err);
    }

    const qr = new QrCode();
    qr.callback = function(err, value) {
        if (err) {
            console.error(err);
            // TODO handle error
            res.json(err);
        }
        console.log({result: value.result});
        res.json({result: value.result});
    };
    qr.decode(image.bitmap);
  
 });

};
