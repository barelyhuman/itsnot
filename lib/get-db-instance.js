const knex = require('knex');

export default function getDBInstance() {
  const config = require('knexfile.js');
  const env = process.env.NODE_ENV || 'development';
  if (config[env]) {
    return knex(config[env]);
  }
  throw new Error('Cannot Cannot to knext with the given process env');
}
