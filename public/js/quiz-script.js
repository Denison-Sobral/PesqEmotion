// const Swal  =  require('sweetalert2');
  
// const nodemailerxx = require('nodemailer');
 var descPart01 = "Instruções: a seguir são descritas algumas situações que acontecem no ambiente de trabalho. Você deve responder analisando a probabilidade de reagir a elas, conforme as opções apresentadas.  Você vai analisar cada alternativa, quanto mais próximo de 1, menos provável sua reação e quanto mais próximo de 5, mais provável. Não há respostas certas. Ao responder as situações, é importante que você seja sincero.";
 //var descPart02 = "Instruções: abaixo, está apresentada uma lista de comportamento relacionados a estilo de decisão, considerando sua ocupaão de gestor, marque numa escala de 1 a 5, oquanto você normalmente age dessa forma, sendo 1 nunca, 2 às vezes, 3 moderadamente, 4 frequentemente, 5 sempre";
 //var descPart02 = "Instruções: Abaixo, está apresentada uma lista de comportamentos relacionados a estilo de decisão, considerando sua ocupação de gestor, marque numa escala de 1 a 5, o quanto você normalmente age dessa forma, sendo 1 nunca, 2 às vezes, 3 moderadamente, 4 frequentemente, 5 sempre."
 var descPart02 = "Instruções: abaixo, estão listadas declarações que descrevem como as pessoas tomam decisões importantes. Indique se você concorda ou discorda. Marque numa escala de 1 a 5, o quanto você concorda- sendo 1 discordo totalmente, 2 discordo, 3 concordo parcialmente, 4 concordo, 5 concordo totalmente"
 var descPart03 = "Instruções: marque de 1 a 5 quanto se identifica com cada afirmação, sendo que quanto mais próximo de 5, maior a identificação";
 var descPart04 = "Dados Sócio demográficos – Por favor, responda as questões de acordo com o seu perfil.";
 var descPartGrava = "Sua participação é muito importante, agradecemos a colaboração. Clique no botão finalizar para salvar suas respostas e gerar sua devolutiva.Dúvidas, enviar e-mail para: louise_sobral@hotmail.com. Para saber mais sobre emoções e afetos em contexto de trabalho, acessar: http://emotrab.ufba.br.";
 var StgopcCt = "";
 var contErro = 0;

 var flagErro = 1;

 var currentQuestion = 0;

var score = 0;

var totQuestions = (questions.length);

var spinnercont = document.getElementById('spinnercontainer');
var firstcont = document.getElementById('firstcontainer');
var container = document.getElementById('quizcontainer');
var quizres = document.getElementById('quizresult');
var quizfecha = document.getElementById('quizfechamento');
var questionPrinc = document.getElementById('questionPrinc');

var questionSubA = document.getElementById('questionSubA');
var opta_1 = document.getElementById('opta_1');
var opta_2 = document.getElementById('opta_2');
var opta_3 = document.getElementById('opta_3');
var opta_4 = document.getElementById('opta_4');
var opta_5 = document.getElementById('opta_5');

var questionSubB = document.getElementById('questionSubB');
var optb_1 = document.getElementById('optb_1');
var optb_2 = document.getElementById('optb_2');
var optb_3 = document.getElementById('optb_3');
var optb_4 = document.getElementById('optb_4');
var optb_5 = document.getElementById('optb_5');

var questionSubC = document.getElementById('questionSubC');
var optc_1 = document.getElementById('optc_1');
var optc_2 = document.getElementById('optc_2');
var optc_3 = document.getElementById('optc_3');
var optc_4 = document.getElementById('optc_4');
var optc_5 = document.getElementById('optc_5');

var questionSubD = document.getElementById('questionSubD');
var optd_1 = document.getElementById('optd_1');
var optd_2 = document.getElementById('optd_2');
var optd_3 = document.getElementById('optd_3');
var optd_4 = document.getElementById('optd_4');
var optd_5 = document.getElementById('optd_5');

var questionSubE = document.getElementById('questionSubE');
var opte_1 = document.getElementById('opte_1');
var opte_2 = document.getElementById('opte_2');
var opte_3 = document.getElementById('opte_3');
var opte_4 = document.getElementById('opte_4');
var opte_5 = document.getElementById('opte_5');

var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var stgGlobalRefer = "Referências consultadas :<br>Davis, J. & Cols. (2015). Development and validation of measure for emotion regulation at work: introducting the werpi. Personality and Individual differences, 85, 245-240.DOI: 10.1016/j.paid.2015.05.009<br> Gross, J. J. (1998). The emerging field of emotion regulation: An integrative review. Reviewof General Psychology, 2, 271-299. DOI: 10.1037/1089-2680.2.3.271<br> Gross, J. J. (2015). Emotion regulation: Current status and future prospects. Psychological Inquiry, 26(1), 1-26. doi:10.1080/104784X.2014.940781<br> LeodirLöbler, M., dos Reis, E., MayumiNishi, J., & Dutra Tagliapietra, R. (2019). Inventário De Estilos De Tomada De Decisão: Validação De Instrumento No Contexto Brasileiro. Revista de Administraçãao Da UNIMEP, 17(1), 1–23.<br>Luna, A. F.; Gondim, S. M. G. (2019) Fatores de risco psicossocial no trabalho: adaptação e evidências de validade do COPSOQ II para o contexto brasileiro. Revista Laborativa. 8 (1), 05-25. http://ojs.unesp.br/indexphp/rlaborativa <br>Scott, S. G., & Bruce, R. A. (1995). Decision-makingstyle: The developmentandassessmentof a new measure. EducationalandPsychologicalMeasurement, 55(5), 818-831. doi: 10.1177/0013164495055005017";


var stgGlobalTitPrinc = "Sua participação é muito importante para o desenvolvimento da pesquisa, muito obrigada! Confira suas respostas! Para cada escala, a reposta pode variar de 1 até 5, quanto mais perto de cinco, maior predominância do fenômeno. Leia a descrição da escala e veja sua média! Para saber mais sobre emoções em contexto de trabalho, acesse http://emotrab.ufba.br/. Dúvidas? Envie e-mailpara:louise_sobral@hotmail.com";
var  stgGlobalFase03 = "Escala de auto eficácia ocupacional -adaptada por Gondim e Luna, (2019) – A escala foca na avaliação do trabalhador sobre sua capacidade de ser agente ativo no contexto de trabalho, interagindo socialmente, mobilizando processos autorregulatórios afetivos e busca de suporte quando necessário. A escala é estruturada em três fatores:";

var  stgGlobalFase02 = "Estilo de decisão de Scott e Bruce (1995)- Decision Making Style (GDMS)- adaptada para o contexto brasileiro porLöbler, Reis, Nishi&Tagliapietra, (2019) - para os autores o estilo de tomada de decisão é um o padrão de resposta habitual aprendido exibido por um indivíduo quando confrontado com uma situação de decisão. Não é um traço de personalidade, mas uma propensão ao hábito de reagir de certa maneira em um contexto de decisão específico. Os autores propuseram cinco estilos de decisão:";
var  stgGlobalFase01 = "Inventário de Regulação Emocional em contexto de trabalho -  WERPI -Workplace emotion regulation preference inventory – propostopor Davis et al. (2015) é baseado no modelo de regulação emocional de Gross (1998; 2015), apresenta a preferência que o indivíduo tem pela estratégia de regulação emocional em contexto de trabalho, são cinco grupos de estratégias:";

       





var rcdfCT =  [ {Cod:"A",Desc:"(A) Modificação da situação: consiste em expressar emoções intencionais para mudar o curso da interação em andamento;", Ct:0},
                {Cod:"B",Desc:"(B) Seleção da situação:  consiste em aproximar ou se distanciar de pessoas, objetos e eventos para evitar emoções indesejáveis ou fazer vir à tona emoções desejáveis;", Ct:0},
                {Cod:"C",Desc:"(C) Atenção posicionada: consiste em redirecionar o foco da atenção a partir de - i) distração, que foca aspectos não emocionais da situação ou em outros eventos mais prazerosos- ii) concentração, que foca uma outra atividade para evitar pensar na situação que evoca a emoçãoe iii) ruminação, que foca demasiadamente o evento eliciador da emoção e suas consequências, com o objetivo de esgotar as possibilidades de se sofrer pelo evento, fazendo-o perder a sua força;", Ct:0},
                {Cod:"D",Desc:"(D) Mudança cognitiva: consiste em negar e interpretar positiva ou negativamente, comparando o que se sente com o que outras pessoas sentem em situações semelhantes ou reavaliar a situação de uma perspectiva distinta para atenuar o seu impacto emocional.", Ct:0},
                {Cod:"E",Desc:"(E) Modulação da resposta:indivíduo tenta mudar os estados fisiológicos pessoais e a expressão da emoção, uma vez que a emoção tenha sido sentida.Se referem as ações para atenuar ou compensar os impactos emocionais, por meio de exercícios respiratórios, de biofeedback e de relaxamento, e ainda pelo uso de tranquilizantes, relaxantes musculares, álcool, comida e cigarro. A regulação da expressão também pertence a esse grupo de estratégias, e é feita por meio da supressão (tentar não mostrar) ou da intensificação (fazer questão de mostrar) para modular a experiência emocional. Há ainda uma outra estratégia inserida neste grupo que é o compartilhamento social das emoções.", Ct:0}]
var rcdfCTF02 =  [ {Cod:"A",Desc:"(A) Racional:  caracterizado por indivíduos que questionam o problema de decisão de uma forma lógica e estruturada, considerando as diversas alternativas de decisão.", Ct:0},
                   {Cod:"B",Desc:"(B) Intuitivo: caracterizado por indivíduos que possuem forte dependência de emoções, pressentimentos, palpites, e intuições, foca a atenção aos detalhes e a tendência a confiar nos sentimentos.", Ct:0},
                   {Cod:"C",Desc:"(C) Dependente: caracterizado por indivíduos que constantemente buscam conselhos e dependem da orientação e apoio de outras pessoas.", Ct:0},
                   {Cod:"D",Desc:"(D) Procastinador: caracterizado por indivíduos que tentam evitar e adiar as decisões, e quando as tomam é normalmente no último momento e.", Ct:0},
                   {Cod:"E",Desc:"(E) Espontâneo: caracterizado por indivíduos que têm senso de urgência e desejo de concluir o processo de decisão o mais rápido possível, ou seja implementar.", Ct:0}]
var rcdfCTF03 =  [ {Cod:"A",Desc:"(1) Completude da tarefa: inclui as crenças sobre a capacidade de cumprir com as tarefas previstas, o que abarca a realização da atividade, o alcance de seus objetivos e a capacidade de permanecer ativo no trabalho", Ct:0},
                   {Cod:"B",Desc:"(2) Manejo afetivo: contempla as crenças sobre a capacidade de lidar com demandas ou repercussões afetivo-emocionais do trabalho sobre a vivência individual de uma condição de adoecimento.", Ct:0},
                   {Cod:"C",Desc:"(3) Suporte Social: se refere às crenças sobre a capacidade de obter suporte social.", Ct:0},
                   {Cod:"D",Desc:"Refazer", Ct:0},
                   {Cod:"E",Desc:"Refazer", Ct:0}] 
                     
var respItem = new Object();
var objPesq  = new Object();
var myObjData = new Object;
var glbObj = true;
var myData = 
	{
	    "nome": "Bill00",
	    "email": "AAAAABBB"
    }

    var questList  = [];
    var questModList = [];

    

      function validaFechamento(){
        contErroFecha = 0;
       
        var checkRespForaPandDif = document.getElementsByName('RespForaPandDif');
        var checkRespForaPandDifLab = document.getElementById('RespForaPandDifLab');
        caixa_RespForaPandDif = document.querySelector('.msg-respand');
        if(flagErro == 1) {
           caixa_RespForaPandDif.innerHTML = "*";
           caixa_RespForaPandDif.style.display = 'block';
           checkRespForaPandDifLab.style.color = "red";
           contErroFecha += 1;
           }else{
           caixa_RespForaPandDif.style.display = 'none';
           checkRespForaPandDifLab.style.color = "black";
           } 
           /* ***Validação do Campo RespForaPandDif**** */    
        flagErro = 1;
  for (ic =0; ic < checkRespForaPandDif.length; ic++ ){
      if( checkRespForaPandDif[ic].checked)
        {
        flagErro = 0;
        }
      } 

      }

      function validaCadastro() {
      contErro = 0;
      
      var checkEmail = document.getElementById('EmailInput');
      var checkEmailLab = document.getElementById('EmailLab');
     
      var checkInstitDesc = document.getElementById('InstitInput');
      var checkInstitDescLab = document.getElementById('InstituicaoDescLab');

      var checkSexo = document.getElementById('Sexo');
      var checkSexoLab = document.getElementById('SexoLab');
      var checkIdade = document.getElementById('Idade');
      var checkIdadeLab = document.getElementById('IdadeLab');
      var checkEscolaridade = document.getElementById('Escolaridade');
      var checkEscolaridadeLab = document.getElementById('EscolaridadeLab');
      var checkEstadoCivil = document.getElementById('EstadoCivil');
      var checkEstadoCivilLab = document.getElementById('EstadoCivilLab');
   
      var checkInstituicao = document.getElementById('Instituicao');
      var checkInstituicaoLab = document.getElementById('InstituicaoLab');
      var checkSetor = document.getElementById('Setor');
      var checkSetorLab = document.getElementById('SetorLab');
     
      var checkLideraEquipe = document.getElementsByName('Lideranca');
      var checkLideraEquipeLab = document.getElementById('LideraEquipeLab');
     
      var checkGestorLab = document.getElementById('GestorLab');
      var checkAtuaGestorLab = document.getElementById('AtuaGestorLab'); 
     
      var checkQtPessoas = document.getElementById('QtPessoas');
      var checkTempoLideraPessoas = document.getElementById('TempoLideraPessoas');
      var checkTFuncao = document.getElementById('TFuncao');
      var checkTFuncaoLab = document.getElementById('TFuncaoLab');
     
     

      var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

      /* Validação do Campo Email */
      caixa_email = document.querySelector('.msg-email');
      if (checkEmail.value == "") {
        caixa_email.innerHTML = "*";
        caixa_email.style.display = 'block';
        checkEmail.style.backgroundColor = "#ffabed";
        checkEmailLab.style.color = "red";
        contErro += 1;
      }
      else if ( filtro.test(checkEmail.value)){
        caixa_email.style.display = 'none';
        checkEmail.style.backgroundColor = "#f5f4f5"
        checkEmailLab.style.color = "black";
      } else {
        caixa_email.innerHTML = "Formato do E-mail inválido";
        caixa_email.style.display = 'block';
        contErro += 1;
      }
       /* Validação do Campo Instituicao */
       
       caixa_InstitDesc = document.querySelector('.msg-instdsc');
       checkInstitDescLab.style.color = "black";
       if(checkInstitDesc.value == ""){
         caixa_InstitDesc.innerHTML = "*";
         caixa_InstitDesc.style.display = 'block';
         checkInstitDesc.style.backgroundColor = "#ffabed";
         checkInstitDescLab.style.color = "red";
         contErro += 1;
       }else{
        caixa_InstitDesc.style.display = 'none';
        checkInstitDesc.style.backgroundColor = "#f5f4f5";
        
       }
      /*Validação do Campo Phone - Retirado em 13-09-2020*/
      
     /*Validação do Campo Sexo*/
    caixa_Sexo = document.querySelector('.msg-sexo');
    if(checkSexo.value == ""){
    caixa_Sexo.innerHTML = "*";
    caixa_Sexo.style.display = 'block';
    checkSexo.style.backgroundColor = "#ffabed";
    checkSexoLab.style.color= "red"; 
    contErro += 1;
    }else{
      caixa_Sexo.style.display = 'none';
      checkSexo.style.backgroundColor = "#f5f4f5";
      checkSexoLab.style.color = "black";
    }

      /* Validação do Campo Idade */
      caixa_Idade = document.querySelector('.msg-idade');
      if(checkIdade.value == ""){
      caixa_Idade.innerHTML = "*";
      caixa_Idade.style.display = 'block';
      checkIdade.style.backgroundColor = "#ffabed";
      checkIdadeLab.style.color = "red";
      contErro += 1;
      }else{
        caixa_Idade.style.display = 'none';
        checkIdade.style.backgroundColor = "#f5f4f5";
        checkIdadeLab.style.color = "black";
      }
       /* Validação do Campo Escolaridade*/
     caixa_Escolaridade = document.querySelector('.msg-escola');
     if(checkEscolaridade.value == ""){
     caixa_Escolaridade.innerHTML = "*";
     caixa_Escolaridade.style.display = 'block';
     checkEscolaridade.style.backgroundColor = "#ffabed";
     checkEscolaridadeLab.style.color = "red";
     contErro += 1;
     }else{
       caixa_Escolaridade.style.display = 'none';
       checkEscolaridadeLab.style.color = "black"
       checkEscolaridade.style.backgroundColor = "#f5f4f5";
     }
      /* Validação do Campo EstadoCivil*/
	   caixa_EstadoCivil = document.querySelector('.msg-estcivil');
    
     if(checkEstadoCivil.value == ""){
     caixa_EstadoCivil.innerHTML = "*";
     caixa_EstadoCivil.style.display = 'block';
     checkEstadoCivil.style.backgroundColor = "#ffabed";
     checkEstadoCivilLab.style.color = "red";
     contErro += 1;
     }else{
       caixa_EstadoCivil.style.display = 'none';
       checkEstadoCivilLab.style.color = "black";
       checkEstadoCivil.style.backgroundColor = "#f5f4f5";
     }
     
      /*  Validação do Campo Lidera Equipe */
      flagErro = 1;
      for (ic =0; ic < checkLideraEquipe.length; ic++ ){
          if( checkLideraEquipe[ic].checked)
            {
            flagErro = 0;
            }
          }
      
      caixa_LideraEquipe = document.querySelector('.msg-lideraequipe');
      if(flagErro == 1) {
        caixa_LideraEquipe.innerHTML = "*";
        caixa_LideraEquipe.style.display = 'block';
        checkLideraEquipeLab.style.color = "red";
        contErro += 1;
       }else{
        caixa_LideraEquipe.style.display = 'none';
        checkLideraEquipeLab.style.color = "black";
        if( checkLideraEquipe[0].checked)
            {
            flagErro = 0;
            document.getElementById('QtPessoas').value = '0';
            document.getElementById('TempoLideraPessoas').value = '0';
            }
        
        }  


      /* Validação do Campo QtPessoas  */
      caixa_QtPessoas = document.querySelector('.msg-qtpessoas');
      if( checkLideraEquipe[1].checked) {
         if(checkQtPessoas.value == ""){
      caixa_QtPessoas.innerHTML = "*";
      caixa_QtPessoas.style.display = 'block';
      checkQtPessoas.style.backgroundColor = "#ffabed";
      contErro += 1;
      }else{
        caixa_QtPessoas.style.display = 'none';
        checkQtPessoas.style.backgroundColor = "#f5f4f5";
      }
    }
    else
    {
      caixa_QtPessoas.style.display = 'none';
      checkQtPessoas.style.backgroundColor = "#f5f4f5";

    }
      /* Validação do Campo checkTempoLideraPessoas */
      caixa_TempoLideraPessoas = document.querySelector('.msg-tempoliderapessoas');
      if( checkLideraEquipe[1].checked) {
     
      if(checkTempoLideraPessoas.value == ""){
      caixa_TempoLideraPessoas.innerHTML = "*";
      caixa_TempoLideraPessoas.style.display = 'block';
      checkTempoLideraPessoas.style.backgroundColor = "#ffabed";
      contErro += 1;
      }else{
      caixa_TempoLideraPessoas.style.display = 'none';
      checkTempoLideraPessoas.style.backgroundColor = "#f5f4f5";
      }
    } else
    {
      caixa_TempoLideraPessoas.style.display = 'none';
      checkTempoLideraPessoas.style.backgroundColor = "#f5f4f5";

    }
      /* Validação do Campo checkTemponaFunção */
      caixa_TFuncao = document.querySelector('.msg-tempofuncaogestao');
      if(checkTFuncao.value == ""){
      caixa_TFuncao.innerHTML = "*";
      caixa_TFuncao.style.display = 'block';
      checkTFuncao.style.backgroundColor = "#ffabed";
      checkTFuncaoLab.style.color = "red";
      contErro += 1;
      }else{
      caixa_TFuncao.style.display = 'none';
      checkTFuncao.style.backgroundColor = "#f5f4f5";
      checkTFuncaoLab.style.color = "black";
      }

     
 
        
   

/*  Validação do Campo Instituição  */
flagErro = 0;

    if( checkInstituicao.value == "")
      {
      flagErro = 1;
      }
   

caixa_Instituicao = document.querySelector('.msg-instituicao');
if(flagErro == 1) {
  caixa_Instituicao.innerHTML = "*";
  caixa_Instituicao.style.display = 'block';
  checkInstituicaoLab.style.color = "red";
  checkInstituicao.style.backgroundColor = "#ffabed";
  contErro += 1;
 }else{
  caixa_Instituicao.style.display = 'none';
  checkInstituicaoLab.style.color = "black";
  checkInstituicao.style.backgroundColor = "#f5f4f5";
 }
/*   Validação do Campo Setor   */
flagErro = 0;

    if( checkSetor.value == "")
      {
      flagErro = 1;
      }


caixa_Setor = document.querySelector('.msg-setor');
if(flagErro == 1) {
  caixa_Setor.innerHTML = "*";
  caixa_Setor.style.display = 'block';
  checkSetorLab.style.color = "red";
  checkSetor.style.backgroundColor = "#ffabed";
  
  contErro += 1;
 }else{
  caixa_Setor.style.display = 'none';
  checkSetorLab.style.color = "black";
  checkSetor.style.backgroundColor = "#f5f4f5";
}
 

 /*  Validação do Campo Gestao */

 caixa_Gestao = document.querySelector('.msg-gestao');
 if(checkAtuaGestorLab.value == ""){
 caixa_Gestao.innerHTML = "*";
 caixa_Gestao.style.display = 'block';
 checkGestorLab.style.color = "red";
 checkAtuaGestorLab.style.backgroundColor = "#ffabed";
 contErro += 1;
 }else{
  caixa_Gestao.style.display = 'none';
  checkAtuaGestorLab.style.backgroundColor = "#f5f4f5";
  checkGestorLab.style.color = "black";
 }
 
 
  }


    function sweetalert(opc,crt,msg,tot){
     var stgnum, mens1, mens2, mensbtn = "";
     
      if ( opc == "M") 
      {
         if (tot == 0) { 
          stgnum = 0;   
          mens2  = "";            
         } else
         {
          stgnum = ((crt*100)/tot).toString(); 
          mens2  = `${stgnum} % `;
         }
         
         mens1 = msg; 
         
         mensbtn = "Continua..";
         mensico = "success";
         
      }
      else
      {
        mens1 = " Todas opções são Obrigatórias..:"; 
        mens2 = msg ;
        mensbtn = "Continua..";
        mensico = "error";
      }
      swal({
        title:  mens1,
        text:   mens2,
        icon:   mensico,
        timer:4500,
          showConfirmButton: false, ClassName:"red-bg"
        });
       
      } 
   
function tableFase01(){
 // Number.parseFloat(x).toPrecision(4) ;

 document.getElementById('TitDesc').innerHTML = stgGlobalTitPrinc;
  document.getElementById('ReferDesc').innerHTML = stgGlobalRefer;
  document.getElementById('StgReferDesc').value = stgGlobalRefer;
  document.getElementById('f1desc').innerHTML = stgGlobalFase01;
  document.getElementById('Stg_tit_princ').value = stgGlobalTitPrinc;
  document.getElementById('Stg_tit_00').value = stgGlobalFase01;
  // document.getElementById('td0_1').innerHTML = rcdfCT[0].Cod;
  document.getElementById('td0_2').innerHTML = rcdfCT[0].Desc;
  document.getElementById('Stg_td_02').value = rcdfCT[0].Desc;
 // document.getElementById('td0_3').innerHTML = "[" + (rcdfCT[0].Ct).toString() + "]" ;
  document.getElementById('td0_4').innerHTML = "[" + ((rcdfCT[0].Ct / 28).toPrecision(2)).toString() + "]";
  document.getElementById('Stg_ct_04').value = "[" + ((rcdfCT[0].Ct / 28).toPrecision(2)).toString() + "]";
 
  // document.getElementById('td1_1').innerHTML = rcdfCT[1].Cod;
  document.getElementById('td1_2').innerHTML = rcdfCT[1].Desc;
  document.getElementById('Stg_td_12').value = rcdfCT[1].Desc;
 // document.getElementById('td1_3').innerHTML = "[" + (rcdfCT[1].Ct).toString()+ "]";
  document.getElementById('td1_4').innerHTML = "[" + ((rcdfCT[1].Ct / 28).toPrecision(2)).toString()+ "]";
  document.getElementById('Stg_ct_14').value = "[" + ((rcdfCT[1].Ct / 28).toPrecision(2)).toString() + "]";
 

 // document.getElementById('td2_1').innerHTML = rcdfCT[2].Cod;
  document.getElementById('td2_2').innerHTML = rcdfCT[2].Desc;
  document.getElementById('Stg_td_22').value = rcdfCT[2].Desc;
 // document.getElementById('td2_3').innerHTML = "[" + (rcdfCT[2].Ct).toString()+ "]";
  document.getElementById('td2_4').innerHTML = "[" + ((rcdfCT[2].Ct / 28).toPrecision(2)).toString()+ "]";
  document.getElementById('Stg_ct_24').value = "[" + ((rcdfCT[2].Ct / 28).toPrecision(2)).toString() + "]";
 
 // document.getElementById('td3_1').innerHTML = rcdfCT[3].Cod;
  document.getElementById('td3_2').innerHTML = rcdfCT[3].Desc;
  document.getElementById('Stg_td_32').value = rcdfCT[3].Desc;
 // document.getElementById('td3_3').innerHTML = "[" + (rcdfCT[3].Ct).toString()+ "]";
  document.getElementById('td3_4').innerHTML = "[" + ((rcdfCT[3].Ct / 28).toPrecision(2)).toString()+ "]";
  document.getElementById('Stg_ct_34').value = "[" + ((rcdfCT[3].Ct / 28).toPrecision(2)).toString() + "]";
 

// document.getElementById('td4_1').innerHTML = rcdfCT[4].Cod;
  document.getElementById('td4_2').innerHTML = rcdfCT[4].Desc;
  document.getElementById('Stg_td_42').value = rcdfCT[4].Desc;
// document.getElementById('td4_3').innerHTML = "[" + (Glb_rcdfCT[4].Ct).toString()+ "]";
  document.getElementById('td4_4').innerHTML = "[" + ((rcdfCT[4].Ct / 28).toPrecision(2)).toString()+ "]";
  document.getElementById('Stg_ct_44').value = "[" + ((rcdfCT[4].Ct / 28).toPrecision(2)).toString() + "]";
 
  // document.getElementById('td4_1').innerHTML = rcdfCT[4].Cod;


}

function tableFase02(){
  var ct5 = 5;
  var ct4 = 4;
  var ct3 = 3;
  var ct2 = 1;
  var ct1 = 1;
  document.getElementById('f2desc').innerHTML = stgGlobalFase02;
  document.getElementById('Stg_tit_01').value = stgGlobalFase02;
 
  //  document.getElementById('f2td0_1').innerHTML = rcdfCTF02[0].Cod;
  document.getElementById('f2td0_2').innerHTML = rcdfCTF02[0].Desc;
  document.getElementById('Stgf2_td_02').value = rcdfCTF02[0].Desc;
 // document.getElementById('f2td0_3').innerHTML = "[" + (rcdfCTF02[0].Ct).toString() + "]" ;
  document.getElementById('f2td0_4').innerHTML = "[" + ((rcdfCTF02[0].Ct / ct4).toPrecision(2)).toString() + "]";
  document.getElementById('Stgf2_ct_04').value = "[" + ((rcdfCTF02[0].Ct / ct4).toPrecision(2)).toString() + "]";

 // document.getElementById('f2td1_1').innerHTML = rcdfCTF02[1].Cod;
  document.getElementById('f2td1_2').innerHTML = rcdfCTF02[1].Desc;
  document.getElementById('Stgf2_td_12').value = rcdfCTF02[1].Desc;
 // document.getElementById('f2td1_3').innerHTML = "[" + (rcdfCTF02[1].Ct).toString() + "]" ;
  document.getElementById('f2td1_4').innerHTML = "[" + ((rcdfCTF02[1].Ct / ct3).toPrecision(2)).toString() + "]";
  document.getElementById('Stgf2_ct_14').value = "[" + ((rcdfCTF02[1].Ct / ct3).toPrecision(2)).toString() + "]";

 // document.getElementById('f2td2_1').innerHTML = rcdfCTF02[2].Cod;
  document.getElementById('f2td2_2').innerHTML = rcdfCTF02[2].Desc;
  document.getElementById('Stgf2_td_22').value = rcdfCTF02[2].Desc;
 // document.getElementById('f2td2_3').innerHTML = "[" + (rcdfCTF02[2].Ct).toString() + "]" ;
  document.getElementById('f2td2_4').innerHTML = "[" + ((rcdfCTF02[2].Ct / ct5).toPrecision(2)).toString() + "]";
  document.getElementById('Stgf2_ct_24').value = "[" + ((rcdfCTF02[2].Ct / ct5).toPrecision(2)).toString() + "]";

 // document.getElementById('f2td3_1').innerHTML = rcdfCTF02[3].Cod;
  document.getElementById('f2td3_2').innerHTML = rcdfCTF02[3].Desc;
  document.getElementById('Stgf2_td_32').value = rcdfCTF02[3].Desc;
 // document.getElementById('f2td3_3').innerHTML = "[" + (rcdfCTF02[3].Ct).toString() + "]" ;
  document.getElementById('f2td3_4').innerHTML = "[" + ((rcdfCTF02[3].Ct / ct4).toPrecision(2)).toString() + "]";
  document.getElementById('Stgf2_ct_34').value = "[" + ((rcdfCTF02[3].Ct / ct4).toPrecision(2)).toString() + "]";

 // document.getElementById('f2td4_1').innerHTML = rcdfCTF02[4].Cod;
  document.getElementById('f2td4_2').innerHTML = rcdfCTF02[4].Desc;
  document.getElementById('Stgf2_td_42').value = rcdfCTF02[4].Desc;
 // document.getElementById('f2td4_3').innerHTML = "[" + (rcdfCTF02[4].Ct).toString() + "]" ;
  document.getElementById('f2td4_4').innerHTML = "[" + ((rcdfCTF02[4].Ct / ct3).toPrecision(2)).toString() + "]";
  document.getElementById('Stgf2_ct_44').value = "[" + ((rcdfCTF02[4].Ct / ct3).toPrecision(2)).toString() + "]";

}
function tableFase03(){
  document.getElementById('f3desc').innerHTML = stgGlobalFase03;
  document.getElementById('Stg_tit_02').value = stgGlobalFase03;
 
  // document.getElementById('f3td0_1').innerHTML = rcdfCTF03[0].Cod;
  document.getElementById('f3td0_2').innerHTML = rcdfCTF03[0].Desc;
  document.getElementById('Stgf3_td_02').value = rcdfCTF03[0].Desc;
 // document.getElementById('f3td0_3').innerHTML = "[" + (rcdfCTF03[0].Ct).toString() + "]" ;
  document.getElementById('f3td0_4').innerHTML = "[" + ((rcdfCTF03[0].Ct / 4).toPrecision(2)).toString() + "]";
  document.getElementById('Stgf3_ct_04').value = "[" + ((rcdfCTF03[0].Ct / 4).toPrecision(2)).toString() + "]";

//  document.getElementById('f3td1_1').innerHTML = rcdfCTF03[1].Cod;
  document.getElementById('f3td1_2').innerHTML = rcdfCTF03[1].Desc;
  document.getElementById('Stgf3_td_12').value = rcdfCTF03[1].Desc;
 // document.getElementById('f3td1_3').innerHTML = "[" + (rcdfCTF03[1].Ct).toString() + "]" ; 
  document.getElementById('f3td1_4').innerHTML = "[" + ((rcdfCTF03[1].Ct / 4).toPrecision(2)).toString() + "]";
  document.getElementById('Stgf3_ct_14').value = "[" + ((rcdfCTF03[1].Ct / 4).toPrecision(2)).toString() + "]";

 // document.getElementById('f3td2_1').innerHTML = rcdfCTF03[2].Cod;
  document.getElementById('f3td2_2').innerHTML = rcdfCTF03[2].Desc;
  document.getElementById('Stgf3_td_22').value = rcdfCTF03[2].Desc;
 // document.getElementById('f3td2_3').innerHTML = "[" + (rcdfCTF03[2].Ct).toString() + "]" ; 
  document.getElementById('f3td2_4').innerHTML = "[" + ((rcdfCTF03[2].Ct / 3).toPrecision(2)).toString() + "]";
  document.getElementById('Stgf3_ct_24').value = "[" + ((rcdfCTF03[2].Ct / 3).toPrecision(2)).toString() + "]";

 
}


function rcdfCont(opcStg, opcCt){
  for (i = 0; i < rcdfCT.length; i++) {
    if (rcdfCT[i].Cod == opcStg) {

        rcdfCT[i].Ct = rcdfCT[i].Ct + parseInt(opcCt);
     
       }
      }
}

function rcdfContF02(opcStg, opcCt, Opxteste){
  for (i = 0; i < rcdfCT.length; i++) {
    if (rcdfCTF02[i].Cod == opcStg) {
     /*   StgopcCt = StgopcCt + "[ " + opcCt +" = "+opcStg+" ] - "; */
        rcdfCTF02[i].Ct = rcdfCTF02[i].Ct + parseInt(opcCt);
      /*  sweetalert("M",14-7,StgopcCt,28); */
     
       }
      }
}

function rcdfContF03(opcStg, opcCt){
  for (i = 0; i < rcdfCT.length; i++) {
    if (rcdfCTF03[i].Cod == opcStg) {

        rcdfCTF03[i].Ct = rcdfCTF03[i].Ct + parseInt(opcCt);
     
       }
      }
}

function colLinHidden_32_35(){
  
  document.getElementById("inpOpta_4").style.visibility = 'hidden';
  document.getElementById("inpOpta_5").style.visibility = 'hidden'; 
  document.getElementById("lblOpta_4").style.visibility = 'hidden';
  document.getElementById("lblOpta_5").style.visibility = 'hidden'; 

  document.getElementById("inpOptb_4").style.visibility = 'hidden';
  document.getElementById("inpOptb_5").style.visibility = 'hidden'; 
  document.getElementById("lblOptb_4").style.visibility = 'hidden';
  document.getElementById("lblOptb_5").style.visibility = 'hidden'; 

  document.getElementById("inpOptc_4").style.visibility = 'hidden';
  document.getElementById("inpOptc_5").style.visibility = 'hidden'; 
  document.getElementById("lblOptc_4").style.visibility = 'hidden';
  document.getElementById("lblOptc_5").style.visibility = 'hidden'; 

  document.getElementById("inpOptd_4").style.visibility = 'hidden';
  document.getElementById("inpOptd_5").style.visibility = 'hidden'; 
  document.getElementById("lblOptd_4").style.visibility = 'hidden';
  document.getElementById("lblOptd_5").style.visibility = 'hidden'; 

  document.getElementById("inpOpte_4").style.visibility = 'hidden';
  document.getElementById("inpOpte_5").style.visibility = 'hidden'; 
  document.getElementById("lblOpte_4").style.visibility = 'hidden';
  document.getElementById("lblOpte_5").style.visibility = 'hidden'; 

}
function colVisible_Linha()
{
  document.getElementById("questionSubA").style.visibility = 'visible';
  document.getElementById("inpOpta_1").style.visibility = 'visible';
  document.getElementById("lblOpta_1").style.visibility = 'visible';
  document.getElementById("inpOpta_2").style.visibility = 'visible';
  document.getElementById("lblOpta_2").style.visibility = 'visible';
  document.getElementById("inpOpta_3").style.visibility = 'visible'; 
  document.getElementById("lblOpta_3").style.visibility = 'visible'; 
  document.getElementById("inpOpta_4").style.visibility = 'visible';
  document.getElementById("lblOpta_4").style.visibility = 'visible';
  document.getElementById("inpOpta_5").style.visibility = 'visible';
  document.getElementById("lblOpta_5").style.visibility = 'visible';

  document.getElementById("questionSubB").style.visibility = 'visible';
  document.getElementById("inpOptb_1").style.visibility = 'visible';
  document.getElementById("lblOptb_1").style.visibility = 'visible';
  document.getElementById("inpOptb_2").style.visibility = 'visible';
  document.getElementById("lblOptb_2").style.visibility = 'visible';
  document.getElementById("inpOptb_3").style.visibility = 'visible'; 
  document.getElementById("lblOptb_3").style.visibility = 'visible'; 
  document.getElementById("inpOptb_4").style.visibility = 'visible';
  document.getElementById("lblOptb_4").style.visibility = 'visible';
  document.getElementById("inpOptb_5").style.visibility = 'visible';
  document.getElementById("lblOptb_5").style.visibility = 'visible';

  document.getElementById("questionSubC").style.visibility = 'visible';
  document.getElementById("inpOptc_1").style.visibility = 'visible';
  document.getElementById("lblOptc_1").style.visibility = 'visible';
  document.getElementById("inpOptc_2").style.visibility = 'visible';
  document.getElementById("lblOptc_2").style.visibility = 'visible';
  document.getElementById("inpOptc_3").style.visibility = 'visible'; 
  document.getElementById("lblOptc_3").style.visibility = 'visible'; 
  document.getElementById("inpOptc_4").style.visibility = 'visible';
  document.getElementById("lblOptc_4").style.visibility = 'visible';
  document.getElementById("inpOptc_5").style.visibility = 'visible';
  document.getElementById("lblOptc_5").style.visibility = 'visible';

  document.getElementById("questionSubD").style.visibility = 'visible';
  document.getElementById("inpOptd_1").style.visibility = 'visible';
  document.getElementById("lblOptd_1").style.visibility = 'visible';
  document.getElementById("inpOptd_2").style.visibility = 'visible';
  document.getElementById("lblOptd_2").style.visibility = 'visible';
  document.getElementById("inpOptd_3").style.visibility = 'visible'; 
  document.getElementById("lblOptd_3").style.visibility = 'visible'; 
  document.getElementById("inpOptd_4").style.visibility = 'visible';
  document.getElementById("lblOptd_4").style.visibility = 'visible';
  document.getElementById("inpOptd_5").style.visibility = 'visible';
  document.getElementById("lblOptd_5").style.visibility = 'visible';

  document.getElementById("questionSubE").style.visibility = 'visible';
  document.getElementById("inpOpte_1").style.visibility = 'visible';
  document.getElementById("lblOpte_1").style.visibility = 'visible';
  document.getElementById("inpOpte_2").style.visibility = 'visible';
  document.getElementById("lblOpte_2").style.visibility = 'visible';
  document.getElementById("inpOpte_3").style.visibility = 'visible'; 
  document.getElementById("lblOpte_3").style.visibility = 'visible'; 
  document.getElementById("inpOpte_4").style.visibility = 'visible';
  document.getElementById("lblOpte_4").style.visibility = 'visible';
  document.getElementById("inpOpte_5").style.visibility = 'visible';
  document.getElementById("lblOpte_5").style.visibility = 'visible';

}

function col_Linha_Hidden()
{
  
  document.getElementById("questionPrinc").style.visibility = 'hidden'
  document.getElementById("questionSubA").style.visibility = 'hidden';
  document.getElementById("inpOpta_1").style.visibility = 'hidden';
  document.getElementById("lblOpta_1").style.visibility = 'hidden';
  document.getElementById("inpOpta_2").style.visibility = 'hidden';
  document.getElementById("lblOpta_2").style.visibility = 'hidden';
  document.getElementById("inpOpta_3").style.visibility = 'hidden'; 
  document.getElementById("lblOpta_3").style.visibility = 'hidden'; 
  document.getElementById("inpOpta_4").style.visibility = 'hidden';
  document.getElementById("lblOpta_4").style.visibility = 'hidden';
  document.getElementById("inpOpta_5").style.visibility = 'hidden';
  document.getElementById("lblOpta_5").style.visibility = 'hidden';

  document.getElementById("questionSubB").style.visibility = 'hidden';
  document.getElementById("inpOptb_1").style.visibility = 'hidden';
  document.getElementById("lblOptb_1").style.visibility = 'hidden';
  document.getElementById("inpOptb_2").style.visibility = 'hidden';
  document.getElementById("lblOptb_2").style.visibility = 'hidden';
  document.getElementById("inpOptb_3").style.visibility = 'hidden'; 
  document.getElementById("lblOptb_3").style.visibility = 'hidden'; 
  document.getElementById("inpOptb_4").style.visibility = 'hidden';
  document.getElementById("lblOptb_4").style.visibility = 'hidden';
  document.getElementById("inpOptb_5").style.visibility = 'hidden';
  document.getElementById("lblOptb_5").style.visibility = 'hidden';

  document.getElementById("questionSubC").style.visibility = 'hidden';
  document.getElementById("inpOptc_1").style.visibility = 'hidden';
  document.getElementById("lblOptc_1").style.visibility = 'hidden';
  document.getElementById("inpOptc_2").style.visibility = 'hidden';
  document.getElementById("lblOptc_2").style.visibility = 'hidden';
  document.getElementById("inpOptc_3").style.visibility = 'hidden'; 
  document.getElementById("lblOptc_3").style.visibility = 'hidden'; 
  document.getElementById("inpOptc_4").style.visibility = 'hidden';
  document.getElementById("lblOptc_4").style.visibility = 'hidden';
  document.getElementById("inpOptc_5").style.visibility = 'hidden';
  document.getElementById("lblOptc_5").style.visibility = 'hidden';

  document.getElementById("questionSubD").style.visibility = 'hidden';
  document.getElementById("inpOptd_1").style.visibility = 'hidden';
  document.getElementById("lblOptd_1").style.visibility = 'hidden';
  document.getElementById("inpOptd_2").style.visibility = 'hidden';
  document.getElementById("lblOptd_2").style.visibility = 'hidden';
  document.getElementById("inpOptd_3").style.visibility = 'hidden'; 
  document.getElementById("lblOptd_3").style.visibility = 'hidden'; 
  document.getElementById("inpOptd_4").style.visibility = 'hidden';
  document.getElementById("lblOptd_4").style.visibility = 'hidden';
  document.getElementById("inpOptd_5").style.visibility = 'hidden';
  document.getElementById("lblOptd_5").style.visibility = 'hidden';

  document.getElementById("questionSubE").style.visibility = 'hidden';
  document.getElementById("inpOpte_1").style.visibility = 'hidden';
  document.getElementById("lblOpte_1").style.visibility = 'hidden';
  document.getElementById("inpOpte_2").style.visibility = 'hidden';
  document.getElementById("lblOpte_2").style.visibility = 'hidden';
  document.getElementById("inpOpte_3").style.visibility = 'hidden'; 
  document.getElementById("lblOpte_3").style.visibility = 'hidden'; 
  document.getElementById("inpOpte_4").style.visibility = 'hidden';
  document.getElementById("lblOpte_4").style.visibility = 'hidden';
  document.getElementById("inpOpte_5").style.visibility = 'hidden';
  document.getElementById("lblOpte_5").style.visibility = 'hidden';

}



function colHidden_Linha(Opc_linha)
{
  if ( Opc_linha == "32")  {
  

 
  document.getElementById("questionSubE").style.visibility = 'hidden';
  document.getElementById("inpOpte_1").style.visibility = 'hidden';
  document.getElementById("lblOpte_1").style.visibility = 'hidden';
  document.getElementById("inpOpte_2").style.visibility = 'hidden';
  document.getElementById("lblOpte_2").style.visibility = 'hidden';
  document.getElementById("inpOpte_3").style.visibility = 'hidden'; 
  document.getElementById("lblOpte_3").style.visibility = 'hidden'; 
  document.getElementById("inpOpte_4").style.visibility = 'hidden';
  document.getElementById("lblOpte_4").style.visibility = 'hidden';
  document.getElementById("inpOpte_5").style.visibility = 'hidden'; 
  document.getElementById("lblOpte_5").style.visibility = 'hidden'; 
  }
  if ( Opc_linha == "35") {
  
    document.getElementById("questionSubB").style.visibility = 'hidden';
    document.getElementById("inpOptb_1").style.visibility = 'hidden';
    document.getElementById("lblOptb_1").style.visibility = 'hidden';
    document.getElementById("inpOptb_2").style.visibility = 'hidden';
    document.getElementById("lblOptb_2").style.visibility = 'hidden';
    document.getElementById("inpOptb_3").style.visibility = 'hidden'; 
    document.getElementById("lblOptb_3").style.visibility = 'hidden'; 
    document.getElementById("inpOptb_4").style.visibility = 'hidden'; 
    document.getElementById("lblOptb_4").style.visibility = 'hidden'; 
    document.getElementById("inpOptb_5").style.visibility = 'hidden'; 
    document.getElementById("lblOptb_5").style.visibility = 'hidden'; 
   
    document.getElementById("questionSubC").style.visibility = 'hidden';
    document.getElementById("inpOptc_1").style.visibility = 'hidden';
    document.getElementById("lblOptc_1").style.visibility = 'hidden';
    document.getElementById("inpOptc_2").style.visibility = 'hidden';
    document.getElementById("lblOptc_2").style.visibility = 'hidden';
    document.getElementById("inpOptc_3").style.visibility = 'hidden'; 
    document.getElementById("lblOptc_3").style.visibility = 'hidden'; 
    document.getElementById("inpOptc_4").style.visibility = 'hidden'; 
    document.getElementById("lblOptc_4").style.visibility = 'hidden'; 
    document.getElementById("inpOptc_5").style.visibility = 'hidden'; 
    document.getElementById("lblOptc_5").style.visibility = 'hidden'; 

    document.getElementById("questionSubD").style.visibility = 'hidden';
    document.getElementById("inpOptd_1").style.visibility = 'hidden';
    document.getElementById("lblOptd_1").style.visibility = 'hidden';
    document.getElementById("inpOptd_2").style.visibility = 'hidden';
    document.getElementById("lblOptd_2").style.visibility = 'hidden';
    document.getElementById("inpOptd_3").style.visibility = 'hidden'; 
    document.getElementById("lblOptd_3").style.visibility = 'hidden'; 
    document.getElementById("inpOptd_4").style.visibility = 'hidden';
    document.getElementById("lblOptd_4").style.visibility = 'hidden';
    document.getElementById("inpOptd_5").style.visibility = 'hidden';
    document.getElementById("lblOptd_5").style.visibility = 'hidden';

    document.getElementById("questionSubE").style.visibility = 'hidden';
    document.getElementById("inpOpte_1").style.visibility = 'hidden';
    document.getElementById("lblOpte_1").style.visibility = 'hidden';
    document.getElementById("inpOpte_2").style.visibility = 'hidden';
    document.getElementById("lblOpte_2").style.visibility = 'hidden';
    document.getElementById("inpOpte_3").style.visibility = 'hidden'; 
    document.getElementById("lblOpte_3").style.visibility = 'hidden'; 
    document.getElementById("inpOpte_4").style.visibility = 'hidden';
    document.getElementById("lblOpte_4").style.visibility = 'hidden';
    document.getElementById("inpOpte_5").style.visibility = 'hidden';
    document.getElementById("lblOpte_5").style.visibility = 'hidden';
  }

  }

    function colHidden_Visible_4_5(Opc, qdisp){
     // if (Opc == "H")
      if (Opc == "ZZ")
      {
      document.getElementById("inpOpta_4").style.visibility = 'hidden';
      document.getElementById("inpOpta_5").style.visibility = 'hidden'; 
      document.getElementById("lblOpta_4").style.visibility = 'hidden';
      document.getElementById("lblOpta_5").style.visibility = 'hidden'; 
    
      document.getElementById("inpOptb_4").style.visibility = 'hidden';
      document.getElementById("inpOptb_5").style.visibility = 'hidden'; 
      document.getElementById("lblOptb_4").style.visibility = 'hidden';
      document.getElementById("lblOptb_5").style.visibility = 'hidden'; 
   
      document.getElementById("inpOptc_4").style.visibility = 'hidden';
      document.getElementById("inpOptc_5").style.visibility = 'hidden'; 
      document.getElementById("lblOptc_4").style.visibility = 'hidden';
      document.getElementById("lblOptc_5").style.visibility = 'hidden'; 
   
      document.getElementById("inpOptd_4").style.visibility = 'hidden';
      document.getElementById("inpOptd_5").style.visibility = 'hidden'; 
      document.getElementById("lblOptd_4").style.visibility = 'hidden';
      document.getElementById("lblOptd_5").style.visibility = 'hidden'; 
   
      document.getElementById("inpOpte_4").style.visibility = 'hidden';
      document.getElementById("inpOpte_5").style.visibility = 'hidden'; 
      document.getElementById("lblOpte_4").style.visibility = 'hidden';
      document.getElementById("lblOpte_5").style.visibility = 'hidden'; 
      }
       
  }
    function contviewdisplayHidden(){
      document.getElementById("QtPessoasLab").style.visibility = 'hidden';
      document.getElementById("QtPessoas").style.visibility = 'hidden';
      document.getElementById("TempoLideraPessoasLab").style.visibility = 'hidden';
      document.getElementById("TempoLideraPessoas").style.visibility = 'hidden';
      spinnercontainer.style.visibility = 'hidden';
      firstcontainer.style.visibility = 'hidden'; 
      quizMessage.style.visibility = 'hidden';
      quizresult.style.visibility = 'hidden';
      quizcontainer.style.visibility = 'hidden';

      
      quizgrava.style.visibility = 'hidden';
      quizfechamento.style.visibility = 'hidden';
   
     }


    function contviewdisplayFechamento()
    {
        contviewdisplayHidden();
        tableFase03();
        tableFase02();
        tableFase01();
        quizfecha.style.visibility = 'visible'; 
    }

    function contviewdisplayformulario()
    {
      validaCadastro();
      if( contErro == 0 ){
      contviewdisplayHidden();
      container.style.visibility = 'visible';
      renderProgress();
      loadQuestion(currentQuestion);
      }
    }

    function contviewdisplayGrava(){
      validaFechamento();
      if( contErroFecha == 0 ){
      contviewdisplayHidden();
      document.getElementById('descPartGrv').innerHTML = descPartGrava;
      document.getElementById("descPartGrv").style.visibility = 'visible'; 
      quizgrava.style.visibility = 'visible';
      }
    }

    function contviewdisplayQuizres(){
        contviewdisplayHidden();
        document.getElementById('descPart04').innerHTML = descPart04;
        quizres.style.visibility = 'visible';
    }
  
    function contviewdisplayFirst(){
      contviewdisplayHidden();
      
      firstcontainer.style.visibility  = 'visible';
    }

    function contviewdisplaySpinner(){
   contviewdisplayHidden();
   spinnercont.style.visibility = 'visible';
    let messa = () => {
      contviewdisplayFirst();
    }
    setTimeout(messa, 3000);
    
    }
     function contviewdisplayMessage(){
      contviewdisplayHidden();
      quizMessage.style.visibility = 'visible';
     }


    function contviewdisplayContainer(){
     
      var checkopc = document.getElementById('invalidCheck');
      if ( checkopc.checked )
      {
       contviewdisplayHidden();
       document.getElementById('descPart04').innerHTML = descPart04; 
       quizres.style.visibility = 'visible';
      }
      else
      {
        sweetalert("E",1," Vc deve concordar para prosseguir.:",0); 
      }
    }

    function renderProgress(){
        for(let qIndex = 0; qIndex <= (totQuestions-1); qIndex++){
            progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
        }
    }

    function answerIsCorrect(){
     document.getElementById(currentQuestion).style.backgroundColor = "#0f0";
    }

    function regModObjFlag (  ) {
        //  Option A
        var Flag_A, Flag_B, Flag_C, Flag_D, Flag_E;
        var Opc_A, Opc_B, Opc_C, Opc_D, Opc_E;
        Opc_A = true;
        Opc_B = true;
        Opc_C = true;
        Opc_D = true;
        Opc_E = true;
        Flag_A = '';
        Flag_B = Flag_A;
        Flag_C = Flag_A;
        Flag_D = Flag_A;
        Flag_E = Flag_A; 

        var optiontxt_A = document.getElementsByName("optiona");
       
        var gLbFunc = false;

        var Opc = respItem.Question.substring(0,2);
        var glbObj_A = false;
        var glbObj_B = false;
        var glbObj_C = false;
        var glbObj_D = false;
        var glbObj_E = false;

        if (Opc == "35") {
          Opc_B = false;
          Opc_C = Opc_B;
          Opc_D = Opc_B; 
          Opc_E = Opc_B;
          glbObj_B = true;  
          glbObj_C = true;  
          glbObj_D = true;  
          glbObj_E = true;  
        }
        if ( Opc == "32") {
          Opc_E = false; 
        
          glbObj_E = true;  
        }
       // Option A
       if ( Opc_A == true ) {
       
        Flag_A = respItem.Perg_Op_A.substring(0, respItem.Perg_Op_A.indexOf(")"));
        Flag_A = '[ '+Flag_A+' ] ';
        for (i = 0; i < optiontxt_A.length; i++) {
        if (optiontxt_A[i].checked) {
            glbObj_A = true;  
            Flag_A = '';  
           }                      
           }
          }
        // Option B
        if ( Opc_B == true ) {
        var optiontxt_B = document.getElementsByName("optionb");
       
        Flag_B = respItem.Perg_Op_B.substring(0, respItem.Perg_Op_B.indexOf(")"));
        Flag_B = '[ '+Flag_B+' ] ';
        for (i = 0; i < optiontxt_B.length; i++) {
        if (optiontxt_B[i].checked) {
            glbObj_B = true;  
            Flag_B = '';  
           }
           }  
          }    
      // Option C
      if ( Opc_C == true ) {
      var optiontxt_C = document.getElementsByName("optionc");
     
      Flag_C = respItem.Perg_Op_C.substring(0, respItem.Perg_Op_C.indexOf(")"));
      Flag_C = '[ '+Flag_C+' ] ';
     
      for (i = 0; i < optiontxt_C.length; i++) {
      if (optiontxt_C[i].checked) {
        glbObj_C = true;  
        Flag_C = '';  
         }
        }
      }
      // Option D
      if ( Opc_D == true ) {
      var optiontxt_D = document.getElementsByName("optiond");
     
      Flag_D = respItem.Perg_Op_D.substring(0, respItem.Perg_Op_D.indexOf(")"));
      Flag_D = '[ '+Flag_D+' ] ';
      for (i = 0; i < optiontxt_D.length; i++) {
      if (optiontxt_D[i].checked) {
        glbObj_D = true;  
        Flag_D = '';  
         }
        }
      }
     // Option E
     if ( Opc_E == true ) {
      var optiontxt_E = document.getElementsByName("optione");
    
      Flag_E = respItem.Perg_Op_E.substring(0, respItem.Perg_Op_E.indexOf(")"));
      Flag_E = '[ '+Flag_E+' ] ';
      for (i = 0; i < optiontxt_E.length; i++) {
      if (optiontxt_E[i].checked) {
        glbObj_E = true;  
        Flag_E = '';  
         }
       }
      }
    
    
   if (( glbObj_A == false) || ( glbObj_B == false) || ( glbObj_C == false) || ( glbObj_D == false) || ( glbObj_E == false)) {
        glbObj = false
        sweetalert("E",1,Flag_A+Flag_B+Flag_C+Flag_D+Flag_E+" Não foi respondida...",0);
  
    } else
    {
        glbObj = true;
    }
}    
    function regModObj (  ) {
        var St_Opc = (respItem.Question.substring(0,2));
        var IndPos = 0;
        glbFunc = false;
      
        // Option A 
         var optiontxt_A = document.getElementsByName("optiona");
        for (i = 0; i < (optiontxt_A.length-IndPos); i++) {
        if (optiontxt_A[i].checked) {
          console.log(optiontxt_A[i].value);
         var option_A = optiontxt_A[i].value;
         optiontxt_A[i].checked = false;
           }
         ///
           }
        // Option B
        var optiontxt_B = document.getElementsByName("optionb");
        for (i = 0; i < (optiontxt_B.length-IndPos); i++) {
        if (optiontxt_B[i].checked) {
          console.log(optiontxt_B[i].value);
         var option_B =optiontxt_B[i].value;
         optiontxt_B[i].checked = false;
           }
     
      }
      // Option C
      var optiontxt_C = document.getElementsByName("optionc");
      for (i = 0; i < (optiontxt_C.length-IndPos); i++) {
      if (optiontxt_C[i].checked) {
        console.log(optiontxt_C[i].value);
       var option_C =optiontxt_C[i].value;
       optiontxt_C[i].checked = false;
         }
      
    }
      // Option D
      var optiontxt_D = document.getElementsByName("optiond");
      for (i = 0; i < (optiontxt_D.length-IndPos); i++) {
      if (optiontxt_D[i].checked) {
        console.log(optiontxt_D[i].value);
       var option_D =optiontxt_D[i].value;
       optiontxt_D[i].checked = false;
         }
      
    }
      // Option E
      var optiontxt_E = document.getElementsByName("optione");
      for (i = 0; i < (optiontxt_E.length-IndPos); i++) {
      if (optiontxt_E[i].checked) {
        console.log(optiontxt_E[i].value);
       var option_E =optiontxt_E[i].value;
       optiontxt_E[i].checked = false;
         }
       
    }
   // Contador Fase I - 1 a 28
   // if ( ( parseInt(St_Opc) >=1 ) || ( parseInt(St_Opc) >=28 )) {
  if  ( parseInt(St_Opc) <= 28 ) {
   rcdfCont(respItem.Rcdf_Op_A, option_A);
   rcdfCont(respItem.Rcdf_Op_B, option_B);
   rcdfCont(respItem.Rcdf_Op_C, option_C);
   rcdfCont(respItem.Rcdf_Op_D, option_D);
   rcdfCont(respItem.Rcdf_Op_E, option_E);
   }
   // Contador Fase II - 29 a 3x
   if ( ( parseInt(St_Opc) >= 29 ) && ( parseInt(St_Opc) <= 32 ) ){
    rcdfContF02(respItem.Rcdf_Op_A, option_A, St_Opc);
    rcdfContF02(respItem.Rcdf_Op_B, option_B, St_Opc);
    rcdfContF02(respItem.Rcdf_Op_C, option_C, St_Opc);
    rcdfContF02(respItem.Rcdf_Op_D, option_D, St_Opc);
    rcdfContF02(respItem.Rcdf_Op_E, option_E, St_Opc);
    }
   // Contador Fase III - >= 3x
   if  ( parseInt(St_Opc) >= 33 ) {
    rcdfContF03(respItem.Rcdf_Op_A, option_A);
    rcdfContF03(respItem.Rcdf_Op_B, option_B);
    rcdfContF03(respItem.Rcdf_Op_C, option_C);
    rcdfContF03(respItem.Rcdf_Op_D, option_D);
    rcdfContF03(respItem.Rcdf_Op_E, option_E);
    }
 
   


   if ( St_Opc == "01" ){
    myObjData.Question_01 = respItem.Question;
    document.getElementById('Question_01').value = respItem.Question;
    
    myObjData.Perg_Op_A_01 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_01 = option_A;
    document.getElementById('Perg_Op_A_01').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_01').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_01').value = option_A;
    
    myObjData.Perg_Op_B_01 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_01 = option_B;
    document.getElementById('Perg_Op_B_01').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_01').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_B_01').value = option_B;
    
    myObjData.Perg_Op_C_01 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_01 = option_C;
    document.getElementById('Perg_Op_C_01').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_01').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_C_01').value = option_C;
    
    myObjData.Perg_Op_D_01 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_01 = option_D;
    document.getElementById('Perg_Op_D_01').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_01').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_D_01').value = option_D;
    
    myObjData.Perg_Op_E_01 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_01 = option_E;
    document.getElementById('Perg_Op_E_01').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_01').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_E_01').value = option_E;
    
    }
    
    if ( St_Opc == "02" ){
    myObjData.Question_02 = respItem.Question;
    document.getElementById('Question_02').value = respItem.Question;
    
    myObjData.Perg_Op_A_02 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_02 = option_A;
    document.getElementById('Perg_Op_A_02').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_02').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_02').value = option_A;
    
    myObjData.Perg_Op_B_02 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_02 = option_B;
    document.getElementById('Perg_Op_B_02').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_02').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_B_02').value = option_B;
    
    myObjData.Perg_Op_C_02 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_02 = option_C;
    document.getElementById('Perg_Op_C_02').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_02').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_C_02').value = option_C;
    
    myObjData.Perg_Op_D_02 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_02 = option_D;
    document.getElementById('Perg_Op_D_02').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_02').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_D_02').value = option_D;
    
    myObjData.Perg_Op_E_02 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_02 = option_E;
    document.getElementById('Perg_Op_E_02').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_02').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_E_02').value = option_E;
    
    }
    
    if ( St_Opc == "03" ){
    myObjData.Question_03 = respItem.Question;
    document.getElementById('Question_03').value = respItem.Question;
    
    myObjData.Perg_Op_A_03 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_03 = option_A;
    document.getElementById('Perg_Op_A_03').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_03').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_03').value = option_A;
    
    myObjData.Perg_Op_B_03 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_03 = option_B;
    document.getElementById('Perg_Op_B_03').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_03').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_B_03').value = option_B;
    
    myObjData.Perg_Op_C_03 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_03 = option_C;
    document.getElementById('Perg_Op_C_03').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_03').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_C_03').value = option_C;
    
    myObjData.Perg_Op_D_03 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_03 = option_D;
    document.getElementById('Perg_Op_D_03').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_03').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_D_03').value = option_D;
    
    myObjData.Perg_Op_E_03 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_03 = option_E;
    document.getElementById('Perg_Op_E_03').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_03').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_E_03').value = option_E;
    
    }
    
    if ( St_Opc == "04" ){
    myObjData.Question_04 = respItem.Question;
    document.getElementById('Question_04').value = respItem.Question;
    
    myObjData.Perg_Op_A_04 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_04 = option_A;
    document.getElementById('Perg_Op_A_04').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_04').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_04').value = option_A;
    
    myObjData.Perg_Op_B_04 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_04 = option_B;
    document.getElementById('Perg_Op_B_04').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_04').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_B_04').value = option_B;
    
    myObjData.Perg_Op_C_04 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_04 = option_C;
    document.getElementById('Perg_Op_C_04').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_04').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_C_04').value = option_C;
    
    myObjData.Perg_Op_D_04 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_04 = option_D;
    document.getElementById('Perg_Op_D_04').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_04').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_D_04').value = option_D;
    
    myObjData.Perg_Op_E_04 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_04 = option_E;
    document.getElementById('Perg_Op_E_04').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_04').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_E_04').value = option_E;
    
    }
    
    if ( St_Opc == "05" ){
    myObjData.Question_05 = respItem.Question;
    document.getElementById('Question_05').value = respItem.Question;
    
    myObjData.Perg_Op_A_05 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_05 = option_A;
    document.getElementById('Perg_Op_A_05').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_05').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_05').value = option_A;
    
    myObjData.Perg_Op_B_05 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_05 = option_B;
    document.getElementById('Perg_Op_B_05').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_05').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_B_05').value = option_B;
    
    myObjData.Perg_Op_C_05 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_05 = option_C;
    document.getElementById('Perg_Op_C_05').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_05').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_C_05').value = option_C;
    
    myObjData.Perg_Op_D_05 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_05 = option_D;
    document.getElementById('Perg_Op_D_05').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_05').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_D_05').value = option_D;
    
    myObjData.Perg_Op_E_05 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_05 = option_E;
    document.getElementById('Perg_Op_E_05').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_05').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_E_05').value = option_E;
    
    }
    if ( St_Opc == "06" ){
    myObjData.Question_06 = respItem.Question;
    document.getElementById('Question_06').value = respItem.Question;
    
    myObjData.Perg_Op_A_06 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_06 = option_A;
    document.getElementById('Perg_Op_A_06').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_06').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_06').value = option_A;
    
    myObjData.Perg_Op_B_06 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_06 = option_B;
    document.getElementById('Perg_Op_B_06').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_06').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_B_06').value = option_B;
    
    myObjData.Perg_Op_C_06 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_06 = option_C;
    document.getElementById('Perg_Op_C_06').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_06').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_C_06').value = option_C;
    
    myObjData.Perg_Op_D_06 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_06 = option_D;
    document.getElementById('Perg_Op_D_06').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_06').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_D_06').value = option_D;
    
    myObjData.Perg_Op_E_06 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_06 = option_E;
    document.getElementById('Perg_Op_E_06').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_06').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_E_06').value = option_E;
    
    }
    if ( St_Opc == "07" ){
    myObjData.Question_07 = respItem.Question;
    document.getElementById('Question_07').value = respItem.Question;
    
    myObjData.Perg_Op_A_07 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_07 = option_A;
    document.getElementById('Perg_Op_A_07').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_07').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_07').value = option_A;
    
    myObjData.Perg_Op_B_07 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_07 = option_B;
    document.getElementById('Perg_Op_B_07').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_07').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_B_07').value = option_B;
    
    myObjData.Perg_Op_C_07 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_07 = option_C;
    document.getElementById('Perg_Op_C_07').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_07').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_C_07').value = option_C;
    
    myObjData.Perg_Op_D_07 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_07 = option_D;
    document.getElementById('Perg_Op_D_07').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_07').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_D_07').value = option_D;
    
    myObjData.Perg_Op_E_07 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_07 = option_E;
    document.getElementById('Perg_Op_E_07').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_07').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_E_07').value = option_E;
    
    }
    if ( St_Opc == "08" ){
    myObjData.Question_08 = respItem.Question;
    document.getElementById('Question_08').value = respItem.Question;
    
    myObjData.Perg_Op_A_08 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_08 = option_A;
    document.getElementById('Perg_Op_A_08').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_08').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_08').value = option_A;
    
    myObjData.Perg_Op_B_08 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_08 = option_B;
    document.getElementById('Perg_Op_B_08').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_08').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_B_08').value = option_B;
    
    myObjData.Perg_Op_C_08 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_08 = option_C;
    document.getElementById('Perg_Op_C_08').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_08').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_08').value = option_C;
    
    myObjData.Perg_Op_D_08 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_08 = option_D;
    document.getElementById('Perg_Op_D_08').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_08').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_08').value = option_D;
    
    myObjData.Perg_Op_E_08 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_08 = option_E;
    document.getElementById('Perg_Op_E_08').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_08').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_08').value = option_E;
    
    }
    if ( St_Opc == "09" ){
    myObjData.Question_09 = respItem.Question;
    document.getElementById('Question_09').value = respItem.Question;
    
    myObjData.Perg_Op_A_09 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_09 = option_A;
    document.getElementById('Perg_Op_A_09').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_09').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_09').value = option_A;
    
    myObjData.Perg_Op_B_09 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_09 = option_B;
    document.getElementById('Perg_Op_B_09').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_09').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_09').value = option_B;
    
    myObjData.Perg_Op_C_09 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_09 = option_C;
    document.getElementById('Perg_Op_C_09').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_09').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_09').value = option_C;
    
    myObjData.Perg_Op_D_09 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_09 = option_D;
    document.getElementById('Perg_Op_D_09').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_09').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_09').value = option_D;
    
    myObjData.Perg_Op_E_09 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_09 = option_E;
    document.getElementById('Perg_Op_E_09').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_09').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_09').value = option_E;
    
    }
    if ( St_Opc == "10" ){
    myObjData.Question_10 = respItem.Question;
    document.getElementById('Question_10').value = respItem.Question;
    
    myObjData.Perg_Op_A_10 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_10 = option_A;
    document.getElementById('Perg_Op_A_10').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_10').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_10').value = option_A;
    
    myObjData.Perg_Op_B_10 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_10 = option_B;
    document.getElementById('Perg_Op_B_10').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_10').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_10').value = option_B;
    
    myObjData.Perg_Op_C_10 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_10 = option_C;
    document.getElementById('Perg_Op_C_10').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_10').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_10').value = option_C;
    
    myObjData.Perg_Op_D_10 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_10 = option_D;
    document.getElementById('Perg_Op_D_10').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_10').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_10').value = option_D;
    
    myObjData.Perg_Op_E_10 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_10 = option_E;
    document.getElementById('Perg_Op_E_10').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_10').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_10').value = option_E;
    
    }
    if ( St_Opc == "11" ){
    myObjData.Question_11 = respItem.Question;
    document.getElementById('Question_11').value = respItem.Question;
    
    myObjData.Perg_Op_A_11 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_11 = option_A;
    document.getElementById('Perg_Op_A_11').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_11').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_11').value = option_A;
    
    myObjData.Perg_Op_B_11 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_11 = option_B;
    document.getElementById('Perg_Op_B_11').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_11').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_B_11').value = option_B;
    
    myObjData.Perg_Op_C_11 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_11 = option_C;
    document.getElementById('Perg_Op_C_11').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_11').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_11').value = option_C;
    
    myObjData.Perg_Op_D_11 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_11 = option_D;
    document.getElementById('Perg_Op_D_11').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_11').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_11').value = option_D;
    
    myObjData.Perg_Op_E_11 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_11 = option_E;
    document.getElementById('Perg_Op_E_11').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_11').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_11').value = option_E;
    
    }
    if ( St_Opc == "12" ){
    myObjData.Question_12 = respItem.Question;
    document.getElementById('Question_12').value = respItem.Question;
    
    myObjData.Perg_Op_A_12 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_12 = option_A;
    document.getElementById('Perg_Op_A_12').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_12').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_12').value = option_A;
    
    myObjData.Perg_Op_B_12 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_12 = option_B;
    document.getElementById('Perg_Op_B_12').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_12').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_12').value = option_B;
    
    myObjData.Perg_Op_C_12 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_12 = option_C;
    document.getElementById('Perg_Op_C_12').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_12').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_12').value = option_C;
    
    myObjData.Perg_Op_D_12 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_12 = option_D;
    document.getElementById('Perg_Op_D_12').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_12').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_12').value = option_D;
    
    myObjData.Perg_Op_E_12 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_12 = option_E;
    document.getElementById('Perg_Op_E_12').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_12').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_12').value = option_E;
    
    }
    if ( St_Opc == "13" ){
    myObjData.Question_13 = respItem.Question;
    document.getElementById('Question_13').value = respItem.Question;
    
    myObjData.Perg_Op_A_13 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_13 = option_A;
    document.getElementById('Perg_Op_A_13').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_13').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_13').value = option_A;
    
    myObjData.Perg_Op_B_13 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_13 = option_B;
    document.getElementById('Perg_Op_B_13').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_13').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_13').value = option_B;
    
    myObjData.Perg_Op_C_13 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_13 = option_C;
    document.getElementById('Perg_Op_C_13').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_13').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_13').value = option_C;
    
    myObjData.Perg_Op_D_13 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_13 = option_D;
    document.getElementById('Perg_Op_D_13').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_13').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_13').value = option_D;
    
    myObjData.Perg_Op_E_13 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_13 = option_E;
    document.getElementById('Perg_Op_E_13').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_13').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_13').value = option_E;
    
    }
    if ( St_Opc == "14" ){
    myObjData.Question_14 = respItem.Question;
    document.getElementById('Question_14').value = respItem.Question;
    
    myObjData.Perg_Op_A_14 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_14 = option_A;
    document.getElementById('Perg_Op_A_14').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_14').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_14').value = option_A;
    
    myObjData.Perg_Op_B_14 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_14 = option_B;
    document.getElementById('Perg_Op_B_14').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_14').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_14').value = option_B;
    
    myObjData.Perg_Op_C_14 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_14 = option_C;
    document.getElementById('Perg_Op_C_14').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_14').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_14').value = option_C;
    
    myObjData.Perg_Op_D_14 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_14 = option_D;
    document.getElementById('Perg_Op_D_14').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_14').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_14').value = option_D;
    
    myObjData.Perg_Op_E_14 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_14 = option_E;
    document.getElementById('Perg_Op_E_14').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_14').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_14').value = option_E;
    
    }
    if ( St_Opc == "15" ){
    myObjData.Question_15 = respItem.Question;
    document.getElementById('Question_15').value = respItem.Question;
    
    myObjData.Perg_Op_A_15 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_15 = option_A;
    document.getElementById('Perg_Op_A_15').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_15').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_15').value = option_A;
    
    myObjData.Perg_Op_B_15 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_15 = option_B;
    document.getElementById('Perg_Op_B_15').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_15').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_15').value = option_B;
    
    myObjData.Perg_Op_C_15 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_15 = option_C;
    document.getElementById('Perg_Op_C_15').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_15').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_15').value = option_C;
    
    myObjData.Perg_Op_D_15 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_15 = option_D;
    document.getElementById('Perg_Op_D_15').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_15').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_15').value = option_D;
    
    myObjData.Perg_Op_E_15 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_15 = option_E;
    document.getElementById('Perg_Op_E_15').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_15').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_15').value = option_E;
    
    }
    if ( St_Opc == "16" ){
    myObjData.Question_16 = respItem.Question;
    document.getElementById('Question_16').value = respItem.Question;
    
    myObjData.Perg_Op_A_16 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_16 = option_A;
    document.getElementById('Perg_Op_A_16').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_16').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_16').value = option_A;
    
    myObjData.Perg_Op_B_16 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_16 = option_B;
    document.getElementById('Perg_Op_B_16').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_16').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_16').value = option_B;
    
    myObjData.Perg_Op_C_16 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_16 = option_C;
    document.getElementById('Perg_Op_C_16').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_16').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_16').value = option_C;
    
    myObjData.Perg_Op_D_16 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_16 = option_D;
    document.getElementById('Perg_Op_D_16').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_16').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_16').value = option_D;
    
    myObjData.Perg_Op_E_16 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_16 = option_E;
    document.getElementById('Perg_Op_E_16').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_16').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_16').value = option_E;
    
    }
    if ( St_Opc == "17" ){
    myObjData.Question_17 = respItem.Question;
    document.getElementById('Question_17').value = respItem.Question;
    
    myObjData.Perg_Op_A_17 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_17 = option_A;
    document.getElementById('Perg_Op_A_17').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_17').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_17').value = option_A;
    
    myObjData.Perg_Op_B_17 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_17 = option_B;
    document.getElementById('Perg_Op_B_17').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_17').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_17').value = option_B;
    
    myObjData.Perg_Op_C_17 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_17 = option_C;
    document.getElementById('Perg_Op_C_17').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_17').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_17').value = option_C;
    
    myObjData.Perg_Op_D_17 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_17 = option_D;
    document.getElementById('Perg_Op_D_17').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_17').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_17').value = option_D;
    
    myObjData.Perg_Op_E_17 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_17 = option_E;
    document.getElementById('Perg_Op_E_17').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_17').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_17').value = option_E;
    
    }
    if ( St_Opc == "18" ){
    myObjData.Question_18 = respItem.Question;
    document.getElementById('Question_18').value = respItem.Question;
    
    myObjData.Perg_Op_A_18 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_18 = option_A;
    document.getElementById('Perg_Op_A_18').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_18').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_18').value = option_A;
    
    myObjData.Perg_Op_B_18 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_18 = option_B;
    document.getElementById('Perg_Op_B_18').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_18').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_18').value = option_B;
    
    myObjData.Perg_Op_C_18 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_18 = option_C;
    document.getElementById('Perg_Op_C_18').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_18').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_18').value = option_C;
    
    myObjData.Perg_Op_D_18 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_18 = option_D;
    document.getElementById('Perg_Op_D_18').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_18').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_18').value = option_D;
    
    myObjData.Perg_Op_E_18 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_18 = option_E;
    document.getElementById('Perg_Op_E_18').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_18').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_18').value = option_E;
    
    }
    if ( St_Opc == "19" ){
    myObjData.Question_19 = respItem.Question;
    document.getElementById('Question_19').value = respItem.Question;
    
    myObjData.Perg_Op_A_19 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_19 = option_A;
    document.getElementById('Perg_Op_A_19').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_19').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_19').value = option_A;
    
    myObjData.Perg_Op_B_19 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_19 = option_B;
    document.getElementById('Perg_Op_B_19').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_19').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_19').value = option_B;
    
    myObjData.Perg_Op_C_19 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_19 = option_C;
    document.getElementById('Perg_Op_C_19').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_19').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_19').value = option_C;
    
    myObjData.Perg_Op_D_19 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_19 = option_D;
    document.getElementById('Perg_Op_D_19').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_19').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_19').value = option_D;
    
    myObjData.Perg_Op_E_19 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_19 = option_E;
    document.getElementById('Perg_Op_E_19').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_19').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_19').value = option_E;
    
    }
    if ( St_Opc == "20" ){
    myObjData.Question_20 = respItem.Question;
    document.getElementById('Question_20').value = respItem.Question;
    
    myObjData.Perg_Op_A_20 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_20 = option_A;
    document.getElementById('Perg_Op_A_20').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_20').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_20').value = option_A;
    
    myObjData.Perg_Op_B_20 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_20 = option_B;
    document.getElementById('Perg_Op_B_20').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_20').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_20').value = option_B;
    
    myObjData.Perg_Op_C_20 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_20 = option_C;
    document.getElementById('Perg_Op_C_20').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_20').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_20').value = option_C;
    
    myObjData.Perg_Op_D_20 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_20 = option_D;
    document.getElementById('Perg_Op_D_20').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_20').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_20').value = option_D;
    
    myObjData.Perg_Op_E_20 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_20 = option_E;
    document.getElementById('Perg_Op_E_20').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_20').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_20').value = option_E;
    
    }
    if ( St_Opc == "21" ){
    myObjData.Question_21 = respItem.Question;
    document.getElementById('Question_21').value = respItem.Question;
    
    myObjData.Perg_Op_A_21 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_21 = option_A;
    document.getElementById('Perg_Op_A_21').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_21').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_21').value = option_A;
    
    myObjData.Perg_Op_B_21 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_21 = option_B;
    document.getElementById('Perg_Op_B_21').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_21').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_21').value = option_B;
    
    myObjData.Perg_Op_C_21 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_21 = option_C;
    document.getElementById('Perg_Op_C_21').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_21').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_21').value = option_C;
    
    myObjData.Perg_Op_D_21 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_21 = option_D;
    document.getElementById('Perg_Op_D_21').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_21').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_21').value = option_D;
    
    myObjData.Perg_Op_E_21 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_21 = option_E;
    document.getElementById('Perg_Op_E_21').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_21').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_21').value = option_E;
    
    }
    if ( St_Opc == "22" ){
    myObjData.Question_22 = respItem.Question;
    document.getElementById('Question_22').value = respItem.Question;
    
    myObjData.Perg_Op_A_22 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_22 = option_A;
    document.getElementById('Perg_Op_A_22').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_22').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_22').value = option_A;
    
    myObjData.Perg_Op_B_22 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_22 = option_B;
    document.getElementById('Perg_Op_B_22').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_22').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_22').value = option_B;
    
    myObjData.Perg_Op_C_22 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_22 = option_C;
    document.getElementById('Perg_Op_C_22').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_22').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_22').value = option_C;
    
    myObjData.Perg_Op_D_22 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_22 = option_D;
    document.getElementById('Perg_Op_D_22').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_22').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_22').value = option_D;
    
    myObjData.Perg_Op_E_22 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_22 = option_E;
    document.getElementById('Perg_Op_E_22').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_22').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_22').value = option_E;
    
    }
    if ( St_Opc == "23" ){
    myObjData.Question_23 = respItem.Question;
    document.getElementById('Question_23').value = respItem.Question;
    
    myObjData.Perg_Op_A_23 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_23 = option_A;
    document.getElementById('Perg_Op_A_23').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_23').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_23').value = option_A;
    
    myObjData.Perg_Op_B_23 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_23 = option_B;
    document.getElementById('Perg_Op_B_23').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_23').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_23').value = option_B;
    
    myObjData.Perg_Op_C_23 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_23 = option_C;
    document.getElementById('Perg_Op_C_23').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_23').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_23').value = option_C;
    
    myObjData.Perg_Op_D_23 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_23 = option_D;
    document.getElementById('Perg_Op_D_23').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_23').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_23').value = option_D;
    
    myObjData.Perg_Op_E_23 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_23 = option_E;
    document.getElementById('Perg_Op_E_23').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_23').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_23').value = option_E;
    
    }
    if ( St_Opc == "24" ){
    myObjData.Question_24 = respItem.Question;
    document.getElementById('Question_24').value = respItem.Question;
    
    myObjData.Perg_Op_A_24 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_24 = option_A;
    document.getElementById('Perg_Op_A_24').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_24').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_24').value = option_A;
    
    myObjData.Perg_Op_B_24 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_24 = option_B;
    document.getElementById('Perg_Op_B_24').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_24').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_24').value = option_B;
    
    myObjData.Perg_Op_C_24 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_24 = option_C;
    document.getElementById('Perg_Op_C_24').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_24').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_24').value = option_C;
    
    myObjData.Perg_Op_D_24 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_24 = option_D;
    document.getElementById('Perg_Op_D_24').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_24').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_24').value = option_D;
    
    myObjData.Perg_Op_E_24 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_24 = option_E;
    document.getElementById('Perg_Op_E_24').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_24').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_24').value = option_E;
    
    }
    if ( St_Opc == "25" ){
    myObjData.Question_25 = respItem.Question;
    document.getElementById('Question_25').value = respItem.Question;
    
    myObjData.Perg_Op_A_25 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_25 = option_A;
    document.getElementById('Perg_Op_A_25').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_25').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_25').value = option_A;
    
    myObjData.Perg_Op_B_25 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_25 = option_B;
    document.getElementById('Perg_Op_B_25').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_25').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_25').value = option_B;
    
    myObjData.Perg_Op_C_25 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_25 = option_C;
    document.getElementById('Perg_Op_C_25').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_25').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_25').value = option_C;
    
    myObjData.Perg_Op_D_25 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_25 = option_D;
    document.getElementById('Perg_Op_D_25').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_25').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_25').value = option_D;
    
    myObjData.Perg_Op_E_25 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_25 = option_E;
    document.getElementById('Perg_Op_E_25').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_25').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_25').value = option_E;
    
    }
    if ( St_Opc == "26" ){
    myObjData.Question_26 = respItem.Question;
    document.getElementById('Question_26').value = respItem.Question;
    
    myObjData.Perg_Op_A_26 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_26 = option_A;
    document.getElementById('Perg_Op_A_26').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_26').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_26').value = option_A;
    
    myObjData.Perg_Op_B_26 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_26 = option_B;
    document.getElementById('Perg_Op_B_26').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_26').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_26').value = option_B;
    
    myObjData.Perg_Op_C_26 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_26 = option_C;
    document.getElementById('Perg_Op_C_26').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_26').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_26').value = option_C;
    
    myObjData.Perg_Op_D_26 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_26 = option_D;
    document.getElementById('Perg_Op_D_26').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_26').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_26').value = option_D;
    
    myObjData.Perg_Op_E_26 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_26 = option_E;
    document.getElementById('Perg_Op_E_26').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_26').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_26').value = option_E;
    
    }
    if ( St_Opc == "27" ){
    myObjData.Question_27 = respItem.Question;
    document.getElementById('Question_27').value = respItem.Question;
    
    myObjData.Perg_Op_A_27 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_27 = option_A;
    document.getElementById('Perg_Op_A_27').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_27').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_27').value = option_A;
    
    myObjData.Perg_Op_B_27 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_27 = option_B;
    document.getElementById('Perg_Op_B_27').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_27').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_27').value = option_B;
    
    myObjData.Perg_Op_C_27 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_27 = option_C;
    document.getElementById('Perg_Op_C_27').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_27').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_27').value = option_C;
    
    myObjData.Perg_Op_D_27 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_27 = option_D;
    document.getElementById('Perg_Op_D_27').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_27').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_27').value = option_D;
    
    myObjData.Perg_Op_E_27 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_27 = option_E;
    document.getElementById('Perg_Op_E_27').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_27').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_27').value = option_E;
    
    }
    if ( St_Opc == "28" ){
    myObjData.Question_28 = respItem.Question;
    document.getElementById('Question_28').value = respItem.Question;
    
    myObjData.Perg_Op_A_28 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_28 = option_A;
    document.getElementById('Perg_Op_A_28').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_28').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_28').value = option_A;
    
    myObjData.Perg_Op_B_28 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_28 = option_B;
    document.getElementById('Perg_Op_B_28').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_28').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_28').value = option_B;
    
    myObjData.Perg_Op_C_28 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_28 = option_C;
    document.getElementById('Perg_Op_C_28').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_28').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_28').value = option_C;
    // Ajuste Lou
    myObjData.Perg_Op_D_28 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_28 = option_D;
    document.getElementById('Perg_Op_D_28').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_28').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_28').value = option_D;
    
    myObjData.Perg_Op_E_28 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_28 = option_E;
    document.getElementById('Perg_Op_E_28').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_28').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_28').value = option_E;
    
    }
    
    if ( St_Opc == "29" ){
    myObjData.Question_29 = respItem.Question;
    document.getElementById('Question_29').value = respItem.Question;
    
    myObjData.Perg_Op_A_29 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_29 = option_A;
    document.getElementById('Perg_Op_A_29').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_29').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_29').value = option_A;
    
    myObjData.Perg_Op_B_29 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_29 = option_B;
    document.getElementById('Perg_Op_B_29').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_29').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_29').value = option_B;
    
    myObjData.Perg_Op_C_29 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_29 = option_C;
    document.getElementById('Perg_Op_C_29').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_29').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_29').value = option_C;
    
    myObjData.Perg_Op_D_29 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_29 = option_D;
    document.getElementById('Perg_Op_D_29').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_29').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_29').value = option_D;
 
    myObjData.Perg_Op_E_29 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_29 = option_E;
    document.getElementById('Perg_Op_E_29').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_29').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_29').value = option_E;
 
    }
    
    if ( St_Opc == "30" ){
    myObjData.Question_30 = respItem.Question;
    document.getElementById('Question_30').value = respItem.Question;
    
    myObjData.Perg_Op_A_30 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_30 = option_A;
    document.getElementById('Perg_Op_A_30').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_30').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_30').value = option_A;
    
    myObjData.Perg_Op_B_30 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_30 = option_B;
    document.getElementById('Perg_Op_B_30').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_30').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_30').value = option_B;
    
    myObjData.Perg_Op_C_30 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_30 = option_C;
    document.getElementById('Perg_Op_C_30').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_30').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_30').value = option_C;
    
    myObjData.Perg_Op_D_30 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_30 = option_D;
    document.getElementById('Perg_Op_D_30').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_30').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_30').value = option_D;
 
    myObjData.Perg_Op_E_30 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_30 = option_E;
    document.getElementById('Perg_Op_E_30').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_30').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_30').value = option_E;
 
    
    }
    
    if ( St_Opc == "31" ){
    myObjData.Question_31 = respItem.Question;
    document.getElementById('Question_31').value = respItem.Question;
    
    myObjData.Perg_Op_A_31 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_31 = option_A;
    document.getElementById('Perg_Op_A_31').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_31').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_31').value = option_A;
    
    myObjData.Perg_Op_B_31 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_31 = option_B;
    document.getElementById('Perg_Op_B_31').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_31').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_31').value = option_B;
    
    myObjData.Perg_Op_C_31 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_31 = option_C;
    document.getElementById('Perg_Op_C_31').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_31').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_31').value = option_C;
    
    //   Ajuste Lou
    myObjData.Perg_Op_D_31 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_31 = option_D;
    document.getElementById('Perg_Op_D_31').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_31').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_31').value = option_D;
 
    myObjData.Perg_Op_E_31 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_31 = option_E;
    document.getElementById('Perg_Op_E_31').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_31').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_31').value = option_E;
 
    }
    
    if ( St_Opc == "32" ){
    myObjData.Question_32 = respItem.Question;
    document.getElementById('Question_32').value = respItem.Question;
    
    myObjData.Perg_Op_A_32 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_32 = option_A;
    document.getElementById('Perg_Op_A_32').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_32').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_32').value = option_A;
    
    myObjData.Perg_Op_B_32 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_32 = option_B;
    document.getElementById('Perg_Op_B_32').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_32').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_32').value = option_B;
    
    myObjData.Perg_Op_C_32 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_32 = option_C;
    document.getElementById('Perg_Op_C_32').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_32').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_32').value = option_C;

    // Ajuste Lou
    myObjData.Perg_Op_D_32 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_32 = option_D;
    document.getElementById('Perg_Op_D_32').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_32').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_32').value = option_D;
 
    myObjData.Perg_Op_E_32 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_32 = option_E;
    document.getElementById('Perg_Op_E_32').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_32').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_32').value = option_E;
 
    
    }
    
    if ( St_Opc == "33" ){
    myObjData.Question_33 = respItem.Question;
    document.getElementById('Question_33').value = respItem.Question;
    
    myObjData.Perg_Op_A_33 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_33 = option_A;
    document.getElementById('Perg_Op_A_33').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_33').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_33').value = option_A;
    
    myObjData.Perg_Op_B_33 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_33 = option_B;
    document.getElementById('Perg_Op_B_33').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_33').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_33').value = option_B;
    
    myObjData.Perg_Op_C_33 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_33 = option_C;
    document.getElementById('Perg_Op_C_33').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_33').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_33').value = option_C;
    
    myObjData.Perg_Op_D_33 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_33 = option_D;
    document.getElementById('Perg_Op_D_33').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_33').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_33').value = option_D;
    
    myObjData.Perg_Op_E_33 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_33 = option_E;
    document.getElementById('Perg_Op_E_33').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_33').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_33').value = option_E;
    
    }
    if ( St_Opc == "34" ){
    myObjData.Question_34 = respItem.Question;
    document.getElementById('Question_34').value = respItem.Question;
    
    myObjData.Perg_Op_A_34 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_34 = option_A;
    document.getElementById('Perg_Op_A_34').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_34').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_34').value = option_A;
    
    myObjData.Perg_Op_B_34 = respItem.Perg_Op_B;
    myObjData.Resp_Op_B_34 = option_B;
    document.getElementById('Perg_Op_B_34').value = respItem.Perg_Op_B;
    document.getElementById('Rcdf_Op_B_34').value = respItem.Rcdf_Op_B;
    document.getElementById('Resp_Op_B_34').value = option_B;    
    myObjData.Perg_Op_C_34 = respItem.Perg_Op_C;
    myObjData.Resp_Op_C_34 = option_C;
    document.getElementById('Perg_Op_C_34').value = respItem.Perg_Op_C;
    document.getElementById('Rcdf_Op_C_34').value = respItem.Rcdf_Op_C;
    document.getElementById('Resp_Op_C_34').value = option_C;
    
    myObjData.Perg_Op_D_34 = respItem.Perg_Op_D;
    myObjData.Resp_Op_D_34 = option_D;
    document.getElementById('Perg_Op_D_34').value = respItem.Perg_Op_D;
    document.getElementById('Rcdf_Op_D_34').value = respItem.Rcdf_Op_D;
    document.getElementById('Resp_Op_D_34').value = option_D;
    
    myObjData.Perg_Op_E_34 = respItem.Perg_Op_E;
    myObjData.Resp_Op_E_34 = option_E;
    document.getElementById('Perg_Op_E_34').value = respItem.Perg_Op_E;
    document.getElementById('Rcdf_Op_E_34').value = respItem.Rcdf_Op_E;
    document.getElementById('Resp_Op_E_34').value = option_E;
    
    }
    
    if ( St_Opc == "35" ){
    myObjData.Question_35 = respItem.Question;
    document.getElementById('Question_35').value = respItem.Question;
    
    myObjData.Perg_Op_A_35 = respItem.Perg_Op_A;
    myObjData.Resp_Op_A_35 = option_A;
    document.getElementById('Perg_Op_A_35').value = respItem.Perg_Op_A;
    document.getElementById('Rcdf_Op_A_35').value = respItem.Rcdf_Op_A;
    document.getElementById('Resp_Op_A_35').value = option_A;
   
    }
    
    }
  
function displayhidden(){
  document.getElementById("questionPrinc").style.visibility = 'hidden';



}    
function loadQuestion( questionIndex ){
  
    var q = questions[questionIndex];
    var Dsp_Opc = ( q.questionPrinc.substring(0,2));
    //  questionPrinc.textContent = q.questionPrinc;
   
    if (parseInt(Dsp_Opc) <= 28 ) {
      questionPrinc.textContent = q.questionPrinc;
    
      document.getElementById('descPart').innerHTML = descPart01;
     //  document.getElementById('descPart').innerHTML = descPart01;
     //  <img src="/img/parte01.jpg" class="rounded mx-auto d-block" alt = "Sem Imagem" width="300px" height="35px" >   
     // document.getElementById('imagparte').src="/img/parte01.jpg";
     document.getElementById('imagparte').src="/img/parte0128.jpg";
     // Correto Parte07
   
    }
    if ((parseInt(Dsp_Opc) == 1) ) {
      document.getElementById("questionPrinc").style.visibility = 'visible';
      colVisible_Linha();
      sweetalert("M",currentQuestion,"Vamos começar, leia as instruções e responda.",0);
    }
    if ( (parseInt(Dsp_Opc) == 29)) {
      sweetalert("M",currentQuestion,"Leia as instruções e responda.",0);
    }
    if ( (parseInt(Dsp_Opc) == 33)) {
      sweetalert("M",currentQuestion,"Leia as instruções e responda.",0);
    }
    
    if ((parseInt(Dsp_Opc)  > 28 ) && (parseInt(Dsp_Opc)  <= 32 )){
      document.getElementById("questionPrinc").style.visibility = 'hidden';
      questionPrinc.textContent = "";
       descPart.textContent = descPart02;
       document.getElementById('imagparte').src="/img/parte2932.jpg";
       // Lou
    
   }

   if (parseInt(Dsp_Opc)  > 32 ) {
      document.getElementById("questionPrinc").style.visibility = 'hidden';
      questionPrinc.textContent = "";
      descPart.textContent = descPart03;
      document.getElementById('imagparte').src="/img/parte3335.jpg";
      //correto Parte04
  }

    if ( ( Dsp_Opc == "29" ) || ( Dsp_Opc == "30" ) || ( Dsp_Opc == "31" ) || ( Dsp_Opc == "32" ) || ( Dsp_Opc == "33" )  || ( Dsp_Opc == "35" ) ) {
          if ( ( Dsp_Opc == "29" ) || ( Dsp_Opc == "30" ) || ( Dsp_Opc == "31" ) || ( Dsp_Opc == "32" )) { 
          colVisible_Linha();
          }
          if (Dsp_Opc == "32") {
            colHidden_Linha(Dsp_Opc)
          }
          if (Dsp_Opc == "33") {
            colVisible_Linha();
           }
          if (Dsp_Opc == "35") {
            colHidden_Linha("35");
          }

    }
   /* questionSubA.textContent =   q.questionSubA; */
    document.getElementById('questionSubA').innerHTML =  q.questionSubA;
    opta_1.textContent = q.optiona1;
    opta_2.textContent = q.optiona2;
    opta_3.textContent = q.optiona3;
    opta_4.textContent = q.optiona4;
    opta_5.textContent = q.optiona5;

   /* questionSubB.textContent =  q.questionSubB; */
    document.getElementById('questionSubB').innerHTML =  q.questionSubB;
    optb_1.textContent = q.optionb1;
    optb_2.textContent = q.optionb2;
    optb_3.textContent = q.optionb3;
    optb_4.textContent = q.optionb4;
    optb_5.textContent = q.optionb5;
  
   /* questionSubC.textContent =  q.questionSubC; */
    document.getElementById('questionSubC').innerHTML =  q.questionSubC;
    optc_1.textContent = q.optionc1;
    optc_2.textContent = q.optionc2;
    optc_3.textContent = q.optionc3;
    optc_4.textContent = q.optionc4;
    optc_5.textContent = q.optionc5;

  /*  questionSubD.textContent =  q.questionSubD; */
    document.getElementById('questionSubD').innerHTML =  q.questionSubD;
    optd_1.textContent = q.optiond1;
    optd_2.textContent = q.optiond2;
    optd_3.textContent = q.optiond3;
    optd_4.textContent = q.optiond4;
    optd_5.textContent = q.optiond5;

  /*  questionSubE.textContent =  q.questionSubE; */
    document.getElementById('questionSubE').innerHTML =  q.questionSubE;
    opte_1.textContent = q.optione1;
    opte_2.textContent = q.optione2;
    opte_3.textContent = q.optione3;
    opte_4.textContent = q.optione4;
    opte_5.textContent = q.optione5;
   
    respItem.Question =   q.questionPrinc;

    respItem.Perg_Op_A =  q.questionSubA;
    respItem.Resp_Op_A = 'z';
    respItem.Rcdf_Op_A = q.Rcdf_Op_A; 

    respItem.Perg_Op_B =  q.questionSubB;
    respItem.Resp_Op_B = 'z';
    respItem.Rcdf_Op_B = q.Rcdf_Op_B; 

    respItem.Perg_Op_C =  q.questionSubC;
    respItem.Resp_Op_C = 'z';
    respItem.Rcdf_Op_C = q.Rcdf_Op_C; 

    respItem.Perg_Op_D =  q.questionSubD;;
    respItem.Resp_Op_D = 'z';
    respItem.Rcdf_Op_D = q.Rcdf_Op_D; 

    respItem.Perg_Op_E =  q.questionSubE;;
    respItem.Resp_Op_E = 'z';
    respItem.Rcdf_Op_E = q.Rcdf_Op_E;  
    answerIsCorrect();
}

function loadNextQuestion () {
 
 //   var selectedOption = document.querySelector('input[type=radio]:checked')
 //   var answer = selectedOption.Value;
  
    regModObjFlag()
     if ( glbObj ) {
        if ( currentQuestion <= totQuestions - 1){
           regModObj ( currentQuestion )
           ++currentQuestion;
          }
      }
    else{
       return;
    }
    if ( currentQuestion == totQuestions - 1)
    {
        nextButton.textContent = 'Próximo'; 
    }
  
    if (( (currentQuestion-7) == 14) || ( (currentQuestion-7) == 21) ) {
      sweetalert("M",(currentQuestion-7),"Falta Pouco...:",28);
  }
  if ( ( (currentQuestion-7) == 28) ){
  //  sweetalert("M",(currentQuestion-7),"Terminamos..:",28);
      document.getElementById( "nextButton").style.visibility = 'hidden'; 
      document.getElementById( "gravaButton").style.visibility = 'visible'; 
      document.getElementById("questionPrinc").style.visibility = 'hidden';
      document.getElementById('imagparte').style.visibility = 'hidden';
      col_Linha_Hidden();
      colHidden_Linha("35");
      contviewdisplayGrava();
      return;
  }
  if ( currentQuestion <= totQuestions - 1)
  {
      loadQuestion(currentQuestion);
  }
}
   
contviewdisplaySpinner();