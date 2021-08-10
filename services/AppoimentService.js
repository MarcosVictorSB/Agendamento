var appoiment = require('../models/appointment')
var mongoose = require('mongoose')
const IAppoimentService = require('./IAppoimentService')
const Appo = mongoose.model('Appointment', appoiment)
const transport = require('../transport/transport.maile.create')
const ValidSendEmail = require('../helpers/ValidSendEmail')
const EmailService = require('../services/EmailService')


class AppoimentService extends IAppoimentService{

   async Finish(id){
      try{
         await Appo.findByIdAndUpdate(id, {finished: true})
         return true
      }catch(err){
         console.log(err)
         return false
      }
   }

   async Search(query){
      try {
         return await Appo.find().or([{email: query}, {cpf: query}])   
      } catch (error) {
         console.log(error)
      }      
   }

   async SendNotification(){
      try{
         var appos = await this.GetAll(false)
      
         appos.forEach(async appo =>  {

            const isValidSendEmail = ValidSendEmail(appo)
            if(isValidSendEmail){

               await Appo.findByIdAndUpdate(appo.id, {notified: true})

               transport
                  .sendMail(EmailService.contentEmail(appo.email, appo.start))
                  .then(() => {
                     console.log(`Email enviado para ${appo.title}`)
                  }).catch(err => {
                     console.log(`Error ao email enviado para ${appo.title}`)
               })
            }
         });
      }catch(error) {
         console.log(error)
      }
   }
}

module.exports = new AppoimentService()