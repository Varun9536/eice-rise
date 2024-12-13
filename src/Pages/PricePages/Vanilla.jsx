import styles from "./Styles/vanilla.module.css"


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


export default function Vanilla() {


    const services = [
        // {
        //     serviceName: "ROOM BOOKING",
        //     icon: room,
        //     path: "room-booking",
        //     key: 1
        // },

        {
            serviceName: "DINNING (POS)",
            icon: pos,
            path: "/pos-dining",
            key: 2
        },

        {
            serviceName: "BANQUET & BILLING",
            icon: banquet,
            path: "/banquet-billing",
            key: 3
        },

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

        // {
        //     serviceName: "PURCHASE & VENDOR PORTAL",
        //     icon: vendor,
        //     path: "purchase-vendor",
        //     key: 9
        // },

        {
            serviceName: "FOOD & BEVERAGE COST ANALYSIS",
            icon: food,
            path: "/food-cost",
            key: 10
        }
    ]

    const whyToChooseUs = [
        {
            key: "comprehensive-functionality",
            title: "1. Comprehensive Functionality",
            description: "A one-stop solution for all essential business operations."
        },
        {
            key: "efficiency-boost",
            title: "2. Efficiency Boost",
            description: "Automates processes for better productivity and time savings."
        },
        {
            key: "cost-optimization",
            title: "3. Cost Optimization",
            description: "Helps reduce overheads and improve profitability through actionable insights."
        }
    ];

    return (
        <>
            

            <section className={`${styles.overviewSection}`}>
                <div className={`${styles.overviewBox} globalBlueOverviewSection`}>


                    <div className={`${styles.overviewEyeImgSize}`}>
                        <img style={{ width: "100%" }} src={eyeImg} alt="" />
                    </div>

                    <div className={`${styles.overviewPara} font1`}>
                    The Vanilla Suite is a <strong className="font2">versatile and comprehensive suite</strong>  that  <strong className="font2"> empowers businesses with inventory control, financial management</strong>, procurement, and operational cost tracking. <strong className="font2">Ideal for diverse industries</strong> , it offers the perfect blend of essential modules for efficient operations.

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

                <div style={{ display: "flex", justifyContent: "center" }} className="globalSectionSize">
                    <div className={`${styles.demoButton} font1`}>
                        <div > Request for Pricing </div>
                        <div className={`${styles.demoArrowButton}`}> <FaArrowRightLong /></div>
                    </div>

                </div>

            </section>


            <section className={`${styles.whyChooseSection} globalSectionSize`}>

                <div className={`${styles.chooseUsHeading} font3`}>Why Choose Vanilla Suite ?</div>

                <div className={`${styles.titleAndDescBox}`} >

                    {whyToChooseUs.map((item) =>

                        <div className="font4" key={item.key} >

                            <span className={`${styles.titleHeading}`}>{item.title} : </span>
                            <span className={`${styles.titleDesc}`}>{item.description}</span>


                        </div>
                    )}


                </div>

            </section>

        </>
    )
}

