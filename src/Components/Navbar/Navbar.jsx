import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import logo from '../../assets/logo/logo.svg';

export default function Navbar() {
    // Track hover state for each navigation item
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

    // Define nav items and dropdown options
    const navItems = [
        { label: 'Home', link: '/' },
        { label: 'Products', link: '/products', dropdown: ['Product 1', 'Product 2', 'Product 3'] },
        { label: 'Pricing', link: '/pricing', dropdown: ['Plan 1', 'Plan 2', 'Plan 3'] },
        { label: 'About Us', link: '/about-us', dropdown: ['Our Story', 'Team', 'Careers'] },
        { label: 'Blogs', link: '/blogs', dropdown: ['Tech', 'Lifestyle', 'Updates'] },
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
                            <Link
                                to={item.link}
                                className="linkClass"
                            >
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
                                        <Link
                                            key={index}
                                            // to={`${item.link}/${dropdownItem.toLowerCase().replace(/\s+/g, '-')}`}
                                            className={styles.dropdownItem}
                                        >
                                            {dropdownItem}
                                        </Link>
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
