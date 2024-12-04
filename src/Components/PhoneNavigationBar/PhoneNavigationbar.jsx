import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import styles from "./phoneNavigation.module.css"
import { IoCloseSharp } from "react-icons/io5";

import logo from "../../assets/logo/logo.svg"

export default function PhoneNavigationbar() {

    let a = "rgba(1,176,241,1)"


    const [navbarOpen, setNavbarOpen] = useState(true)

    const navbarIconChange = () => {
        console.log("varun")
        if (navbarOpen === true) {

            setNavbarOpen(false)
        }

        else {
            setNavbarOpen(true)
        }


    }

    return (
        <>

            {/* menu icons  */}


            <div className={styles.navigationBar}>

                <div style={{width : "100px"}}>
                    <img style={{width : "100%"}} src={logo} alt="" />
                </div>

                <div>
                    {navbarOpen ?
                        (<FaBars className={styles.menuIcon} onClick={navbarIconChange} size={47} />)
                        :
                        (<IoCloseSharp className={styles.closeIcon} onClick={navbarIconChange} size={47} />)}
                </div>
            </div>







            {/* menu items */}
            <div style={{ position: "fixed", zIndex: "999" }} >
                {
                    navbarOpen ? (<div></div>)
                        :
                        (
                            <div className={styles.menuMainBox}>
                                <div>Home</div>
                                <div>About Us</div>
                                <div>Products</div>
                                <div>Pricing</div>
                                <div>Products</div>
                                <div>Blogs</div>

                            </div>

                        )}
            </div>
        </>
    )
}
