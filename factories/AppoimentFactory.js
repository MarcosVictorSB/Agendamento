class AppointmentFactory {
   
   Build(simpleAppoiment){

      var day   = simpleAppoiment.date.getDate() + 1
      var month = simpleAppoiment.date.getMonth()
      var year  = simpleAppoiment.date.getFullYear()
      
      var hour = Number.parseInt(simpleAppoiment.time.split(':')[0])   
      var minutes = Number.parseInt(simpleAppoiment.time.split(':')[1])   

      var startDate = new Date(year, month, day, hour, minutes, 0, 0)

      var appo = {
         id: simpleAppoiment._id,
         title: simpleAppoiment.name + ' - ' + simpleAppoiment.description,
         start: startDate,
         end: startDate,
         notified: simpleAppoiment.notified,
         email: simpleAppoiment.email
      }

      return appo

   }
}


module.exports = new AppointmentFactory