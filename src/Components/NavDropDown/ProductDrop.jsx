import styles from "./styles/productdrop.module.css"
import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6";



export default function ProductDrop() {


    const product1 = [
        {
            key: 1,
            title: "Room Booking",
            description: "Streamline guest reservations",
            icon: "",
        },
        {
            key: 2,
            title: "Dining (POS)",
            description: "Simplify your dining operations",
            icon: "",
        },
        {
            key: 3,
            title: "Banquet & Billing",
            description: "Manage events with ease",
            icon: "",
        },
        {
            key: 4,
            title: "Member Suite",
            description: "Manage events with ease",
            icon: "",
        },

    ]

    const product2 = [
        {
            key: 5,
            title: "Accounts & Finances",
            description: "Streamline guest reservations",
            icon: "",
        },
        {
            key: 6,
            title: "Purchase & Vendor Portal",
            description: "Simplify your dining operations",
            icon: "",
        },
        {
            key: 7,
            title: "PayRoll",
            description: "Manage events with ease",
            icon: "",
        },
        {
            key: 8,
            title: "User, Store & Inventory",
            description: "Manage events with ease",
            icon: "",
        },

    ]

    const product3 = [
        {
            key: 9,
            title: "User, Store & Inventory",
            description: "Streamline guest reservations",
            icon: "",
        },
        {
            key: 10,
            title: "Food & Beverage Cost Analysis",
            description: "Simplify your dining operations",
            icon: "",
        },

    ]



    return (
        <>

            <div className={`${styles.mainDropDownContainer}`}>

                <div className={`${styles.productConatiner} font1`}>

                    {product1.map((item) =>
                    (
                        <div style={{ width: "13rem" }}>
                            <div>
                                <img src={item.icon} alt="" />
                            </div>
                            <div className={`${styles.titleHeading}`}>{item.title}</div>
                            <div className={`${styles.titeDesc}`} >{item.description} </div>
                        </div>
                    ))}

                </div>

                <div className={`${styles.productConatiner} font1`} >

                    {product2.map((item) =>
                    (
                        <div style={{ width: "13rem" }}>
                            <div>
                                <img src={item.icon} alt="" />
                            </div>
                            <div className={`${styles.titleHeading}`}>{item.title}</div>
                            <div className={`${styles.titeDesc}`} >{item.description} </div>
                        </div>
                    ))}

                </div>

                <div className={`${styles.productConatiner} font1`}>

                    {product3.map((item) =>
                    (
                        <div style={{ width: "13rem" }}>
                            <div>
                                <img src={item.icon} alt="" />
                            </div>
                            <div className={`${styles.titleHeading}`}>{item.title}</div>
                            <div className={`${styles.titeDesc}`} >{item.description} </div>
                        </div>
                    ))}

                </div>


                <div className={`${styles.requestDemo} font1 `}>
                    <div>
                        <Link to={"/form"} style={{ textDecoration: "none", color: "white" }}>
                            Request Demo
                        </Link>
                    </div>

                    <div className={`${styles.arrowStyle} font2`} > <FaArrowRightLong /></div>

                </div>


            </div>

        </>
    )
}
