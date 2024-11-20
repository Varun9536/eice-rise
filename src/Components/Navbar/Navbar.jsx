import React from 'react'
import styles from "./Navbar.module.css"
import { Outlet } from 'react-router-dom'
import logo from "../../assets/logo/logo.svg"

import { MdLocalPhone } from "react-icons/md";

export default function Navbar() {
    return (
        <>

            <div className={styles.navigationBar} >

                <div className={styles.logoAndNavigationIcon}>

                    <div>
                        <img src={logo} alt="" />
                    </div>

                    <div className={styles.navigationIcon} >
                        <div>Home</div>
                        <div>About Us</div>
                        <div>Products</div>
                        <div>Pricing</div>

                        <div>Blogs</div>
                    </div>

                    <div className={styles.contactUsBtn}>
                        <MdLocalPhone size={20} />
                        <span>Contact Us</span>

                    </div>

                </div>

            </div>
        </>
    )
}
