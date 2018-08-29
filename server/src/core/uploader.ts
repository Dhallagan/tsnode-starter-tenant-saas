
import util from "util"
import crypto from "crypto"
import multer from 'multer';

//Courtesy of: https://stackoverflow.com/questions/45540560/node-js-multer-upload-with-promise
//Uploader.js

export class Uploader {
    public upload
    constructor() {
        const storageOptions = multer.diskStorage({
            destination: function(req, file, cb) {
                cb(null, './public/')
            },
            filename: function(req, file, cb) {
                crypto.pseudoRandomBytes(16, function(err, raw) {
                    cb(null, raw.toString('hex') + Date.now() + '.' + file.originalname);
                });
            }
        });

        this.upload = multer({ storage: storageOptions });
    }

    async startUpload(req, res) {
        let filename;

        try {
            const upload = util.promisify(this.upload.any());

            await upload(req, res);

            filename = req.files[0].filename;
        } catch (e) {
            //Handle your exception here
            console.log(e)
        }

        return filename
    }
}