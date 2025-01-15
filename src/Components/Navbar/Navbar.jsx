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
            navName: "PRODUCTS",
            id: 1,
            dropdown: <ProductDrop />,
            style: (styles.dropDownContainerProduct)

        },
        {
            navName: "PRICING",
            id: 2,
            dropdown: <PricingDrop />,
            // path : "/pricing"
            style: (styles.dropDownContainerPricing)


        },
        {
            navName: "ABOUT US",
            id: 3,
            // dropdown: <AboutusDrop />
            path: "https://eice-main-website.vercel.app/About"

        },

        {
            navName: "BLOGS",
            id: 4,
            // dropdown: <ProductDrop />
            path: "https://www.eicetechnology.com/Resources"

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

                <div className={`${styles.navigationIcon} `}>

                    <div>
                        <Link onMouseEnter={handleMouseLeave} className={`${styles.homeNav} font1 linkClass`} to={"/"}>
                            HOME
                        </Link>
                    </div>

                    {navItems.map((item) =>
                    (<div style={{ position: "relative" }}>
                        <div className={`${styles.navNameAndArrow}`} key={item.id} onMouseEnter={() => { handleMouseEnter(item.id) }} style={{ display: "flex" }}>

                            {item.path && (<div>
                                <Link to={item.path} className={`${styles.navName} font1 linkClass`}>
                                    {item.navName}
                                </Link>
                            </div>)}


                            {!item.path && (
                                <div to={item.path} target='_blank' className={`${styles.navName} font1 linkClass`}>
                                    {item.navName}
                                </div>
                            )}


                            {item.dropdown && (<div style={{ display: "flex", alignItems: "center", paddingTop: "2px" }}>
                                {item.id == activeDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>)}




                        </div>

                        {item.dropdown && (<div className={item.style} onClick={handleMouseLeave} onMouseLeave={() => { handleMouseLeave() }} >
                            {item.id == activeDropdown ? item.dropdown : ""}
                        </div>)

                        }

                    </div>
                    ))}




                </div>

                <div onMouseEnter={handleMouseLeave} className={`${styles.contactUsBtn} font1 `}>
                    <Link to={"/form"} style={{ textDecoration: "none", color: "white" }}>
                        Request a Demo
                    </Link>

                </div>

            </div>
        </div>
    );
}
