import styles from "./Hospitality.module.css"
import laptop from "../../assets/Hospitality/laptop.png"
import { Link } from "react-router-dom"


import account from "../../assets/insidePages/account/account.webp"
import pos from "../../assets/insidePages/pos/pos.webp"
import banquet from "../../assets/insidePages/banquet/banquet.webp"
import emp from "../../assets/insidePages/emp/emp.webp"
import food from "../../assets/insidePages/food/food.webp"
import inentry from "../../assets/insidePages/inventry/inventry.webp"
import member from "../../assets/insidePages/member/member.webp"
import pay from "../../assets/insidePages/pay/pay.webp"
import room from "../../assets/insidePages/room/room.webp"
import vendor from "../../assets/insidePages/vendor/vendor.webp"

import vimg from "../../assets/insidePages/vimg.png"



export default function HospitalityPage() {


    const services = [
        {
            serviceName: "ROOM BOOKING",
            icon: room,
            path: "room-booking",
            key: "1"
        },

        {
            serviceName: "DINNING (POS)",
            icon: pos,
            path: "pos-dining",
            key: "2"
        },

        {
            serviceName: "BANQUET & BILLING",
            icon: banquet,
            path: "banquet-billing",
            key: "3"
        },

        {
            serviceName: "MEMBER SUITE ",
            icon: member,
            path: "member-suite",
            key: "4"
        },

        {
            serviceName: "ACCOUNT & FINANCE",
            icon: account,
            path: "account-finance",
            key: "5"
        },

        {
            serviceName: "EMPLOYEE SUITE",
            icon: emp,
            path: "employee-suite",
            key: "6"
        },

        {
            serviceName: "PAYROLL",
            icon: pay,
            path: "payroll",
            key: "7"
        },

        {
            serviceName: "USER STORE & INVENTRY",
            icon: inentry,
            path: "userstore-inventry",
            key: "8"
        },

        {
            serviceName: "PURCHASE & VENDOR PORTAL",
            icon: vendor,
            path: "purchase-vendor",
            key: "9"
        },

        {
            serviceName: "FOOD & BEVERAGE COST ANALYSIS",
            icon: food,
            path: "food-cost",
            key: "10"
        }
    ]


    return (
        <>

            {/* section1 */}
            <section className={styles.section1}>

                <div className={styles.laptopImg}>
                    <img style={{ maxWidth: "60%" }} src={laptop} alt="" />
                </div>

                <div className={styles.textBox}>
                    <div className={`${styles.text1}  `}>
                        <span className="font2" >Flexible, Modular Solutions</span> <span className="font1">tailored to your business needs</span>
                    </div>

                    <p className={`${styles.text2} font1`}>
                        EICE Rise ERP simplifies hospitality operations by uniting front desk, housekeeping, dining, and finance into a single, efficient platform for streamlined management and enhanced guest experiences.
                    </p>

                    <div className={`${styles.text3} font1`}>
                        Request a Demo
                    </div>

                </div>

            </section>

            {/* section2 */}

            <section className={`${styles.section2} `}>


                <div className={`${styles.section2Heading} font1 globalPageSize`}>Our <span className={`${styles.headingClass} font2`} > End to End </span>  Technology Solution</div>



                <div style={{ backgroundColor: "#F0FBFF" }} >
                    <div className={`${styles.servicesBox} globalPageSize2 `}>
                        {services.map((item) =>
                        (
                            <Link className="linkClass" key={item.key} to={item.path}>

                                <div className={`${styles.iconAndTextBox} `}>

                                    <div className={styles.imgBox} >
                                        <img src={item.icon} alt="" />
                                    </div>

                                    <div className={`${styles.serviceName} font1`}>{item.serviceName}</div>
                                </div>

                            </Link>

                        ))}
                    </div>

                </div>


            </section>


            {/* section3 */}


            <section className={`${styles.section3} globalPageSize`}>

                <div className={`${styles.section3Heading} font1`}>With deep expertise in <span className={`${styles.headingClass} font2`}>Hospitality Technology</span> , we have
                    perfected the art of delivering efficient, scalable, and tailored
                    tech solutions for the industry</div>


                <p className={`${styles.section3Para} font1`} >With a deep understanding of the hospitality industry's unique needs, we deliver cutting-edge software solutions tailored for hotels, restaurants, and event spaces. From full-stack cloud ERP systems to focused modules for specific operations, our tools enhance efficiency and elevate guest experiences across wellness, leisure, and meetings.</p>


                <div className={`${styles.section3Video}`} >
                    <img style={{ width: "65%" }} src={vimg} alt="video" />
                </div>

            </section>


            {/* section4 */}


            <section>
                
            </section>



        </>
    )
}
