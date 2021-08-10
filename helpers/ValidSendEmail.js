function ValidSendEmail(appo){
   var date = appo.start.getTime() // pegamento a data em milisegundos
   var hour = 1_000 * 60 * 60
   var gap = date - Date.now()
   return (gap <= hour && !appo.notified)
}

module.exports = ValidSendEmail