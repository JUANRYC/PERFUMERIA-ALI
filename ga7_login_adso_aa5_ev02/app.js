//Llamamos los modulos para establecer la comunicación
//Se utiliza CONST para hacer la definición de variables y contenidos para trabajar con EXPRESS

//Definimos variables
const express = require("express");
const dbconnect = require("./config");
const ModelUser = require("./model");
const app = express();
const cors = require("cors");	

const corsOption = {
	origin:"*",
}
app.use(cors(corsOption))

const router = express.Router();

//Generamos los servicios CRUD


//CREAR [Creamos un nuevo registro]
router.post("/", async (req, res) =>{	//Información asincrona, da espera a que retorne o se envia alguna información
	const body = req.body;				//construimos variables para simplificar consultas
	const respuesta = await ModelUser.create(body)	//se cargan en body los requerimientos
	res.send(respuesta)
});


//CONSULTAR [Consultamos registros]
router.get("/", async (req, res) => {
	const respuesta = await ModelUser.find({})	//Consultar y traer todo lo que encuentre
	if(respuesta == false) return res.status(404).send({message: "No existen usuarios"})
		else res.send(respuesta)
});

//CONSULTAR [Por ID]
router.get("/:id", async (req, res) => { 
	const id = req.params.id;	//Variable con requerimiento de parametros 
	const respuesta = await ModelUser.findById({_id:id});
	if(!respuesta) return res.status(404).send({message: "El usuario consultado No existe"});
		res.status(200).send(respuesta);
});

//ACTUALIZAR [Utilizamos un metodo put]
router.put("/:id", async (req, res) => { 	//consulta de acuerdo a un ID
	const body = req.body;					//Cargamos en body lo que se requiere
	const id = req.params.id;				//Variable con requerimiento de parametros
	const respuesta = await ModelUser.findByIdAndUpdate({_id:id},body);	//Encontrar por ID y actualizando en body
	if(respuesta) return res.status(200).send({message: "El Usuario fué actualizado con exito"})
	res.send(respuesta);
});

//ELIMINAR [Por ID]
router.delete("/:id", async (req, res) => { 
	const id = req.params.id;	//Variable con requerimiento de parametros
	const respuesta = await ModelUser.deleteOne({_id:id});
	if(respuesta) return res.status(200).send({message: "Usuario eleminado con exito"})
	res.send(respuesta);
});

//Voy a estar utilizando algo de espress denominado .json y rutas
app.use(express.json());
app.use(router);

//Definimos puerto para la conexion
app.listen(3005, ()=>{
	console.log("El servidor se encuentra en el puerto 3005") 
	})

dbconnect();