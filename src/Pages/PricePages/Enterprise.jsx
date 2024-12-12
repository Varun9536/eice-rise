import styles from "./Styles/enterprise.module.css"


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


export default function Enterprise() {


    const services = [
        {
            serviceName: "ROOM BOOKING",
            icon: room,
            path: "room-booking",
            key: 1
        },

        {
            serviceName: "DINNING (POS)",
            icon: pos,
            path: "pos-dining",
            key: 2
        },

        {
            serviceName: "BANQUET & BILLING",
            icon: banquet,
            path: "banquet-billing",
            key: 3
        },

        {

            serviceName: (<span style={{ padding: "0px 3px" }}>MEMBER SUITE</span>),
            icon: member,
            path: "member-suite",
            key: 4
        },

        {
            serviceName: "ACCOUNT & FINANCE",
            icon: account,
            path: "account-finance",
            key: 5
        },

        {
            serviceName: "EMPLOYEE SUITE",
            icon: emp,
            path: "employee-suite",
            key: 6
        },

        {
            serviceName: "PAYROLL",
            icon: pay,
            path: "payroll",
            key: 7
        },

        {
            serviceName: "USER STORE & INVENTORY",
            icon: inentry,
            path: "userstore-inventry",
            key: 8
        },

        {
            serviceName: "PURCHASE & VENDOR PORTAL",
            icon: vendor,
            path: "purchase-vendor",
            key: 9
        },

        {
            serviceName: "FOOD & BEVERAGE COST ANALYSIS",
            icon: food,
            path: "food-cost",
            key: 10
        }
    ]

    const whyToChooseUs = [
        {
            key: "all-in-one-solution",
            title: "1. All-in-One Solution",
            description: "Covers every aspect of business operations, from member management to financial tracking."
        },
        {
            key: "data-driven-insights",
            title: "2. Data-Driven Insights",
            description: "Leverage analytics and reporting tools to make informed decisions."
        },
        {
            key: "improved-collaboration",
            title: "3. Improved Collaboration",
            description: "Connect multiple departments through an integrated platform for seamless communication and coordination."
        },
        {
            key: "scalability",
            title: "4. Scalability",
            description: "Perfect for enterprises looking to expand operations and streamline management across locations."
        }
    ];

    return (
        <>
            <section>
                <div className={`${styles.overviewSection} globalBlueOverviewSection`}>

                    <div className={`${styles.overviewEyeImgSize}`}>
                        <img style={{ width: "100%" }} src={eyeImg} alt="" />
                    </div>

                    <div className={`${styles.overviewPara} font1`}>

                    The Enterprise Suite is a comprehensive solution designed for large- scale operations and businesses aiming to achieve seamless integration across all departments. This suite combines advanced tools and modules to optimize resource management, improve operational efficiency, and enhance decision-making.
                    </div>

                </div>
            </section>




            <section className={`${styles.section2} `}>

                <div style={{ backgroundColor: "#F0FBFF" }} >
                    <div className={`${styles.servicesBox} globalSectionSize`}>
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

                <div style={{ display: "flex", justifyContent: "center" }} className="globalSectionSize">
                    <div className={`${styles.demoButton} font1`}>
                        <div > Request for Pricing </div>
                        <div className={`${styles.demoArrowButton}`}> <FaArrowRightLong /></div>
                    </div>

                </div>

            </section>


            <section>
                <div className={`${styles.whyChooseSection} globalSectionSize`}>
                    <div className={`${styles.chooseUsHeading} font3`}>Why Choose Enterprise Suite</div>
                    <div>

                        {whyToChooseUs.map((item) =>

                            <div key={item.key}>

                                <span>{item.title} : </span>
                                <span>{item.description}</span>


                            </div>
                        )}


                    </div>
                </div>

            </section>

        </>
    )
}

