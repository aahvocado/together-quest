/*
    Since there's a lot of messy environment variables,
    this file picks which variables we expose
*/
module.exports = [
    'NODE_PATH',
    'NODE_ENV',
    'AWS_SECRET',
    'AWS_ACCESS',
];
