import AWS from 'aws-sdk';
import { AWS_CREDENTIALS } from 'properties';

AWS.config.update({ region: 'us-east-2' });

let documentClient = new AWS.DynamoDB.DocumentClient(AWS_CREDENTIALS);

async function ready() {
  try {
    await documentClient;
    return this;
  } catch(error) {
    console.error(error);
  }
};

async function requestWrapper(request, params) {
  try {
    return new Promise((resolve, reject) => {
      request(params, (error, resp) => {
        if (error) { return reject(error); };

        resolve(resp);
      });
    });
  } catch(error) {
    console.error(error);
  }
}

async function get(params) {
  return requestWrapper(documentClient.get, params);
}

async function put(params) {
  return requestWrapper(documentClient.put, params);
};

const dynamoDB = {
  ready,
  get,
  put,
};

export default dynamoDB;
