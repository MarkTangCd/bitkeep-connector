
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./bitkeep-connector.cjs.production.min.js')
} else {
  module.exports = require('./bitkeep-connector.cjs.development.js')
}
