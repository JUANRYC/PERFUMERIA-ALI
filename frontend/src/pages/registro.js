import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import "./registro.css";
import { toast } from "react-toastify";

const initialState = {
	nomuser:"",
	password:""	
};
const Registro = () => {
	const [state, setState] = useState(initialState);
	const {nomuser, password} = state;

	const navigate= useNavigate();
    const {id} = useParams();

    useEffect(() => {
        if(id){
            getSingleUser(id);

        }
    }, [id])

    const getSingleUser = async (id) => {
        const response = await axios.get(`http://localhost:3005/${id}`);
        if(response.status === 200){
            setState({...response.data});
        }
    };


	const addContact = async(data) =>{
		const response = await axios.post("http://localhost:3005/", data);
		if(response.status === 200){
			toast.success(response.data);
		}
	};

    const updateUser = async(data, id) =>{
		const response = await axios.put(`http://localhost:3005/${id}`, data);
		if(response.status === 200){
			toast.success(response.data);
		}
	};

	//Funcion de Registro
    const handleSubmit = (e) => {
		e.preventDefault();
		if(!nomuser || !password){
			toast.error("Campos no deben estar vacios");
		} else{
            if(!id){
                addContact(state); //Agregar lo que esta en State
            } else {
                updateUser(state, id)
            }
			//addContact(state);
			setTimeout(()=>navigate("/"), 500);
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setState({...state, [name]: value});
	}
    return(
        <div style={{marginTop: "100px"}}>
            <form onSubmit={handleSubmit}
                style={{
                    margin: "auto",
                    padding: "15px",
                    maxWidth: "400px",
                    alignContent: "center",
                }}>
                <label htmlFor="nomuser">Usuario</label>
                    <input 
                    type="text"
                    id="nomuser"
                    name="nomuser"
                    placeholder="Digite usuario"
                    onChange={handleInputChange}
                    value={nomuser}
                    />
                <label htmlFor="password">Contraseña</label>
                    <input 
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Digite contraseña"
                    onChange={handleInputChange}
                    value={password}
                />

            <input type="submit" value={id ? "Actualizar" : "Registrar" }/>
            </form>
        </div>
    )
}

export default Registro