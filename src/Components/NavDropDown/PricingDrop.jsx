import styles from "./styles/pricingDrop.module.css"





import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6";


// icon drop down

import clubIcon  from "../../assets/DropDown/pricingSuites/clubIcon.png"
import enterpriseIcon  from "../../assets/DropDown/pricingSuites/enterIcon.png"
import inventaryIcon  from "../../assets/DropDown/pricingSuites/inventaryIcon.png"
import posIcon  from "../../assets/DropDown/pricingSuites/posIcon.png"
import frontDeskIcon  from "../../assets/DropDown/pricingSuites/frontIcon.png"
import banquetIcon  from "../../assets/DropDown/pricingSuites/banquetIcon.png"
import vanillaIcon  from "../../assets/DropDown/pricingSuites/vanillaIcon.png"



export default function PricingDrop() {


    const product1 = [
        {
            key: 1,
            title: "Club Suite",
            description: "Streamline guest reservations",
            icon: clubIcon,
            path: "club-suite",

        },
        {
            key: 2,
            title: "Enterprise Suite",
            description: "Simplify your dining operations",
            icon: enterpriseIcon,
            path: "enterprise-suite",
        },
        {
            key: 3,
            title: "Inventary Suite",
            description: "Manage events with ease",
            icon: inventaryIcon,
            path: "inventary-suite",
        },
        {
            key: 4,
            title: "Pos Suite",
            description: "Build a thriving member community",
            icon: posIcon,
            path: "pos-suite",
        },

    ]

    const product2 = [
        {
            key: 5,
            title: "Front Desk Suite",
            description: "Gain full financial control",
            icon: frontDeskIcon,
            path: "frontdesk-suite",
        },
        {
            key: 6,
            title: "Banquet Suite",
            description: "Empower with centralized access",
            icon: banquetIcon,
            path: "banquet-suite",

        },
        {
            key: 7,
            title: "Vanilla Suite",
            description: "Simplify payroll processing",
            icon: vanillaIcon,
            path: "vanilla-suite",
        },
        // {
        //     key: 8,

        //     title: "Purchase & Vendor Portal",
        //     description: "Manage inventory effortlessly",
        //     icon: vendor,
        //     path: "userstore-inventry",
        // },

    ]

    // const product3 = [
    //     {
    //         key: 9,
    //         title: "User, Store & Inventory",
    //         description: "Optimize vendor management",
    //         icon: inventary,
    //         path: "purchase-vendor",
    //     },
    //     {
    //         key: 10,
    //         title: "Food & Beverage Cost Analysis",
    //         description: "Boost profit accuracy",
    //         icon: food,
    //         path: "food-cost",
    //     },

    // ]



    return (
        <>

            <div className={`${styles.mainDropDownContainer}`}>

                <div className={`${styles.productConatiner} font1`}>

                    {product1.map((item) =>
                    (
                        <Link  className="linkClass" key={item.key} to={item.path}>
                            <div  className={`${styles.productDetailBox}`}>
                                <div className={`${styles.productIcon}`}>
                                    <img className={`${styles.iconSize}`} src={item.icon} alt="" />
                                </div>
                                <div className={`${styles.titleHeading} font3`}>{item.title}</div>
                                <div className={`${styles.titeDesc} font1`} >{item.description} </div>
                            </div>
                        </Link>

                    ))}

                </div>

                <div className={`${styles.productConatiner} font1`} >

                    {product2.map((item) =>
                    (

                        <Link className="linkClass" key={item.key} to={item.path}>
                            <div className={`${styles.productDetailBox}`} >
                                <div className={`${styles.productIcon}`}>
                                    <img className={`${styles.iconSize}`} src={item.icon} alt="" />
                                </div>
                                <div className={`${styles.titleHeading} font3`}>{item.title}</div>
                                <div className={`${styles.titeDesc} font1`} >{item.description} </div>
                            </div>
                        </Link>

                    ))}

                </div>
{/* 
                <div className={`${styles.productConatiner} `}>

                    {product3.map((item) =>
                    (
                        <Link className="linkClass"  key={item.key} to={item.path}>
                            <div  className={`${styles.productDetailBox}`}>
                                <div className={`${styles.productIcon}`} >
                                    <img className={`${styles.iconSize}`} src={item.icon} alt="" />
                                </div>
                                <div className={`${styles.titleHeading} font3`}>{item.title}</div>
                                <div className={`${styles.titeDesc} font1`} >{item.description} </div>
                            </div>
                        </Link>

                    ))}

                </div> */}


                <div className={`${styles.requestDemo} font1 `}>
                    <div>
                        <Link to={"/form"} style={{ textDecoration: "none", color: "white" }}>
                            Request a Demo
                        </Link>
                    </div>

                    <div className={`${styles.arrowStyle} font2`} > <FaArrowRightLong /></div>

                </div>


            </div>

        </>
    )
}

