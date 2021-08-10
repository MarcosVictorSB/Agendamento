const bodyParser = require('body-parser')
const appoimentRoute = require('./appoiment.routes')

module.exports = app => {
   app.use(
      bodyParser.urlencoded({extended: false}),
      bodyParser.json(),
      appoimentRoute
   )
}