//Modelo que va a tener nuestra base de datos
//Estructura de la clase con las entidades

const mongoose = require("mongoose");   //Modulo donde estan las librerias para la base de datos

const userModel = new mongoose.Schema(  //Creamos la variable para controlar el esquema [Campos con sus tipós de datos]
    {
	    nomuser:{
	        type: String
	    },
	    password:{
	        type: String
	    }
	},
    //Llevar un control de cuando se genero un registro
    {
	timestamps:true,    //Tiempo en el que fue creado el registro
	versionKey:false,   
    }
)

//Creamos asignaciones de variables para facilitar la comunicación con el CRUD
const ModelUser = mongoose.model("usuarios",userModel);
module.exports = ModelUser;     //Exportamos para no tener que llamar siempre