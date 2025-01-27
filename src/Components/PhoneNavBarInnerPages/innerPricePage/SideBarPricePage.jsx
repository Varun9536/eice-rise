
import TopNavBar from "../../PhoneNavigationBar/topNavbar/TopNavBar"

import styles from "./sideBarPricePage.module.css"

import { Link } from "react-router-dom"

import clubIcon from "../../../assets/DropDown/pricingSuites/clubIcon.png"
import enterpriseIcon from "../../../assets/DropDown/pricingSuites/enterIcon.png"
import inventaryIcon from "../../../assets/DropDown/pricingSuites/inventaryIcon.png"
import posIcon from "../../../assets/DropDown/pricingSuites/posIcon.png"
import frontDeskIcon from "../../../assets/DropDown/pricingSuites/frontIcon.png"
import banquetIcon from "../../../assets/DropDown/pricingSuites/banquetIcon.png"
import vanillaIcon from "../../../assets/DropDown/pricingSuites/vanillaIcon.png"


import { IoIosArrowForward } from "react-icons/io";
import RequestButton from "../../requestDemoButton/RequestButton"
import ContactUs from "../../contactUs/ContactUs"


export default function SideBarPricePage({ sendDataToPrice , handleHomeButton }) {

    const priceItem1 = [

        {
            key: 1,
            title: "Enterprise",
            title2: "Suite",
            description: "Optimize operations with full-scale control",
            icon: enterpriseIcon,
            path: "enterprise-suite",
        },
        {
            key: 2,
            title: "Club",
            title2: "Suite",
            description: "Engage members with seamless management",
            icon: clubIcon,
            path: "club-suite",

        },

        {
            key: 3,
            title: "Inventary",
            title2: "Suite",
            description: "Simplify inventory and procurement workflows",
            icon: inventaryIcon,
            path: "inventary-suite",
        },
        {
            key: 4,
            title: "POS",
            title2: "Suite",
            description: "Streamline sales and transactions effortlessly",
            icon: posIcon,
            path: "pos-suite",
        },

    ]

    const priceItem2 = [
        {
            key: 5,
            title: "Front Desk",
            title2: "Suite",
            description: "Elevate guest experiences from check-in to billing",
            icon: frontDeskIcon,
            path: "frontdesk-suite",
        },
        {
            key: 6,
            title: "Banquet",
            title2: "Suite",
            description: "Manage events and finances flawlessly",
            icon: banquetIcon,
            path: "banquet-suite",

        },
        {
            key: 7,
            title: "Vanilla",
            title2: "Suite",
            description: "All-in-one solution for versatile operations",
            icon: vanillaIcon,
            path: "vanilla-suite",
        },


    ]

  return (
    <>

    <div className={`${styles.mainPriceContainer}`}>

        {/* <div className={`${styles.TopNavBar}`}>
        <TopNavBar />
        </div> */}

        <div className={`${styles.breadScrum}`} style={{ padding: "0px 20px" }}>

            <div  onClick={handleHomeButton}>
                    Home
            </div>

            <div className={`${styles.arrowSign}`}>
                <IoIosArrowForward />
            </div>

            <div style={{ fontWeight: "600" }}>
                Pricing
            </div>

        </div>

        <div style={{ padding: "0px 20px" }} className={`${styles.priceNavItemContainer}`} >



            <div className={`${styles.priceNavItemSubContainer} font1`}>

                {priceItem1.map((item) =>
                (
                    <Link onClick={sendDataToPrice} className="linkClass" key={item.key} to={item.path}>
                        <div className={`${styles.priceDetailBox}`}>
                            <div className={`${styles.priceIcon}`}>
                                <img className={`${styles.iconSize}`} src={item.icon} alt="" />
                            </div>
                            <div className={`${styles.titleHeading} font3`}>

                                <div>{item.title}</div>
                                <div>{item.title2}</div>
                            </div>
                            {/* <div className={`${styles.titeDesc} font1`} >{item.description} </div> */}
                        </div>
                    </Link>

                ))}

            </div>


            <div className={`${styles.priceNavItemSubContainer} font1`}>

                {priceItem2.map((item) =>
                (
                    <Link onClick={sendDataToPrice} className="linkClass" key={item.key} to={item.path}>
                        <div className={`${styles.priceDetailBox}`}>
                            <div className={`${styles.priceIcon}`}>
                                <img className={`${styles.iconSize}`} src={item.icon} alt="" />
                            </div>
                            <div className={`${styles.titleHeading} font3`}>

                                <div>{item.title}</div>
                                <div>{item.title2}</div>
                            </div>
                            {/* <div className={`${styles.titeDesc} font1`} >{item.description} </div> */}
                        </div>
                    </Link>

                ))}

            </div>

        </div>
        <div style={{marginTop : "4rem"}} onClick={sendDataToPrice}>
          <RequestButton/>
        </div>

       <ContactUs/>


    </div>

</>
  )
}












