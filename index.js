const express = require("express")
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes')
const path = require('path')



app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

mongoose
   .connect('mongodb://localhost:27017/agendamento',{
      useNewUrlParser: true,
      useUnifiedTopology: true     
   })

mongoose.set('useFindAndModify', false)




var pollTime = 5 * 60_000
// var pollTime = 3000

setInterval( async() => {

   await AppoimentService.SendNotification()


}, pollTime);

routes(app)

app.listen(8080, () => {})

module.exports = app