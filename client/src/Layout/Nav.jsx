import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"> 
                                <NavLink className="nav-link m-3 mi-2 p-3 fs-2" aria-current="page" to="/product/agregar" style={{color:'white'}}>Nuevo Producto</NavLink>
                            </li>
                              <li className="nav-item"> 
                                <NavLink className="nav-link m-3 mi-2 p-3 fs-2" aria-current="page" to="/product" style={{color:'white'}}>Productos</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav