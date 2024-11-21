import React from 'react'
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'

import logo from "../../assets/logo/logo.svg"



export default function Navbar() {
    return (
        <>

            <div className={styles.navigationBar} >

                <div className={styles.logoAndNavigationIcon}>

                    <div>
                        <img src={logo} alt="" />
                    </div>

                    <div className={`${styles.navigationIcon} font1`} >


                        <div >
                            <Link to={"/"} className='linkClass'>Home</Link>
                        </div>

                        <div>
                            <Link to={"products"} className='linkClass'>Products</Link>
                        </div>

                        <div>
                            <Link to={"pricing"} className='linkClass'>Pricing</Link>
                        </div>

                        <div>
                            <Link to={"about-us"} className='linkClass'>About Us</Link>
                        </div>
                        
                        <div>
                            <Link to={"blogs"} className='linkClass'>Blogs</Link>
                        </div>



                    </div>

                    {/* <div className={styles.contactUsBtn}>
                        <MdLocalPhone size={20} />
                        <span>Contact Us</span>

                    </div> */}

                </div>

            </div>
        </>
    )
}
