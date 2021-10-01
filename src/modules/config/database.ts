import knex from 'knex'
import config from '.'

const database = knex({
  client: 'mysql',
  connection: {
    host: config.get('db.host'),
    port: config.get('db.port'),
    user: config.get('db.user'),
    password: config.get('db.password'),
    database: config.get('db.name')
  },
  pool: {
    min: Number(config.get('db.pool.min', 10)),
    max: Number(config.get('db.pool.max', 100))
  }
})

export default database
