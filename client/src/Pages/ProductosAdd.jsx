import React from 'react'
import ProductForms from '../Components/ProductForms'
import Swal from 'sweetalert2'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductosAdd = () => {
    const navigate = useNavigate();

    const initialValues = {
        title: '',
        description: '',
        price: ''
        
    } 

    const crearProducto = async (values, actions) => {
        try {
        const respuesta = await axios.post(`${process.env.REACT_APP_API_URL}/product`, values);
            if (respuesta.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Genial!!',
                    text: `${respuesta.data.title} se agego correctamente`
                });
                actions.resetForm(initialValues);
                navigate('../product')
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
            <h2 className='agregar-producto' style={{color:'#5499C7'}}>Agregar Producto</h2>
            <hr />
            <div className='row'>
                <div className='col-lg-4 col-sm-12 col-md-6'>
                    <ProductForms 
                    initialValues={initialValues} 
                    botonTexto= "Agregar"
                    onSubmit={crearProducto}
                    />
                </div>
                <link ></link>
                </div>
               
            

        </>
    )
}

export default ProductosAdd