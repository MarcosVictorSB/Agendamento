const Router = require('express')

const AppoimentController = require('../controllers/Appoiment.Controller')

const router = Router()

router
   .get('/', AppoimentController.Home)
   .get('/cadastro', AppoimentController.Cadastro)   
   .get('/getcalendar', AppoimentController.GetAllAppoiment)
   .get('/event/:id', AppoimentController.GetAppoimentId)   
   .get('/list', AppoimentController.ListsAppoiment)
   .get('/searchresult', AppoimentController.SearchAppoiment)

   .post('/create', AppoimentController.CreateAppoiment)
   .post('/finish', AppoimentController.FinishAppoiment)

module.exports = router