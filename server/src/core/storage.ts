import * as AWS from 'aws-sdk'
import multer from 'multer';
import multerS3 from 'multer-s3';
import crypto from "crypto"
import util from "util"

export class Storage {

  public s3:AWS.S3  
  public bucket = process.env.AWS_BUCKET+'';
  public upload

  constructor (){
    console.log(process.env.AWS_SECRET_ACCESS_KEY)
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    });

    this.s3 = new AWS.S3();

    this.upload = multer({
        storage: multerS3({
          s3: this.s3,
          bucket: this.bucket,
          // Set public read permissions
          acl: 'public-read',
          // Auto detect contet type
          contentType: multerS3.AUTO_CONTENT_TYPE, 
          // Set key/ filename as original uploaded name
          key: function(req, file, cb) {
            crypto.pseudoRandomBytes(16, function(err, raw) {
                cb(null, raw.toString('hex') + Date.now() + '.' + file.originalname);
            });
        }
      })
    })
  }


  public async uploadSingle(req, res) {
    let filename;

    try {
        const upload = util.promisify(this.upload.any());
        await upload(req, res);
        filename = req.files[0].location

    } catch (e) {
        console.log(e)
    }

    return filename
  }

}
