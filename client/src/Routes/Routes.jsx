
import { createBrowserRouter } from "react-router-dom";
import Layout from '../Layout/Layout';
import NotFund from '../Pages/NotFount';
import DetalleProducto from "../Pages/DetalleProducto";
import ProductoList from "../Pages/ProductoList";
import ProductosAdd from "../Pages/ProductosAdd";
import ProductoEdit from '../Pages/ProductosEdit' ;

export default createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFund />,
        children: [
            {
                index: true,
                element: <ProductosAdd />
            },
            {
                path:'product',
                element: <ProductoList />
            },
            {
                path:'product/agregar',
                element: <ProductosAdd />
            },
            {
                path:'product/:id',
                element: <DetalleProducto />
            },
            {
                path:'product/:id/editar',
                element: <ProductoEdit />
            },

        ]
    }
]);