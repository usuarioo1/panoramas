import React from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <ResponsiveAppBar />
            <Outlet />

        </div>
    )
}

export default Layout