import React from "react";
//import axios from "axios";
import "./nosotros.css";

const Nosotros = () => {
    return(
        <div>
            <h2>Quíenes somos</h2>
            <div class="shadowbox2">
            <p class="ts">
                La empresa PERFUMERIA ALI cuenta con 3 años de experiencia en el mercado, nos avalan como excelentes proveedores a precios muy bajos, somos pioneros en esencias puras para dama y caballero, con facilidades de pago y envíos rápidos.
            </p>
            </div>
            <footer>
                <p>&copy; 2024 PERFUMERIA ALI</p>
                <ul class="rf">
                    <li><a  href="#">Facebook</a></li>
                    <li><a  href="#">Twitter</a></li>
                    <li><a  href="#">Instagram</a></li>
                </ul>
                <a href="#">Contacto</a>
            </footer>
        </div>
    )
}

export default Nosotros