import React from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <div>
            <ResponsiveAppBar />
            <Outlet />
            <Footer />

        </div>
    )
}

export default Layout
