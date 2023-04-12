import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

const Layout = () => {
    return (
        <>
            <Nav/>
            <div className='container mt-5'>
                <Outlet /> {/*los hijos que van a onfigurarse en esta ruta */}
            </div>
        </>
    )
}

export default Layout