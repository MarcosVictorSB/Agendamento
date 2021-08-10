var appoiment = require('../models/appointment')
var mongoose = require('mongoose')
var AppointmentFactory = require('../factories/AppoimentFactory')

const Appo = mongoose.model('Appointment', appoiment)

class IAppoimentService {
   async Create(name, email, description, cpf, date, time){
      var newAppo = new Appo({
         name,
         email,
         description,
         cpf,
         date,
         time,
         finished: false,
         notified: false
      })

      try {
         await newAppo.save()
         return true   
      } catch (error) {
         console.log(error)
         return false
      }      
   }

   async GetAll(showFinished){
      if(showFinished){
         return await Appo.find()
      }else{
         var appos = await Appo.find({'finished': false})
         var appoiments = []
         appos.forEach(appoiment => {
            if(appoiment.data === undefined){
               appoiments.push(AppointmentFactory.Build(appoiment))   
            }
         })

         return appoiments;
      }
   }

   async GetById(id){
      try {
         var event = await Appo.findOne({'_id': id}) 
         return event  
      } catch (err) {
         console.log(err)
      }
   }
}


module.exports = IAppoimentService