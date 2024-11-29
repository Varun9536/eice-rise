import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import logo from '../../assets/logo/logo.svg';

export default function Navbar() {
    // Track hover state for each navigation item
    const [hoverStates, setHoverStates] = useState({
        Home: false,
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

    const navItems = ['Home', 'Products', 'Pricing', 'About Us', 'Blogs'];

    return (
        <>
            <div className={styles.navigationBar}>
                <div className={styles.logoAndNavigationIcon}>
                    <div>
                        <img src={logo} alt="Logo" />
                    </div>

                    <div className={`${styles.navigationIcon} font1`}>
                        {navItems.map((item) => (
                            <div
                                key={item}
                                style={{ display: 'flex' }}
                                onMouseEnter={() => handleOnMouseEnter(item)}
                                onMouseLeave={() => handleOnMouseLeave(item)}
                            >
                                <div>
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="linkClass"
                                    >
                                        {item}
                                    </Link>
                                </div>
                                {/* {item === 'Home' ?  (<div ></div>) : ( <div style={{ paddingTop: '3px' }}>
                                    
                                    {hoverStates[item] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>)} */}

                                {/* <div style={{border : "2px solid red" , height : "300px"}}>

                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
