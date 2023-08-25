import React from 'react'
import Header from '../components/navBar/navBar/Header'
import App from '../styles/App.css'
function Layout(props) {

    const {children} = props

    return (
        <>
            <Header/>
            {children}
        </>
    )
}

export default Layout