import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./phoneNavigation.module.css";
import logo from "../../assets/logo/logo.svg";
import { Link } from 'react-router-dom';

import { HiOutlineBars3 } from "react-icons/hi2";




import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


import InnerProductPage from '../PhoneNavBarInnerPages/innerProductPage/InnerProductPage';
import InnerPricePage from '../PhoneNavBarInnerPages/innerPricePage/innerPricePage';
import TopNavBar from './topNavbar/TopNavBar';
import { motion } from 'framer-motion';
import RequestButton from '../requestDemoButton/RequestButton';
import ContactUs from '../contactUs/ContactUs';


export default function PhoneNavigationbar() {




    const navigationItems = [
        // {
        //     key: 1,
        //     navName: "Home", path: "/",
        //     innerNavPage: false
        // },
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
            ],
            innerNavPage: true
        },

        {
            key: 4,
            navName: "Pricing", path: "",
            innerItem: [
                { productName: "Enterprise Suite", path: "enterprise-suite" },
                { productName: "Club Suite", path: "club-suite" },
                { productName: "Inventary Suite", path: "inventary-suite" },
                { productName: "POS Suite", path: "pos-suite" },
                { productName: "Front Desk Suite", path: "frontdesk-suite" },
                { productName: "Banquet Suite", path: "banquet-suite" },
                { productName: "Vanilla Suite", path: "vanilla-suite" },

            ],
            innerNavPage: true

        },


        {
            key: 3,
            navName: "About Us", path: "https://www.eicetechnology.com/About",
            innerNavPage: false


        },

        {
            key: 5,
            navName: "Blogs", path: "https://www.eicetechnology.com/Resources",
            innerNavPage: false
        },
    ];

    const [navbarOpen, setNavbarOpen] = useState(true);
    const [change, setChange] = useState(true)

    const handleDataFromChild = () => {
        setNavbarOpen(prev => !prev);
        setInnerNavPageActive("Home")
    };

    const handleDataFromPrice = () => {
        setNavbarOpen(prev => !prev);
        setChange(prev => !prev)
        setInnerNavPageActive("Home")

    }

    const handleDataFromProduct = () => {
        setNavbarOpen(prev => !prev);
        setChange(prev => !prev)
        setInnerNavPageActive("Home")

    };

    const handleHomeButton =()=>
    {
        setInnerNavPageActive("Home")
    }
    

    const [activeNavItem, setActiveNavItem] = useState("");
    const [innerNavPageActive, setInnerNavPageActive] = useState("Home")


    const toggleNavPageActive = (item) => {
        setInnerNavPageActive(prev => (prev === item ? "" : item))
    }





    return (
        <>



            <div className={styles.navigationBar}>
                <TopNavBar change={change} sendDataToParent={handleDataFromChild} />
            </div>







            <div className='font1' style={{ position: "relative", zIndex: "999" }}>
                {/* {
                    navbarOpen ? (<div></div>) :
                        (
                            <>
                                {innerNavPageActive === "Home" && (<div className={styles.mainMenuBox}>

                                    <div className={`${styles.navigationContainer}`}>


                                        <Link
                                            onClick={() => { setChange(prev => !prev), setNavbarOpen(prev => !prev) }}
                                            to={"/"}
                                            className='linkClass'
                                        >
                                            Home
                                        </Link>

                                        {navigationItems.map((item) => (
                                            <div key={item.key}>
                                                <Link
                                                    onClick={() => { toggleNavPageActive(item.navName) }}
                                                    to={item.path}
                                                    className='linkClass'
                                                >
                                                    <div className={`${styles.navNameAndIconBox}`}>
                                                        <div>
                                                            {item.navName}
                                                        </div>

                                                        <div>
                                                            {item.innerNavPage && (
                                                                <div className={`${styles.plusMinusIcon}`}>
                                                                    {innerNavPageActive === item.navName ? (<div  ><AiOutlineMinus /></div>) : (<div><AiOutlinePlus /> </div>)}

                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>

                                                </Link>


                                            </div>
                                        ))}
                                    </div>

                                    <div onClick={() => { setNavbarOpen(prev => !prev), setChange(prev => !prev) }}>
                                        <RequestButton />
                                    </div>

                                    <ContactUs />
                                </div>)}


                                {innerNavPageActive === "Products" && (<div >
                                    <InnerProductPage sendDataToProduct={handleDataFromProduct} />
                                </div>)}

                                {innerNavPageActive === "Pricing" && (<div>
                                    <InnerPricePage sendDataToPrice={handleDataFromPrice} />
                                </div>)}


                            </>

                        )
                } */}



                <motion.div
                    className={styles.mainMenuContainer}
                    initial={{ x: '-100%' }} 
                    animate={{ x: !navbarOpen ? 0 : '-100%' }} 
                    
                    transition={{
                        stiffness: 150,  
                        damping: 40,     
                        mass: 1.5,      
                      }} 
                >

                    <>
                        {innerNavPageActive === "Home" && (<div className={styles.menuBox}>

                            <div className={`${styles.navigationContainer}`}>


                                <Link
                                    onClick={() => { setChange(prev => !prev), setNavbarOpen(prev => !prev) }}
                                    to={"/"}
                                    className='linkClass'
                                >
                                    Home
                                </Link>

                                {navigationItems.map((item) => (
                                    <div key={item.key}>
                                        <Link
                                            onClick={() => { toggleNavPageActive(item.navName) }}
                                            to={item.path}
                                            className='linkClass'
                                        >
                                            <div className={`${styles.navNameAndIconBox}`}>
                                                <div>
                                                    {item.navName}
                                                </div>

                                                <div>
                                                    {item.innerNavPage && (
                                                        <div className={`${styles.plusMinusIcon}`}>
                                                            {innerNavPageActive === item.navName ? (<div  ><AiOutlineMinus /></div>) : (<div><AiOutlinePlus /> </div>)}

                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                        </Link>


                                    </div>
                                ))}
                            </div>

                            <div onClick={() => { setNavbarOpen(prev => !prev), setChange(prev => !prev) }}>
                                <RequestButton/>
                            </div>

                           <ContactUs/>
                        </div>)}

                        {innerNavPageActive === "Products" && (<div >
                            <InnerProductPage sendDataToProduct={handleDataFromProduct} handleHomeButton = {handleHomeButton} />
                        </div>)}

                        {innerNavPageActive === "Pricing" && (<div>
                            <InnerPricePage sendDataToPrice={handleDataFromPrice} handleHomeButton = {handleHomeButton} />
                        </div>)}


                    </>

                </motion.div>
            </div>


        </>
    );
}
