import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const ProductErrores = Yup.object().shape({
    title: Yup.string()
        .min(3, 'El titulo debe tener como minimo 3 caracteres')
        .max(40, 'No puede ser muy largo el titulo')
        .required('Requerido'),
    price: Yup.number()
        .integer('Debe ser un numero entero')
        .required('Requerido')
        .positive('No puede ser negativo'),
    description: Yup.string()
        .min(5, 'La descripcion debe tener como minimo 5 caracteres')
        .max(40, 'No puede ser muy larga')
        .required('Requerido')
    
});
const ProductForms = ({ initialValues, botonTexto, onSubmit }) => {
    return (
        <Formik

            enableReinitialize = {true} 
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={ProductErrores}

        >
            {({ errors, touched, isValid, dirty }) => (
                <Form>
                    <Field name="title" className="form-control" placeholder="Titulo" />
                    {touched.title && errors.title && <div className='ms-3 mt-1 text-danger'>{errors.title}</div>}
                    <Field name="price" type="number" className="form-control mt-2" placeholder="Precio" />
                    {touched.price && errors.price && <div className='ms-3 mt-1 text-danger'>{errors.price}</div>}
                    <Field name="description" className="form-control mt-2" placeholder="Descripcion" />
                    {touched.description && errors.description && <div className='ms-3 mt-1 text-danger'>{errors.description}</div>}
                   
                    
                    <button className='btn btn-success mt-3' disabled={!(isValid && dirty)} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                    </svg>{botonTexto} Producto</button>
                </Form>
            )}
        </Formik>
    )
}

export default ProductForms