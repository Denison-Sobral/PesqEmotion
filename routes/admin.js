const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const que = require("../models/Questionario")
const Cadas = require("../models/Cadastro")

const Questionario = mongoose.model('questionarios')
const Cadastro = mongoose.model('cadastros')
router.get('/',(req,res) => {
       res.send("Pagina Principal do Painel ADM")
} )

router.post('/add-pagamento',  (req,res) => {
    console.log('body: ' + JSON.stringify(req.body));
         
        let  cadas = new Cadastro(req.body);
        
        cadas.save(function(error){
             if(error){
               console.log("Error Error Error ! "+error);
             }
             else{
                 console.log("Cadastro Salvo com Sucesso !");
             }
         });
         res.redirect('/fecha');
     }
   
     )

router.post('/seila',  (req,res) => {
    console.log('body: ' + JSON.stringify(req.body));
         
        let  quest = new Questionario(req.body);
        
        quest.save(function(error){
             if(error){
               console.log("Error Error Error ! "+error);
             }
             else{
                 console.log("Questionario Salvo com Sucesso !");
             }
         });
     
     })
     router.get('/listagem', function(req, res){
       Questionario.find().then((questionario) =>  {
     // res.render("admin/listagem",{teste: "Listagem Teste", teste01: "Listagem Teste 02"})
          res.render("admin/listagem",{questionario : questionario})
       })
            })

     router.get('/listar', function(req, res){
        Questionario.find().then((questionario) => {
          res.send(questionario)
          }).catch((err) => {
              res.send("Questionario não encontrado ")
            })
            })

router.get('/posts', (req,res) => {
    res.send("Pagina de Posts")
})
router.post('/teste', (req,res) => {
    res.send("Pagina de Posts teste")
})
router.get('/fecha', (req,res) => {
    res.render("admin/pesqfecha")
})
router.get('/cadastro',(req,res) => {
    res.render("admin/cadpagamento")
})
router.get('/pesquisa',(req,res) => {
    res.render("admin/pesqbegin")
 })
router.get('/quest',(req,res) => {
    res.render("admin/pesqquestionario")
})
router.get('/close',(req,res) => {
    res.render("admin/pesqfechamento")
})

module.exports = router