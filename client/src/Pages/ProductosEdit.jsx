import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductForms from '../Components/ProductForms'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const ProductoEdit = () => {
    const navigate = useNavigate();


    const { id } = useParams()
    const [producto, setProducto] = useState({}) //un obj vacio

    useEffect(() => {
        
        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/product/${id}`);
            setProducto(respuesta.data);
        }
        getData();

    }, [id])

    const actualizarProducto = async (values, actions) => {
        try {
        const respuesta = await axios.put(`${process.env.REACT_APP_API_URL}/product/${id}`, values);
            if (respuesta.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Genial!!',
                    text: `${respuesta.data.title} se ha actualizado correctamente`
                });

                navigate('/product')
                
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ops!',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
    }

    return (
        <>
            <h2 className='editar'style={{color:'#5499C7'}}>Editar Producto</h2>
            
            <div className='row'>
                <div className='col-lg-3 col-sm-12 col-md-6'>
                    <ProductForms 
                        initialValues = {producto}
                        botonTexto= "Actualizar"
                        onSubmit= { actualizarProducto }
                    />
                    <Link to="/product" className="btn btn-primary m-3">Volver</Link>
                </div>
                
            </div>
            

        </>
    )
}

export default ProductoEdit