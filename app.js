// Carregando Módulos
process.env.PWD = process.cwd()

const { default: Swal } = require("sweetalert2");
const express = require('express')
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const insecureHandlebars = allowInsecurePrototypeAccess(Handlebars)
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const admin = require("./routes/admin")
const path = require("path")
const Questpesq = require("./models/Questionario")
const Cadas = require("./models/Cadastro")

const Questionario = mongoose.model('questionarios')
const Cadastro = mongoose.model('cadastros')


const nodemailer = require('nodemailer'); 
//   Body Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// HandleBars
app.engine('handlebars' , expressHandlebars({handlebars: allowInsecurePrototypeAccess(Handlebars)}))
app.set('view engine','handlebars')
// Public - Falando pro Express que a pasta de Arquivos Estaticos é a Public
app.use(express.static(process.env.PWD + '/public'));
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'files')));
 //  Conexão Servidor

  mongoose.connect("mongodb://psi-emocao-tra01:pesqemotion@mongo_psi-emocao-tra01:27017/psi-emocao-tra01",
 { useUnifiedTopology: true,
useNewUrlParser: true }).then(() => {
   console.log("Conectado ao Mongo")
  }).catch((err) => {
  console.log("Erro ao se Conectar: "+err)
  }) 

//Conexão Localhost
/*
mongoose.connect("mongodb://localhost:27017/PsiLaborPesq", { useUnifiedTopology: true,
useNewUrlParser: true }).then(() => {
   console.log("Conectado ao Mongo")
   }).catch((err) => {
   console.log("Erro ao se Conectar: "+err)
   })
*/ 
//   Email
 function envEmail(Stg_email,Stg_tit_princ,Stg_tit_00,Stg_02,Stg_04,Stg_12,Stg_14,Stg_22,Stg_24,Stg_32,Stg_34,Stg_42,Stg_44,
                   Stg_tit_01,Stgf2_02,Stgf2_04,Stgf2_12,Stgf2_14,Stgf2_22,Stgf2_24,Stgf2_32,Stgf2_34,Stgf2_42,Stgf2_44,
                   Stg_tit_02,Stgf3_02,Stgf3_04,Stgf3_12,Stgf3_14,Stgf3_22,Stgf3_24,StgReferDesc){
 
  let transporter = nodemailer.createTransport({
    host : "smtp.umbler.com",
    port  : 587,
    secure : false,
    auth : {
      user : "pesquisaemotion@psi-trabalho-emocao.tech",
      pass : "Bentosof14@",
    }

});

transporter.sendMail({
  from :"pesquisaemotion<pesquisaemotion@psi-trabalho-emocao.tech>",
  to : Stg_email+",louise_sobral@hotmail.com,denisonsobral@gmail.com",
  subject : "Devolutiva Participação de Pesquisa Emoções e Trabalho.",
  text : "Devolutiva Participação de Pesquisa Emoções e Trabalho.",
  html:" <!DOCTYPE html>  <html> <head> " +
  "<style> table, th, td {  border: 1px solid DodgerBlue; } th {background-color:#bfbfbf;text-align: justify; text-justify: inter-word;} td {background-color:#f2f2f2;text-align: justify; text-justify: inter-word;} </style> </head>"+
  "<body>"+
  "<table>"+ 
  "<tr> <th colspan=2>"+Stg_tit_princ+"</th></tr> "+
  "<tr> <th colspan=2>"+Stg_tit_02+"</th></tr> "+
 
  "<tr> <th>Resultados</th>  <th>[Média]</th>  </tr> "+
 
  "<tr><td>"+Stgf3_02+"</td><td>"+Stgf3_04+"</td></tr>"+
  
  "<tr><td>"+Stgf3_12+"</td><td>"+Stgf3_14+"</td></tr>"+
  
  "<tr><td>"+Stgf3_22+"</td><td>"+Stgf3_24+"</td></tr>"+
 
  "<tr> <th colspan=2  text-align:justify>"+Stg_tit_01+"</th></tr> "+
 
  "<tr> <th>Resultados</th>  <th>[Média]</th>  </tr> "+
 
  "<tr><td>"+Stgf2_02+"</td><td   text-align:center>"+Stgf2_04+"</td></tr>"+
  
  "<tr><td>"+Stgf2_12+"</td><td>"+Stgf2_14+"</td></tr>"+
  
  "<tr><td>"+Stgf2_22+"</td><td>"+Stgf2_24+"</td></tr>"+
  
  "<tr><td>"+Stgf2_32+"</td><td>"+Stgf2_34+"</td></tr>"+
  
  "<tr><td>"+Stgf2_42+"</td><td>"+Stgf2_44+"</td></tr>" +

  
"<tr> <th colspan=2>"+Stg_tit_00+"</th></tr> "+
 
"<tr> <th>Resultados</th>  <th>[Média]</th>  </tr> "+

"<tr><td>"+Stg_02+"</td><td   text-align:center>"+Stg_04+"</td></tr>"+

"<tr><td>"+Stg_12+"</td><td>"+Stg_14+"</td></tr>"+

"<tr><td>"+Stg_22+"</td><td>"+Stg_24+"</td></tr>"+

"<tr><td>"+Stg_32+"</td><td>"+Stg_34+"</td></tr>"+

"<tr><td>"+Stg_42+"</td><td>"+Stg_44+"</td></tr>" +

"<tr> <td colspan=2>"+StgReferDesc+"</td></tr> "+
/*"<tr> <th colspan=2>"+Stg_tit_02+"</th></tr> "+*/
  "</table>"+
 "</body>"+  
 "</html>"






}).then(message => { 
  console.log(message);
 }).catch(err =>{
   console.log(err);
 })



}






// Email



//  Rotas
app.use('/admin',admin)
      
app.post('/cadumbler',  (req,res) => {
 // console.log('body: ' + JSON.stringify(req.body));
 



        envEmail(req.body.Email,req.body.Stg_tit_princ,req.body.Stg_tit_00,
          req.body.Stg_td_02,req.body.Stg_ct_04,
          req.body.Stg_td_12,req.body.Stg_ct_14,
          req.body.Stg_td_22,req.body.Stg_ct_24,
          req.body.Stg_td_32,req.body.Stg_ct_34,
          req.body.Stg_td_42,req.body.Stg_ct_44,
          req.body.Stg_tit_01,req.body.Stgf2_td_02,req.body.Stgf2_ct_04,
          req.body.Stgf2_td_12,req.body.Stgf2_ct_14,
          req.body.Stgf2_td_22,req.body.Stgf2_ct_24,
          req.body.Stgf2_td_32,req.body.Stgf2_ct_34,
          req.body.Stgf2_td_42,req.body.Stgf2_ct_44,
          req.body.Stg_tit_02,req.body.Stgf3_td_02,req.body.Stgf3_ct_04,
          req.body.Stgf3_td_12,req.body.Stgf3_ct_14,
          req.body.Stgf3_td_22,req.body.Stgf3_ct_24,req.body.StgReferDesc); 
       
      let  quest = new Questionario(req.body);
    //  console.log('Cadastro Questionario => '+quest);
      quest.save(function(error){
           if(error){
             console.log("Error Error Error ! "+error);
           }
           else{
               console.log("Questionario Salvo com Sucesso !");
              
               res.redirect('/admin/close')
           }
       });
   })

app.post('/add-pagamentoxxx',  (req,res) => {
 // console.log('body: ' + JSON.stringify(req.body));
      let  cadas = new Cadastro(req.body);
  //    console.log('CADAS CADS '+cadas);
      cadas.save(function(error){
           if(error){
             console.log("Error Error Error ! "+error);
           }
           else{
               console.log("Cadastro Salvo com Sucesso !");
           }
       });
   
   })

   
//const PORT Umbler = 8089
const PORT = 3000
app.listen(PORT,() => {
    console.log("Servidor Rodando na Porta "+PORT)
})