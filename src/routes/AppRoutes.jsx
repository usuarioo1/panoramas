import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../components/Home'
import ListaDePanoramas from '../components/ListaDePanoramas'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='' element={<Layout />}>
                <Route path='/' element={<Home />}/>
                <Route path='panoramas' element={<ListaDePanoramas />} />


            </Route>
        </Routes>
    )
}

export default AppRoutes
