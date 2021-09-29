const { v4: uuidv4 } = require('uuid');

const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
  
    const imageParams = {

      Bucket: 'plant-user-images-f81eb666-71aa-400b-bc11-f6044536571c',
      Key: `${uuidv4()}.${fileType}`,
      Body: fileName.buffer,
      ACL: 'public-read'
    };
  
    return imageParams;
  };

  module.exports = params;