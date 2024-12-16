
import styles from "./Layout.module.css"

import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import PhoneNavigationbar from '../PhoneNavigationBar/PhoneNavigationbar';
import { Outlet } from 'react-router-dom';
import ScrollUp from "../ScrollUp/ScrollUp";

export default function Layout() {

    const [isPhone, setIsPhone] = useState(window.innerWidth <= 1120);


    useEffect(() => {
        const handleResize = () => {
            setIsPhone(window.innerWidth <= 1120); // Update based on screen size
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
        {/* <ScrollUp/> */}
            {

                isPhone ? (<div className={styles.phoneNavBar}>
                    <PhoneNavigationbar />
                </div>)

                    :

                    (<div className={styles.LaptopNavBar}>
                        <Navbar />
                    </div>)
            }
            <Outlet />
        </>
    )
}
