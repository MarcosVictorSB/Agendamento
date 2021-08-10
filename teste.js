const fild =  [
   {require: true, value: 'Somethin'},
   {require: true, value: ''},
   {require: false, value: 'Somethin'},
   {require: false, value: ''},
   {require: true, value: ''},
]

const valid = fild.every(({require, value}) => (require ? !!value: false))

const lista = []

if(lista){
   console.log(lista['id'])
}else{
   console.log('2')
}