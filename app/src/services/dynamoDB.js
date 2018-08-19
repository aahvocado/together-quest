import AWS from 'aws-sdk';
import { AWS_CREDENTIALS } from 'properties';

AWS.config.update({ region: 'us-east-2' });

const documentClient = new AWS.DynamoDB.DocumentClient(AWS_CREDENTIALS);

const ready = async () => {
  try {
    await documentClient;
    console.log('DynamoDB :: Ready');
    return this;
  } catch(error) {
    console.error(error);
  }
};

const requestWrapper = async (request, params) => {
  try {
    return new Promise((resolve, reject) => {
      documentClient[request](params, (error, resp) => {
        if (error) { return reject(error); };

        resolve(resp);
      });
    });
  } catch(error) {
    console.error(error);
  }
}

const get = async (params) => {
  return requestWrapper('get', params);
}

const put = async (params) => {
  return requestWrapper('put', params);
};

const dynamoDB = {
  ready,
  get,
  put,
};

export default dynamoDB;
