import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import logo from '../../assets/logo/logo.svg';

export default function Navbar() {




    const [hoverStates, setHoverStates] = useState({
        Products: false,
        Pricing: false,
        'About Us': false,
        Blogs: false,
    });



    const handleOnMouseEnter = (label) => {
        setHoverStates((prev) => ({ ...prev, [label]: true }));
    };

    const handleOnMouseLeave = (label) => {
        setHoverStates((prev) => ({ ...prev, [label]: false }));
    };






    const navItems = [
        { label: 'Home', link: '/' },



        {
            label: 'Products',
            link: '',
            dropdown: [
                { productName: "Room Booking", path: "room-booking" },
                { productName: "Dining (POS)", path: "pos-dining" },
                { productName: "Banquet & Billing", path: "banquet-billing" },
                { productName: "Member Suite", path: "member-suite" },
                { productName: "Accounts & Finances", path: "account-finance" },
                { productName: "Employee Suite", path: "employee-suite", },
                { productName: "PayRoll", path: "payroll" },
                { productName: "User, Store & Inventory", path: "userstore-inventry", },
                { productName: "Purchase & Vendor Portal", path: "purchase-vendor", },
                { productName: "Food & Beverage Cost Analysis", path: "food-cost", }
            ]
        },


        { label: 'Pricing', link: '', dropdown: [
            {productName: "Room Booking", path: "room-booking" }
        ] },


        { label: 'About Us', link: 'about-us', dropdown: ['Our Story', 'Team', 'Careers'] },



        { label: 'Blogs', link: 'blogs', dropdown: ['Tech', 'Lifestyle', 'Updates'] },
    ];






    return (
        <div className={styles.navigationBar}>
            <div className={styles.logoAndNavigationIcon}>

                <div>
                    <img src={logo} alt="Logo" />
                </div>

                <div className={`${styles.navigationIcon} font1`}>
                    {navItems.map((item) => (

                        <div
                            key={item.label}
                            style={{ display: 'flex', position: 'relative' }}
                            onMouseEnter={() => handleOnMouseEnter(item.label)}
                            onMouseLeave={() => handleOnMouseLeave(item.label)}
                        >
                            <Link to={item.link} className="linkClass">

                                <div style={{ paddingBottom: item.label === "Home" ? "3px" : "0" }}>
                                    {item.label}
                                </div>

                            </Link>

                            {item.label !== 'Home' && (
                                <div style={{ paddingTop: "3px" }}>
                                    {hoverStates[item.label] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>
                            )}

                            {/* Render Dropdown Menu */}
                            {item.dropdown && hoverStates[item.label] && (
                                <div className={styles.dropdownMenu}>
                                    {item.dropdown.map((dropdownItem, index) => (
                                        <div>
                                            <Link key={index} to={dropdownItem.path} className={styles.dropdownItem}>
                                                {dropdownItem.productName}
                                            </Link>
                                        </div>

                                    ))}
                                </div>
                            )}


                        </div>
                    ))}
                </div>



            </div>
        </div>
    );
}
