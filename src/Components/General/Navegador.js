import React from "react";

function Navegador(){
    return(
        <header>
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item"><a href="/">Home</a></li>
                    <li className="nav-item"><a href="/Login">Login</a></li>
                    <li className="nav-item"><a href="/Account">Cuenta</a></li>
                    <li className="nav-item"><a href="/Admin">Admin</a></li>                    
                    <li className="nav-item"><a href="/Machine">Maquinas</a></li>                    
                    <li className="nav-item"><a href="/OperatorUsers">UsuariosOperadores</a></li>                    
                    <li className="nav-item"><a href="/Customer">Clientes</a></li>                    
                    <li className="nav-item"><a href="/Rentals">Alquileres</a></li>                    
                </ul>
            </nav>
        </header>
    )
}

export default Navegador;