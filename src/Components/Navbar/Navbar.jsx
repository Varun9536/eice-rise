import React from 'react'
import styles from "./Navbar.module.css"
import { Outlet } from 'react-router-dom'

export default function Navbar() {
    return (
        <>

            <div className={styles.navigationBar} >
                <div className={styles.navigationIcon} >
                    <div>Home</div>
                    <div>About Us</div>
                    <div>Products</div>
                    <div>Pricing</div>
                    <div>Products</div>
                    <div>Blogs</div>
                </div>
            </div>
        </>
    )
}
