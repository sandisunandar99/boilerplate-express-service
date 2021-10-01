import jwt from 'express-jwt'
import config from '../config'
import * as express from 'express'

export default jwt({
  secret: Buffer.from(config.get('jwt.public'), 'base64').toString().replace(/\\n/g, '\n'),
  algorithms: ['RS256'],
  credentialsRequired: true,
  getToken: function fromHeaderOrQuerystring (req: express.Request) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1]
    } else if (req.query && req.query.token) {
      return req.query.token
    }
    return null
  }
})
