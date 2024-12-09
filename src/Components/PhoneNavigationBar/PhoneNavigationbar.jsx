import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./phoneNavigation.module.css";
import logo from "../../assets/logo/logo.svg";
import { Link } from 'react-router-dom';

import { HiOutlineBars3 } from "react-icons/hi2";


import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function PhoneNavigationbar() {

    const navigationItems = [
        {
            key: 1,
            navName: "Home", path: "/",
        },
        {
            key: 2,
            navName: "Products", path: "",
            innerItem: [
                { productName: "Room Booking", path: "room-booking" },
                { productName: "Dining (POS)", path: "pos-dining" },
                { productName: "Banquet & Billing", path: "banquet-billing" },
                { productName: "Member Suite", path: "member-suite" },
                { productName: "Accounts & Finances", path: "account-finance" },
                { productName: "Employee Suite", path: "employee-suite" },
                { productName: "PayRoll", path: "payroll" },
                { productName: "User, Store & Inventory", path: "userstore-inventry" },
                { productName: "Purchase & Vendor Portal", path: "purchase-vendor" },
                { productName: "Food & Beverage Cost Analysis", path: "food-cost" }
            ]
        },


        {
            key: 3,
            navName: "About Us", path: "https://www.eicetechnology.com/About",
            

        },
        {
            key: 4,
            navName: "Pricing", path: ""
        },
        {
            key: 5,
            navName: "Blogs", path: "https://www.eicetechnology.com/Resources"
        },
    ];

    const [navbarOpen, setNavbarOpen] = useState(true);

    const [activeNavItem, setActiveNavItem] = useState("");

    const toggleNavItem = (item) => {
        setActiveNavItem(prev => (prev === item ? "" : item));
    };



    const navbarIconChange = () => {
        setNavbarOpen(prev => !prev);
    };

    return (
        <>

            <div className={styles.navigationBar}>
                <div>
                    {navbarOpen ?
                        (< HiOutlineBars3 className={styles.menuIcon} onClick={navbarIconChange} size={37} />) :
                        (<IoCloseSharp className={styles.closeIcon} onClick={navbarIconChange} size={36} />)}
                </div>

                <div style={{ width: "100px" }}>
                    <img style={{ width: "100%" }} src={logo} alt="Logo" />
                </div>


            </div>







            <div className='font1' style={{ position: "fixed", zIndex: "999" }}>
                {
                    navbarOpen ? (<div></div>) :
                        (
                            <>

                                <div className={styles.menuMainBox}>
                                    {navigationItems.map((item) => (
                                        <div key={item.key}>
                                            <Link
                                                onClick={() => toggleNavItem(item.navName)}
                                                to={item.path}
                                                className='linkClass'
                                            >
                                                <div style={{ fontWeight: "600" }}>
                                                    {item.navName !== "Products" ?
                                                        (<div onClick={navbarIconChange}>{item.navName}</div>)
                                                        :
                                                        (<div style={{ display: "flex", justifyContent: "space-between" }}>

                                                            <div>{item.navName} </div>
                                                            <div>

                                                                {activeNavItem === item.navName ? (<IoIosArrowUp />) : (<IoIosArrowDown />)}
                                                            </div>

                                                        </div>)}
                                                </div>

                                            </Link>



                                            {/* inner menu items */}
                                            <div className={`${styles.innerNavItems}`}>
                                                {activeNavItem === item.navName && item.innerItem?.map((innerItem, index) => (
                                                    <div className={`${styles.innerNavItemStyle}`}>
                                                        <Link
                                                            key={index}
                                                            onClick={navbarIconChange}
                                                            to={innerItem.path}
                                                            className='linkClass'
                                                        >
                                                            <div>{innerItem.productName}</div>
                                                        </Link>
                                                    </div>

                                                ))}
                                            </div>


                                        </div>
                                    ))}

                                    

                                   
                                </div>



                            </>

                        )
                }
            </div>
        </>
    );
}
