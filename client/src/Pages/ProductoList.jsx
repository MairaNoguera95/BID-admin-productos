import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import DeleteButton from '../Components/Button'

const ProductoList = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/product`);
            setProductos(respuesta.data);
        }
        getData();

    }, [])

    const deleteProducto = (productoID) => {
        setProductos(productos.filter((producto) => producto._id !== productoID));
    }

    return (
        <>
            <h2 className='listado-productos' style={{color:'#5499C7'}}>Lista de Productos</h2>
            <table className='table table-striped table-hover '>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Precio</th>
                        <th>Descripcion</th>
                      
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto, index) => <tr key={index}>
                        <td>{producto.title}</td>
                        <td>{producto.price}</td>
                        <td>{producto.description}</td>
                       
                        <td>
                            <Link className='btn btn-secondary' to={`./${producto._id}`}>Detalle</Link>
                            <Link className='btn btn-success ms-2' to={`./${producto._id}/editar`}>Editar</Link>
                            <DeleteButton id_producto={producto._id} succesCallback={deleteProducto} />
                        </td>
                    </tr>)}
                </tbody>
            </table>
            <Link to="./agregar" className='btn btn-primary'>Agregar</Link>
        </>
    )
}

export default ProductoList