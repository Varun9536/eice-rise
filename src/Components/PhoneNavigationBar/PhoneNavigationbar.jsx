

import styles from "./phoneNavigation.module.css";

import { Link } from 'react-router-dom';





import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";




import TopNavBar from './topNavbar/TopNavBar';
import { motion } from 'framer-motion';
import RequestButton from '../requestDemoButton/RequestButton';
import ContactUs from '../contactUs/ContactUs';
import SideBarPricePage from '../PhoneNavBarInnerPages/innerPricePage/SideBarPricePage';
import SideBarProductPage from '../PhoneNavBarInnerPages/innerProductPage/SideBarProductPage';
import { useDispatch, useSelector } from 'react-redux';
import { setShowSideBarPge, toggleNavBarIcon } from '../../redux/slice';
import { div } from "framer-motion/client";


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



    ];


    const navItem2 = [
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
    ]










    const navbarOpen = useSelector((state) => state.sideBar.navbarIcon);

    const innerNavPageActive = useSelector((state) => state.sideBar.showSideBarPge)

    const disPatch = useDispatch()


    const toggleNavPageActive = (item) => {
        disPatch(setShowSideBarPge(item))
    }

    const closeSideBar = () => {
        disPatch(toggleNavBarIcon())
        disPatch(setShowSideBarPge("Home"))
    }



    return (
        <>



            <div className={styles.navigationBar}>
                <TopNavBar />
            </div>

            {innerNavPageActive === "Home" && (<div className='font1' style={{ position: "relative", zIndex: "999" }}>

                <motion.div
                    className={styles.mainMenuContainer}
                    initial={{ x: '-100%' }}
                    animate={{ x: navbarOpen ? 0 : '-100%' }}

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
                                    onClick={() => { closeSideBar() }}

                                    to={"/"}
                                    className={`${styles.navigatioName} linkClass`}
                                >
                                    Home
                                </Link>

                                {navigationItems.map((item) => (
                                    <div key={item.key}>
                                        <Link
                                            onClick={() => { toggleNavPageActive(item.navName) }}
                                            to={item.path}
                                            className="linkClass"


                                        >
                                            <div className={`${styles.navNameAndIconBox}`}>
                                                <div className={`${styles.navigatioName} `}>
                                                    {item.navName}
                                                </div>

                                                <div>
                                                    {item.innerNavPage && (
                                                        <div className={`${styles.plusMinusIcon}`}>
                                                            {innerNavPageActive === item.navName ? (<div   >< AiOutlineMinus style={{ fontSize: "25px" }} /></div>) : (<div><AiOutlinePlus style={{ fontSize: "25px" }} /> </div>)}

                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                        </Link>


                                    </div>
                                ))}


                                <Link
                                    onClick={() => { closeSideBar() }}

                                    to={"https://www.eicetechnology.com/About"}
                                    target="_blank"
                                    className={`${styles.navigatioName} linkClass`}

                                >
                                    About Us
                                </Link>

                                <Link
                                    onClick={() => { closeSideBar() }}
                                    to={"https://www.eicetechnology.com/Resources"}
                                    target="_blank"
                                    className={`${styles.navigatioName} linkClass`}

                                >
                                    Blogs
                                </Link>


                            </div>

                            <div className={`${styles.requestonButton}`} onClick={() => { closeSideBar() }}>
                                <RequestButton />
                            </div>

                            <div className={`${styles.ContactUsBox}`}>
                                <ContactUs />
                            </div>

                        </div>)}

                    </>

                </motion.div>
            </div>)}




            {innerNavPageActive === "Products" && (<div className='font1' style={{ position: "relative", zIndex: "999" }}>

                <motion.div
                    className={styles.mainMenuContainer}
                    initial={{ x: '-100%' }}
                    animate={{ x: innerNavPageActive === "Products" ? 0 : '-100%' }}

                    transition={{
                        stiffness: 150,
                        damping: 40,
                        mass: 1.5,
                    }}
                >

                    <>

                        {innerNavPageActive === "Products" && (<div style={{ paddingBottom: "15rem" }} >
                            <SideBarProductPage />
                        </div>)}

                    </>

                </motion.div>
            </div>)}


            {innerNavPageActive === "Pricing" && (<div className='font1' style={{ position: "relative", zIndex: "999" }}>

                <motion.div
                    className={styles.mainMenuContainer}
                    initial={{ x: '-100%' }}
                    animate={{ x: innerNavPageActive === "Pricing" ? 0 : '-100%' }}

                    transition={{
                        stiffness: 150,
                        damping: 40,
                        mass: 1.5,
                    }}
                >

                    <>


                        {innerNavPageActive === "Pricing" && (<div style={{ paddingBottom: "15rem" }} >
                            <SideBarPricePage />
                        </div>)}

                    </>

                </motion.div>
            </div>)}



        </>
    );
}
