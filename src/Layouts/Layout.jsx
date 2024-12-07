import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import { useCardStates } from '../Context/Context'

const Layout = () => {

    const { theme } = useCardStates();

    return (
        <div className={theme}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout