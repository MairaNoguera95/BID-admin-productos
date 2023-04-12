import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const DetalleProducto = () => {

    const { id } = useParams()
    const [producto, setProducto] = useState({}) //un obj vacio

    useEffect(() => {
        
        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/product/${id}`);
            setProducto(respuesta.data);
        }
        getData();

    }, [id])

    const eliminarProductoDetalle = async (productoID) => {
        await axios.delete(`${process.env.REACT_APP_API_URL}/product/${productoID}`);
    }

    return (
        <div className="card" style={{width: "50rem"}}>
            <div className="card-header"  style={{color:'#5499C7', fontSize:'35px'}}>
                Detalle del Producto
            </div>
            <div className="card-body">
                <h5 className="card-title m-2">Titulo: {producto.title}</h5>
                <p className="card-text m-2">Precio: {producto.price}</p>
                <p className="card-text m-2">Descripcion: {producto.description}</p>
                <Link to="/product" className="btn btn-primary m-3">Volver</Link>
                <Link to="/product" className="btn btn-danger m-3" onClick={() => { eliminarProductoDetalle(producto._id) }}>Eliminar</Link>
            </div>
        </div>
    )
}

export default DetalleProducto