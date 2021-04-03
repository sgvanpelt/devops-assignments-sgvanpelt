const username = process.env.db_username || '';
const password = process.env.db_password || '';
const host = process.env.DB || 'localhost';
const port = process.env.port || '27017';
const database = process.env.database || 'Connections';
const params = process.env.params || '';
const secret = process.env.secret || 'MyLittleSecret';

let uri = 'mongodb://';
if (username && password) {
  uri += `${username}:${password}@`;
}

uri += `${host}:${port}/${database}${params}`;

module.exports = {
  mongodb: { uri },
  secret,
};
