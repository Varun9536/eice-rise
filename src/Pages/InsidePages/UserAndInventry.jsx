import style from "./Styles/userAndInventry.module.css"


import icon1 from "../../assets/insidePages/pos/posPage/section3/icon1.png"
import icon2 from "../../assets/insidePages/pos/posPage/section3/icon2.png"
import icon3 from "../../assets/insidePages/pos/posPage/section3/icon3.png"



// features
import ips from "../../assets/insidePages/pos/posPage/feature/ips.png"
import it from "../../assets/insidePages/pos/posPage/feature/it.png"
import kds from "../../assets/insidePages/pos/posPage/feature/kds.png"
import oc from "../../assets/insidePages/pos/posPage/feature/oc.png"
import plp from "../../assets/insidePages/pos/posPage/feature/plp.png"
import rtmm from "../../assets/insidePages/pos/posPage/feature/rtmm.png"
import rtsr from "../../assets/insidePages/pos/posPage/feature/rtsr.png"
import tm from "../../assets/insidePages/pos/posPage/feature/tm.png"
import ufi from "../../assets/insidePages/pos/posPage/feature/ufi.png"



// benifits

import b1 from "../../assets/insidePages/pos/posPage/benefit/b1.webp"
import b2 from "../../assets/insidePages/pos/posPage/benefit/b2.webp"
import b3 from "../../assets/insidePages/pos/posPage/benefit/b3.webp"
import b4 from "../../assets/insidePages/pos/posPage/benefit/b4.webp"
import b5 from "../../assets/insidePages/pos/posPage/benefit/b5.webp"



import laptop from "../../assets/insidePages/pos/posPage/laptop.webp"

import Accordion from "../../Components/Accordian/Accordian.jsx"

import Footer3 from "../../Components/Footer/Footer3.jsx"

import { FaArrowRightLong } from "react-icons/fa6";

export default function UserAndInventry() {




    const features = [
        {
            key: 1,
            heading: "Centralized User Management",
            desc: "Streamline user access store-wise with customizable roles and permissions.",
            img: ufi, // Reused image from the previous features array
            width: "64px" // Reused width from the previous features array
        },
        {
            key: 2,
            heading: "Efficient Store Management",
            desc: "Manage multiple stores from one dashboard, tracking performance, inventory, and sales trends for optimized success.",
            img: rtmm, // Reused image from the previous features array
            width: "65px" // Reused width from the previous features array
        },
        {
            key: 3,
            heading: "Real-Time Inventory Control",
            desc: "Get live updates on inventory levels with automated synchronization and low stock alerts to ensure smooth operations.",
            img: oc, // Reused image from the previous features array
            width: "54px" // Reused width from the previous features array
        },
        {
            key: 4,
            heading: "Advanced Reporting and Analytics",
            desc: "Leverage real-time, customizable reports to gain valuable insights into sales, stock turnover, and user activities.",
            img: tm, // Reused image from the previous features array
            width: "65px" // Reused width from the previous features array
        },
        {
            key: 5,
            heading: "Multi-Location Support",
            desc: "Manage multiple stores from a central platform, transfer stock between locations, and monitor regional inventory needs.",
            img: ips, // Reused image from the previous features array
            width: "65px" // Reused width from the previous features array
        },
        {
            key: 6,
            heading: "Seamless ERP Integration",
            desc: "Sync data across your systems automatically, reducing manual data entry and enhancing operational efficiency.",
            img: it, // Reused image from the previous features array
            width: "63px" // Reused width from the previous features array
        }
    ];





    const benefits = [
        {
            key: 1,
            heading: "Operational Efficiency",
            desc: "Reduce manual errors, accelerate processes, and free up resources for strategic tasks.",
            img: b1,
        },
        {
            key: 2,
            heading: "Real-Time Insights",
            desc: "Get instant visibility into inventory, store performance, and user activity to make faster decisions.",
            img: b2,
        },
        {
            key: 3,
            heading: "Cost Optimization",
            desc: "Automate restocking and inventory updates to minimize costs, prevent overstocking, and boost profit margins.",
            img: b3,

        },
        {
            key: 4,
            heading: "Scalability",
            desc: "Easily manage multiple locations as your business grows with customizable configurations and consistent performance.",
            img: b4,
        },
        {
            key: 5,
            heading: "Improved Inventory Control",
            desc: "Accurate, automated inventory management ensures real-time stock updates, enhancing the customer experience.",
            img: b5,
        },
        {
            key: 6,
            heading: "Seamless Integration",
            desc: "Integrate with ERP systems to eliminate manual entry and ensure smooth data flow across functions.",
            img: b1,
        },
        {
            key: 7,
            heading: "Enhanced User and Store Management",
            desc: "Track store performance and employee roles efficiently with real-time insights to improve customer service.",
            img: b2,
        }
    ];


    const query = [
        {
          key: 1,
          question: "Q : How does the User and Store Inventory Management Portal streamline inventory management?",
          answer: "A : The portal offers real-time inventory updates, automates restocking, and provides centralized visibility of inventory across multiple store locations."
        },
        {
          key: 2,
          question: "Q : Does the system allow management of multiple store locations?",
          answer: "A : Yes, businesses can manage multiple stores from a single platform, transferring stock between locations and tracking regional inventory needs."
        },
        {
          key: 3,
          question: "Q : How does the portal help in tracking store performance?",
          answer: "A : It provides real-time reports on sales, stock turnover, and user activity, giving businesses the insights needed to optimize operations and boost performance."
        },
        {
          key: 4,
          question: "Q : Can I integrate the system with other ERP modules?",
          answer: "A : Yes, the portal seamlessly integrates with other ERP systems, reducing manual data entry and ensuring smooth data flow across functions."
        },
        {
          key: 5,
          question: "Q : How does the portal help reduce inventory costs?",
          answer: "A : The portal automates inventory updates, prevents overstocking, and optimizes restocking processes, reducing unnecessary costs and improving profit margins."
        }
      ];
      








 





    return (
        <>



            <section>
                <div className={`${style.section1} insidePageUpperSection`}>
                    <div style={{ width: "33%" }}>
                        <div className={`${style.section1Heading} font4`}>
                            <span style={{ color: "#012060" }}>USER STORE &</span>
                            <span style={{ color: "#01B0F1", textAlign: "center" }} className="blueTextGlobalClass"> INVENTORY</span>
                        </div>
                    </div>

                    <div className={style.section1ImgBox}>

                    </div>
                </div>

            </section>


            <section style={{ backgroundColor: "#f5f5f5" }}>
                <div className={`${style.section2} font4 globalSectionSize`}>

                    <div className={style.section2IconAndName}>
                        <div className={`${style.section2Icon}`}>
                            <img style={{ width: "100%" }} src={icon1} alt="" />
                        </div>

                        <div className={`${style.iconName} `}>

                            <div> Effortless</div>
                            <div> Operations</div>
                        </div>
                    </div>



                    <div className={style.section2IconAndName}>

                        <div className={`${style.section2Icon}`}>
                            <img style={{ width: "100%" }} src={icon2} alt="" />
                        </div>

                        <div className={`${style.iconName} `}>



                            <div> Personalized</div>
                            <div>Experience</div>

                        </div>
                    </div>



                    <div className={style.section2IconAndName}>

                        <div className={`${style.section2Icon}`}>
                            <img style={{ width: "100%" }} src={icon3} alt="" />
                        </div>

                        <div className={`${style.iconName}`}>


                            <div>
                                Smart
                            </div>

                            <div>
                                Insights
                            </div>
                        </div>

                    </div>



                </div>
            </section>



            <section>

                <div className={`${style.section3}`}>



                    <div className={`${style.blueBoxSetion3}`}>

                        <div className={`${style.laptopImgSection3}`}>
                            <div className={`${style.laptopImgBox}`} >
                                <img style={{ width: "100%" }} src={laptop} alt="" />
                            </div>
                        </div>


                        <div className={`${style.section3Para} font4`}>
                            <div className={`${style.paragraph}`}>

                                The User and Store Inventory Management Portal simplifies the management of users who place requests to stores for issuing raw materials, store operator supplies the material as per user request across locations. It enhances visibility, automates tracking, and optimizes performance, helping businesses reduce costs and improve efficiency.

                            </div>

                        </div>

                        {/* <div style={{overflow : "hidden"}} >
            <div className={`${style.section3Spiral}`}  >
                <img style={{width : "100%" }} src={spiral} alt="" />
            </div>
        </div> */}

                    </div>

                </div>
            </section>





            <section >
                <div className={`${style.section4} globalSectionSize`}>

                    <div className={`${style.section4heading} font4`}>Key Features</div>

                    <div className={`${style.featureContainer}`}>

                        {features.map((item) =>
                        (
                            <div key={item.key} className={`${style.featureInnerBox} font4`}>

                                <div className={`${style.headingAndIconFeatures}`}>

                                    <div style={{ width: item.width }}>
                                        <img style={{ width: "100%" }} src={item.img} alt="" />
                                    </div>

                                    <div className={`${style.featureHeading}`}>
                                        <div>
                                            {item.heading}
                                        </div>

                                        <div>
                                            {item.heading2}
                                        </div>

                                    </div>

                                </div>

                                <div className={`${style.featureDesc}`}>
                                    {item.desc}
                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>

            <section className={`${style.requestDemoBtn}`}>

                <div style={{ display: "flex", justifyContent: "center" }} className="globalSectionSize">
                    <div className={`${style.demoButton} font1`}>
                        <div > Request a Demo </div>
                        <div className={`${style.demoArrowButton}`}> <FaArrowRightLong /></div>
                    </div>

                </div>

            </section>



            <section style={{ background: "#f5f5f5" }} >
                <div className={`${style.section5} font4 globalSectionSize`}>


                    <div className={`${style.section5heading} font4`}>Benefits</div>
                    {benefits.map((item, index) =>
                    (

                        index % 2 === 0 ? (<div className='GlobalBenefitBox1'>


                            <div style={{ width: "25%" }}>
                                <img style={{ width: "100%" }} src={item.img} alt="" />
                            </div>

                            <div className='GlobalBenefitTextBox' >
                                <div className={`${style.innerHeadingBenifit}`}>{item.heading}</div>
                                <div className={`${style.innerDescBenifit}`}>{item.desc}</div>
                            </div>


                        </div>) : (<div className='GlobalBenefitBox2'>


                            <div style={{ width: "25%" }}>
                                <img style={{ width: "100%" }} src={item.img} alt="" />
                            </div>

                            <div className='GlobalBenefitTextBox' >
                                <div className={`${style.innerHeadingBenifit}`}>{item.heading}</div>
                                <div className={`${style.innerDescBenifit}`}>{item.desc}</div>
                            </div>


                        </div>)


                    ))}

                </div>
            </section>



            <section >
                <div className={`${style.FAQsection} globalSectionSize font4`}>
                    <div className={`${style.FAQHeading}`}>Frequently Asked Questions</div>


                    <div className={style.FAQContainer}>
                        {query.map((item) => (
                            <Accordion key={item.key} question={item.question} answer={item.answer} />
                        ))}
                    </div>

                </div>
            </section>


            <div >
                <Footer3 />

            </div>

        </>
    )
}
