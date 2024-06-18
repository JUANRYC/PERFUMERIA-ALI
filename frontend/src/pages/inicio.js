import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./inicio.css";
import axios from "axios";
import { toast } from "react-toastify";

   
const Inicio = () => {
    const [data, setData] = useState ([]);

    useEffect(()=> {
        getUsers();
    }, [])

    const getUsers = async() => {
        const response = await axios.get("http://localhost:3005/"); //Ruta para ver todos los usuario
        if(response.status === 200){
            setData(response.data);
        }
    };
    //console.log("data=>", data);
    const onDeleteUser = async(id) => {
        if(window.confirm("¿Seguro que desea eliminar el Usuario?")){
            const response = await axios.delete(`http://localhost:3005/${id}`);
            if(response.status === 200){
                toast.success("Usuario eliminado satisfactoriamente");
                getUsers();
            }
        }
    };
    return(
        <div style={{marginTop: "100px"}}>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>Id</th>
                        <th style={{textAlign:"center"}}>Usuario</th>
                        <th style={{textAlign:"center"}}>Contraseña</th>
                        <th style={{textAlign:"center"}}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                     data.map((item, index)=> {
                        return(
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{item.nomuser}</td>
                                <td>{item.password}</td>
                                <td>
                                    <Link to={`/update/${item._id}`}>
                                    <button className="btn btn-edit">Actualizar</button>
                                    </Link>
                                    <button className="btn btn-delete" onClick={()=>onDeleteUser(item._id)}>Eliminar</button>
                                </td>
                            </tr>
                        );
                 
                     })
                    }
                </tbody>
            </table>
        
        </div>
    )
}

export default Inicio