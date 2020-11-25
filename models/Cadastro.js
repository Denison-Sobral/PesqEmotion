const mongoose = require("mongoose")
const Schema = mongoose.Schema;
//const Questionario = new Schema({
//    nome  : {  type : String   },
//    email : {  type : String  }

//})
const Cadastro = new Schema({
     Nome:{  type : String  }, 
     Valor:{  type : String  },
     Data_Inclusao : {  type :Date,  default: Date.now() }

}) 

//({
//    nome : {  type : String, required : true  },
//    email :{  type : String, required : true  },
//   
//})
mongoose.model("cadastros",Cadastro)