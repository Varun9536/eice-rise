import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import logo from '../../assets/logo/logo.svg';
import ProductDrop from '../NavDropDown/ProductDrop';
import PricingDrop from '../NavDropDown/PricingDrop';
import AboutusDrop from '../NavDropDown/AboutusDrop';


export default function Navbar() {


    const navItems = [
        {
            navName: "Products",
            id: 1,
            dropdown: <ProductDrop />

        },
        {
            navName: "Pricing",
            id: 2,
            dropdown: <PricingDrop />


        },
        {
            navName: "About us",
            id: 3,
            dropdown: <AboutusDrop />

        },

        {
            navName: "Blogs",
            id: 4,
            dropdown: <ProductDrop />

        }
    ]


    const [activeDropdown, setActiveDropdown] = useState()


    const handleMouseEnter = (index) => {
        setActiveDropdown(index);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <div onMouseLeave={() => { handleMouseLeave() }} className={styles.navigationContainer}>
            <div className={styles.navigationItemBox}>

                <div>
                    <Link to={"/"}>
                        <img src={logo} alt="Logo" />
                    </Link>

                </div>

                <div className={`${styles.navigationIcon} font1`}>

                    <div>
                        <Link onMouseEnter={handleMouseLeave} className={`${styles.homeNav} linkClass`} to={"/"}>
                            Home
                        </Link>
                    </div>

                    {navItems.map((item) =>
                    (<div style={{ position: "relative" }}>
                        <div className={`${styles.navNameAndArrow}`} key={item.id} onMouseEnter={() => { handleMouseEnter(item.id) }} style={{ display: "flex" }}>

                            <div>
                                <Link to={item.path} className={`${styles.navName} linkClass`}>
                                    {item.navName}
                                </Link>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", paddingTop: "2px" }}>
                                {item.id == activeDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>

                        </div>

                        <div className={`${styles.dropDownContainer}`} onMouseLeave={() => { handleMouseLeave() }} >
                            {item.id == activeDropdown ? item.dropdown : ""}
                        </div>
                    </div>
                    ))}

                    <div onMouseEnter={handleMouseLeave} className={`${styles.contactUsBtn}`}>
                        <Link to={"/form"} style={{textDecoration : "none" , color : "white"}}>
                            Request Demo
                        </Link>

                    </div>


                </div>

            </div>
        </div>
    );
}
