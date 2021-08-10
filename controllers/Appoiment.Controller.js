const AppoimentService = require('../services/AppoimentService')


class AppoimentController {

   static async Home(req, res){
      try{
         res.render('index')
      }catch(err){
         console.log(err)
      }
   }

   static async Cadastro(req, res){
      try {
         res.render('create')
      } catch (error) {
         console.log(err)
      }
   }

   static async CreateAppoiment(req, res){
      try {
         var status = await AppoimentService.Create(
               req.body.name,
               req.body.email,
               req.body.description,
               req.body.cpf,
               req.body.date,
               req.body.time
         )
      
         if(status){
            res.redirect('/')
         }else{
         }
      } catch (error) {
         console.log(error)
      }
   }

   static async GetAllAppoiment(req, res){
      try{
         var appoiments = await AppoimentService.GetAll(false)
         res.json(appoiments)
      }catch(err){
         console.log(err)
      }
   }

   static async GetAppoimentId(req, res){
      try {
         var appoiment = await AppoimentService.GetById(req.params.id)
         res.render('event', { appo: appoiment })   
      } catch (err) {
         console.log(err)
      }
   }

   static async FinishAppoiment(req, res){
      try {
         var id = req.body.id
         var result = await AppoimentService.Finish(id)      
         res.redirect('/')
      } catch (err) {
         console.log(err)
      }
   }

   static async ListsAppoiment(req, res){
      try {
         var appos = await AppoimentService.GetAll(true)
         res.render('list', {appos})   
      } catch (err) {
         console.log(err)
      }
   }

   static async SearchAppoiment(req, res){
      try {
         if(req.query.search){
            var appos = await AppoimentService.Search(req.query.search)
            res.render('list', {appos})
         }else{
            res.redirect('list')   
         }
         
            
      } catch (err) {
         console.log(err)
         
      }
   }
}


module.exports = AppoimentController