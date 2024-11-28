import style from "./Styles/pos.module.css"


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

import b1 from "../../assets/insidePages/pos/posPage/benefit/b1.png"
import b2 from "../../assets/insidePages/pos/posPage/benefit/b2.png"
import b3 from "../../assets/insidePages/pos/posPage/benefit/b3.png"
import b4 from "../../assets/insidePages/pos/posPage/benefit/b4.png"
import b5 from "../../assets/insidePages/pos/posPage/benefit/b5.png"



import laptop from "../../assets/insidePages/pos/posPage/laptop.png"



import Footer2 from "../../Components/Footer/Footer2.jsx"

export default function Pos() {




    const features = [
        {
            key: 1,
            heading: "User-Friendly Interface",
            desc: "Enjoy an intuitive, tablet-based POS system that allows staff to quickly and efficiently manage orders, reducing wait times and improving service quality.",
            img: ufi
        },
        {
            key: 2,
            heading: "Real-Time Menu Management",
            desc: "Easily update the menu with daily specials, seasonal items, and pricing changes. Reflect these updates instantly across all devices to ensure consistent information.",
            img: rtmm
        },
        {
            key: 3,
            heading: "Order Customization",
            desc: "Enable guests to customize their orders with specific preferences, such as dietary restrictions or ingredient substitutions, ensuring a personalized dining experience.",
            img: oc
        },
        {
            key: 4,
            heading: "Table Management",
            desc: "Visually manage table assignments, seating, and reservations with a dynamic table layout. Optimize table turnover and seating arrangements for better service flow.",
            img: tm
        },
        {
            key: 5,
            heading: "Integrated Payment Solutions",
            desc: "Accept multiple payment methods, including credit/debit cards, UPI, mobile wallets, and contactless payments. Split bills or apply discounts seamlessly at checkout.",
            img: ips
        },
        {
            key: 6,
            heading: "Inventory Tracking",
            desc: "Automatically track ingredient usage and monitor stock levels in real time. Get low-stock alerts to ensure timely replenishment and avoid service disruptions.",
            img: it
        },
        {
            key: 7,
            heading: "Kitchen Display System (KDS) Integration",
            desc: "Orders are directly sent to the kitchen display system, streamlining communication between the wait staff and kitchen team for faster, error-free order preparation.",
            img: kds
        },
        {
            key: 8,
            heading: "Promotions and Loyalty Programs",
            desc: "Easily set up special offers, happy hours, and loyalty programs to engage customers and drive repeat business. Track customer preferences for targeted promotions.",
            img: plp
        },
        {
            key: 9,
            heading: "Real-Time Sales Reporting",
            desc: "Access detailed sales reports and analytics to gain insights into daily revenue, top-selling items, and customer preferences, helping you make informed business decisions.",
            img: rtsr
        }
    ];




    const benefits = [
        {
            key: 1,
            heading: "Enhanced Customer Satisfaction",
            desc: "Streamlines the ordering process with a user-friendly interface, reducing wait times and improving service quality, leading to higher customer satisfaction.",
            img: b1
        },
        {
            key: 2,
            heading: "Operational Efficiency",
            desc: "Real-time menu updates and automated order management significantly reduce manual work, ensuring smooth operations across all dining outlets.",
            img: b2
        },
        {
            key: 3,
            heading: "Personalized Dining Experience",
            desc: "Customizable orders allow guests to specify dietary restrictions or preferences, providing a personalized dining experience that boosts customer loyalty.",
            img: b3
        },
        {
            key: 4,
            heading: "Optimized Resource Utilization",
            desc: "Dynamic table management and real-time inventory tracking enable better management of seating arrangements, stock levels, and ingredient usage, optimizing resource utilization.",
            img: b4
        },

        {
            key: 5,
            heading: "Data-Driven Decision Making",
            desc: "Real-time sales reporting and analytics provide valuable insights into customer preferences, top-selling items, and daily performance, enabling data-driven business decisions",
            img: b5

        }
    ];








    const query = [
        {
            question: "How does the Dining (POS) module handle split bills or group payments?",
            answer: "The Dining (POS) module offers an intuitive split-billing feature, allowing guests to divide payments among multiple parties or payment methods seamlessly."
        },
        {
            question: "Can the module manage menu customization and promotions in real-time?",
            answer: "Absolutely. The system allows real-time updates to menus, pricing, and promotional offers, ensuring your dining services are always up-to-date and aligned with your marketing strategies."
        },
        {
            question: "Does the Dining (POS) module support table reservations and service tracking?",
            answer: "Yes, the module includes features for managing table reservations and tracking service status, helping staff deliver timely and personalized guest experiences."
        },
        {
            question: "What analytics and reporting capabilities does the Dining (POS) module offer?",
            answer: "The system provides detailed insights into sales trends, popular menu items, and customer preferences through customizable reports, empowering data-driven decision-making."
        }
    ];





    return (
        <>

            {/* <section>
                <div className={`${style.section1} insidePageUpperSection`}>
                    <div className={`${style.section1Haeding}`}>
                        DINNING POS
                    </div>
                    <div className={style.section1ImgBox}>

                    </div>
                </div>

            </section> */}

            <section>
                <div className={`${style.section1} insidePageUpperSection`}>
                    <div style={{ width: "33%" }}>
                        <div className={`${style.section1Heading} font4`}>
                            <span style={{ color: "012060" }}>DINNING</span>
                            <span style={{ color: "01B0F1" }} className="blueTextGlobalClass"> (POS)</span>
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

                                Our Room Booking module is a <strong className="font2">comprehensive solution</strong>  designed for the hospitality industry, integrating with EICE Rise ERP to simplify and streamline the booking process for <strong className="font2">Hotels, Resorts, Clubs and Institutions.</strong>  From standard rooms to luxury suites, this feature offers an intuitive, user-friendly interface for both guests and administrators, ensuring a smooth experience throughout the booking journey.
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
                <div className={`${style.section4}`}>

                    <div className={`${style.heading}`}>Key Features</div>

                    <div className={`${style.featureContainer}`}>

                        {features.map((item) =>
                        (
                            <div key={item.key} className={`${style.featureInnerBox}`}>
                                <div className={`${style.headingAndIconFeatures}`}>

                                    <div style={{ width: "20%" }}>
                                        <img style={{ width: "100%" }} src={item.img} alt="" />
                                    </div>

                                    <div>
                                        {item.heading}
                                    </div>

                                </div>

                                <div>
                                    {item.desc}
                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>


            <section >
                <div className={`${style.section5}`}>

                    <div className={`${style.benifitContainer}`}>

                        {benefits.map((item) => (
                            <div className={`${style.innerBenifitBox}`}>

                                <div>
                                    <img src={item.img} alt="" />
                                </div>

                                <div>
                                    <div>
                                        {item.heading}
                                    </div>
                                    <p>
                                        {item.desc}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>


            <section >
                <div className={`${style.FAQsection}`}>

                    <div className={`${style.FAQHeading}`}></div>

                    <div className={`${style.questionAndAnswerBox}`}>

                        {query.map((item) =>
                        (
                            <div>
                                <div>{item.question}</div>
                                <div>{item.answer}</div>
                            </div>

                        ))}

                    </div>

                </div>
            </section>






            <div >
                <Footer2 />

            </div>







        </>
    )
}
