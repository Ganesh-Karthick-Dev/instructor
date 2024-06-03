import AWS from 'aws-sdk';

const UploadImage = ({srcData}) => {
  const S3_BUCKET = process.env.REACT_APP_AWS_BUCKET_NAME;
  const REGION = process.env.REACT_APP_AWS_REGION;
  const ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
  const SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
  const folder = 'OneActDriving/Instructor/';
  const s3 = new AWS.S3 ({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
    region: REGION,
    endpoint: `https://${REGION}.digitaloceanspaces.com`,
  });

  const handleUpload = async () => {
    if (srcData) {
      const params = {
        Bucket: S3_BUCKET,
        Key: folder + srcData.name,
        Body: srcData,
        ACL: 'public-read',
        ContentType: srcData.type,
      };

      return new Promise ((resolve, reject) => {
        s3.upload (params, (err, data) => {
          if (err) {
            console.error ('Error uploading image:', err);
            reject (err);
          } else {
            console.log ('Image uploaded successfully.', data.Location);
            resolve (data.Location);
          }
        });
      });
    } else {
      console.error ('No file selected for upload.');
      return null;
    }
  };

  return handleUpload ();
};

export default UploadImage;
