class EmailService{

   static contentEmail(email, start){
      console.log('entrou aqui')
      return {
         from: "Marcos Victor <marcos@marcos.com.br>",
         to: email,
         subject: "Sua consultar vai aconter em breve",
         text: `Contendo qualquer: ${start}`
      }
   }
}

module.exports = EmailService