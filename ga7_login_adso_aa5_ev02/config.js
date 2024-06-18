//Información de comunicacion con la base de datos

//Definimos variables
const mongoose = require("mongoose");
const dbconnect = () =>{
    mongoose.set("strictQuery", true)                               //evitar perdidas de conexion
    mongoose.connect("mongodb://127.0.0.1:27017/Login_adso")        //indicamos la ruta de la bd
    .then((success) => console.log("Su conexión ha sido exitosa"))  //generamos un mensaje en caso de que la conexión sea exitosa
    .catch((err) => console.log(err.message));                      //genera un mensaje en caso de que la conexion NO sea exitosa
}

//MODULO EXPORT para comunicar la informacion con el archivo principal

module.exports = dbconnect;