import styles from "./Styles/inventary.module.css"


import eyeImg from "../../assets/pricing/eye/eye.webp"
import { Link } from "react-router-dom"


import account from "../../assets/Hospitality/allPageIcon/Account.png"
import pos from "../../assets/Hospitality/allPageIcon/POS.png"
import banquet from "../../assets/Hospitality/allPageIcon/Banquet.png"
import emp from "../../assets/Hospitality/allPageIcon/Employee.png"
import food from "../../assets/Hospitality/allPageIcon/Food.png"
import inentry from "../../assets/Hospitality/allPageIcon/store.png"
import member from "../../assets/Hospitality/allPageIcon/Member.png"
import pay from "../../assets/Hospitality/allPageIcon/PAyscale.png"
import room from "../../assets/Hospitality/allPageIcon/Room.png"
import vendor from "../../assets/Hospitality/allPageIcon/purchase.png"


import { FaArrowRightLong } from "react-icons/fa6";


export default function Inventary() {


    const services = [
        // {
        //     serviceName: "ROOM BOOKING",
        //     icon: room,
        //     path: "room-booking",
        //     key: 1
        // },

        // {
        //     serviceName: "DINNING (POS)",
        //     icon: pos,
        //     path: "pos-dining",
        //     key: 2
        // },

        // {
        //     serviceName: "BANQUET & BILLING",
        //     icon: banquet,
        //     path: "banquet-billing",
        //     key: 3
        // },

        // {

        //     serviceName: (<span style={{ padding: "0px 3px" }}>MEMBER SUITE</span>),
        //     icon: member,
        //     path: "member-suite",
        //     key: 4
        // },

        // {
        //     serviceName: "ACCOUNT & FINANCE",
        //     icon: account,
        //     path: "account-finance",
        //     key: 5
        // },

        // {
        //     serviceName: "EMPLOYEE SUITE",
        //     icon: emp,
        //     path: "employee-suite",
        //     key: 6
        // },

        // {
        //     serviceName: "PAYROLL",
        //     icon: pay,
        //     path: "payroll",
        //     key: 7
        // },

        {
            serviceName: "USER STORE & INVENTORY",
            icon: inentry,
            path: "/userstore-inventry",
            key: 8
        },

        {
            serviceName: "PURCHASE & VENDOR PORTAL",
            icon: vendor,
            path: "/purchase-vendor",
            key: 9
        },

        // {
        //     serviceName: "FOOD & BEVERAGE COST ANALYSIS",
        //     icon: food,
        //     path: "food-cost",
        //     key: 10
        // }
    ]

    const whyToChooseUs = [
        {
            key: "enhanced-control",
            title: "1. Enhanced Control",
            description: "Monitor and manage inventory levels with precision, ensuring smooth operations."
        },
        {
            key: "optimized-procurement",
            title: "2. Optimized Procurement",
            description: "Strengthen vendor relationships and streamline the purchase process to save time and reduce costs."
        },
        {
            key: "real-time-updates",
            title: "3. Real-Time Updates",
            description: "Stay informed with live inventory status and automated notifications for low stock or delayed deliveries."
        },
        {
            key: "cost-effective",
            title: "4. Cost-Effective",
            description: "Minimize waste, reduce overstocking, and ensure resource allocation aligns with business needs."
        }
    ];

    return (
        <>


            <section className={`${styles.overviewSection}`}>
                <div className={`${styles.overviewBox} globalBlueOverviewSection`}>


                    {/* <div className={`${styles.overviewEyeImgSize}`}>
                        <img style={{ width: "100%" }} src={eyeImg} alt="" />
                    </div> */}

                    <div className={`${styles.overviewPara} font1`}>

                        The Inventory Suite is designed to <strong className="font2">streamline stock and supply chain management</strong> , ensuring businesses maintain optimal inventory levels while fostering strong vendor relationships. This suite is ideal for organizations looking to <strong className="font2">enhance operational efficiency and minimize waste</strong>  through advanced tracking and management tools.

                    </div>

                </div>
            </section>



            <section className={`${styles.section2} `}>



<div className={`${styles.moduleboxAndHeading}  globalSectionSize `} >

    <div className={`${styles.moduleIncludedHeading} font4`}>Modules Included</div>

    <div className={`${styles.servicesBox} `}>


        {services.map((item) =>
        (
            <Link className="linkClass" key={item.key} to={item.path}>

                <div className={`${styles.iconAndTextBox} `}>

                    <div className={styles.imgBox} >
                        <img src={item.icon} alt="" />
                    </div>
                    <div>
                        {item.key < 9 ? (<div className={`${styles.serviceName} font1`}>{item.serviceName}</div>) : (<div className={`${styles.serviceName2} font1`}>{item.serviceName}</div>)}
                    </div>

                </div>

            </Link>

        ))}
    </div>

</div>






</section>



            <section className={`${styles.requestDemoBtn}`}>

                <Link to={"/form"} className="linkClass">
                                <div style={{ display: "flex", justifyContent: "center" }} className="globalSectionSize">
                                    <div className={`${styles.demoButton} font1`}>
                                        <div > Request for Pricing </div>
                                        <div className={`${styles.demoArrowButton}`}> <FaArrowRightLong /></div>
                                    </div>
                
                                </div>
                                </Link>

            </section>


            <section>
                <div className={`${styles.whyChooseSection} globalSectionSize`}>
                    <div className={`${styles.chooseUsHeading} font3`}>Why Choose Inventory Suite ?</div>
                    <div className={`${styles.titleAndDescBox}`}>

                        {whyToChooseUs.map((item) =>

                            <div className="font4" key={item.key} >

                                <span className={`${styles.titleHeading}`}>{item.title} : </span>
                                <span className={`${styles.titleDesc}`}>{item.description}</span>


                            </div>
                        )}


                    </div>
                </div>

            </section>

        </>
    )
}

