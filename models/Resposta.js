const mongooseresp = require("mongoose")
const Schema = mongooseresp.Schema;
const Resposta = new Schema({
   
   Question_01: {
    type : String
 //   required : true
},
Perg_OP_A_01:{
    type : String
 //   required : true
},
Resp_Op_A_01:{
    type : String
//    required : true
},
Question_02: {
  type : String
//   required : true
},
Perg_OP_A_02:{
  type : String
//   required : true
},
Resp_Op_A_02:{
  type : String
//    required : true
},
Question_03: {
  type : String
//   required : true
},
Perg_OP_A_03:{
  type : String
//   required : true
},
Resp_Op_A_03:{
  type : String
//    required : true
}
    /*,
    Perg_OP_B_01:{
        type : String
     //   required : true
    },
    Resp_Op_B_01:{
        type : String
     //   required : true
    },
    Perg_OP_C_01:{
        type : String
      //  required : true
    },
    Resp_Op_C_01:{
        type : String
     //   required : true
    },
    Perg_OP_D_01:{
        type : String
      //  required : true
    },
    Resp_Op_D_01:{
        type : String
     //   required : true
    },
    Perg_OP_E_01:{
        type : String
     //   required : true
    },
    Resp_Op_E_01:{
        type : String
      //  required : true
    },
     // Perg 02
    Question_02: {
        type : String
      //  required : true
    },
    Perg_OP_A_02:{
        type : String
     //   required : true
    },
    Resp_Op_A_02:{
        type : String
     //   required : true
    },
    Perg_OP_B_02:{
        type : String
    //    required : true
    },
    Resp_Op_B_02:{
        type : String
      //  required : true
    },
    Perg_OP_C_02:{
        type : String
      //  required : true
    },
    Resp_Op_C_02:{
        type : String
      //  required : true
    },
    Perg_OP_D_02:{
        type : String
     //   required : true
    },
    Resp_Op_D_02:{
        type : String
    //    required : true
    },
    Perg_OP_E_02:{
        type : String
     //   required : true
    },
    Resp_Op_E_02:{
        type : String
     //   required : true
    },
     // Perg 03
     Question_03: {
        type : String
      //  required : true
    },
    Perg_OP_A_03:{
        type : String
     //   required : true
    },
    Resp_Op_A_03:{
        type : String
       // required : true
    },
    Perg_OP_B_03:{
        type : String
      //  required : true
    },
    Resp_Op_B_03:{
        type : String
     //   required : true
    },
    Perg_OP_C_03:{
        type : String
     //   required : true
    },
    Resp_Op_C_03:{
        type : String,
        required : true
    },
    Perg_OP_D_03:{
        type : String
     //   required : true
    },
    Resp_Op_D_03:{
        type : String
     //  required : true
    },
    Perg_OP_E_03:{
        type : String
      //  required : true
    },
    Resp_Op_E_03:{
        type : String
     //   required : true
    }
  */} )
mongoose.model("questrespostas",Resposta)