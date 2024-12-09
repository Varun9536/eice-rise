import styles from "./Hospitality.module.css"

import laptop from "../../assets/Hospitality/laptoplatest.webp"
import { Link } from "react-router-dom"

import { useState, useEffect } from "react"

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

import vimg from "../../assets/insidePages/vimg.webp"




import c3 from "../../assets/Hospitality/customer/c1.png"
import c2 from "../../assets/Hospitality/customer/c2.png"
import c1 from "../../assets/Hospitality/customer/c3.png"


import s1 from "../../assets/Hospitality/story/s1.webp"
import s2 from "../../assets/Hospitality/story/s2.webp"
import s3 from "../../assets/Hospitality/story/s3.webp"


import insight1 from "../../assets/Hospitality/insights/01.webp"
import insight2 from "../../assets/Hospitality/insights/02.webp"
import insight3 from "../../assets/Hospitality/insights/03.webp"


import tata from "../../assets/Hospitality/clients/tata.png"
import nrf from "../../assets/Hospitality/clients/nrf.png"
import indOil from "../../assets/Hospitality/clients/indOil.png"
import pg from "../../assets/Hospitality/clients/pg.png"
import slb from "../../assets/Hospitality/clients/slb.png"
import salesvu from "../../assets/Hospitality/clients/salesvu.png"


import clientHeadIcon from "../../assets/Hospitality/customer/subh.png"


import h1 from "../../assets/Hospitality/headIcon/h1.png"
import h2 from "../../assets/Hospitality/headIcon/h2.png"


import { FaArrowRightLong } from "react-icons/fa6";
import Footer from "../../Components/Footer/Footer"




export default function HospitalityPage() {




    const [currentIndex, setCurrentIndex] = useState(0);
    const [insightsIndex, setInsightsIndex] = useState(0);
    const [feedbackIndex, setFeedbackIndex] = useState(0);



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



    const clientLogo = [

        {
            logo: tata
        },

        {
            logo: pg
        },

        {
            logo: slb
        },

        {
            logo: salesvu
        },

        {
            logo: indOil
        },

        {
            logo: nrf
        }
    ]


    const feedback = [
        {
            img: c1,
            position: "Operations Manager",
            company: ", LuxeStay Hotels",
            heading: "Transformative Technology Partner",
            para: (<span> EICE Rise has <span style={{ fontWeight: "bold" }}>completely transformed</span>  our operations. Their cloud ERP <span style={{ fontWeight: "bold" }}>seamlessly integrates</span> seamlessly integrates all aspects of our hotel, from reservations to dining, improving efficiency and enhancing our guest experience. We couldn’t ask for a better technology partner.</span>),
            // para: " EICE Rise has completely transformed our operations. Their cloud ERP seamlessly integrates all aspects of our hotel, from reservations to dining, improving efficiency and enhancing our guest experience. We couldn’t ask for a better technology partner.",
            key: 1

        },

        {
            img: c2,
            position: " General Manager ",
            company: ", Serenity Resorts",
            heading: "Exceptional Support & Innovation",
            para: (<span>The <span style={{ fontWeight: "bold" }}>intuitive modules</span>  offered by EICE Rise have simplified our front desk and housekeeping operations. <span style={{ fontWeight: "bold" }} >Their team’s support and innovative approach are unmatched. </span> We’ve seen remarkable growth since implementing their solutions.</span>),
            key: 2

        },

        {
            img: c3,
            position: " Director of Operations",
            company: ", Gourmet Suites",
            heading: "Elevated, Efficiency Guaranteed",
            para: (<span>Thanks to EICE Rise, <span style={{ fontWeight: "bold" }}>we’ve streamlined processes</span>  like banquet management and inventory control. The centralized platform has <span style={{ fontWeight: "bold" }}>saved us time</span>  and significantly improved <span style={{ fontWeight: "bold" }} > guest satisfaction.</span> </span>),
            key: 3

        }
    ]


    const stories = [
        {
            img: s1,
            heading: " Seamless Operations at LuxeStay Hotels",
            margin: "20px",
            para: "How EICE Rise streamlined front desk, housekeeping, and POS systems, boosting operational efficiency by 40%. "
        },

        {
            img: s2,
            heading: "Driving Guest Satisfaction for Serenity Resorts",
            para: "Enhanced guest experiences through AI-driven personalization and integrated feedback systems. ",
            margin: "20px"
        },

        {
            img: s3,
            heading: " Expanding Global Reach with Gourmet Suites ",
            para: " Scaling operations across multiple properties with centralized data and real-time insights. ",
            margin: "50px"
        }

    ]


    const insights = [

        {
            img: insight1,
            heading: "Guest Loyalty (Personalization) ",

            // para: "Customized experiences are becoming the gold standard in hospitality. 71% of travelers prefer personalized services, making tech-driven solutions like AI and guest data analytics essential for success. "

            para: (<span>Customized experiences are becoming the gold standard in hospitality. 71% of travelers prefer personalized services, making tech-driven solutions like AI and guest data analytics essential for success. </span>)
        },

        {
            img: insight2,
            heading: "The Rise of Contactless Technology ",
            para: "From mobile check-ins to digital room keys, 85% of hotels now prioritize contactless solutions to enhance convenience and safety for their guests. "

        },

        {
            img: insight3,
            heading: "AI-Powered Guest Experiences:",
            para: "Chatbots and virtual concierges powered by AI are revolutionizing guest services, reducing response times and increasing satisfaction "
        }

    ]


    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
    //     }, 3000);

    //     return () => clearInterval(interval);
    // }, [stories.length]);


    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setInsightsIndex((prevIndex) => (prevIndex + 1) % insights.length);
    //     }, 3000);

    //     return () => clearInterval(interval);
    // }, [insights.length]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setFeedbackIndex((prevIndex) => (prevIndex + 1) % feedback.length);
    //     }, 3000);

    //     return () => clearInterval(interval);
    // }, [feedback.length]);



    return (
        <>

            {/* section1 */}
            <section className={styles.section1}>

                <div className={styles.laptopImg}>
                    <img className={`${styles.laptopImgDimension}`} src={laptop} alt="" />
                </div>

                <div className={styles.textBox}>
                    <div className={`${styles.text1}  `}>
                        <span className="font2" >Flexible, Modular Solutions</span> <span style={{ fontWeight: "600" }} className="font1">tailored to your business needs</span>
                    </div>

                    <p className={`${styles.text2} font1`}>
                        EICE Rise ERP simplifies hospitality operations by uniting front desk, housekeeping, dining, and finance into a single, efficient platform for streamlined management and enhanced guest experiences.
                    </p>

                    <div className={`${styles.text3} font1`}>



                        <div className={`${styles.demoButton}`}>
                            <div> Request a Demo </div>
                            <div className={`${styles.demoArrowButton}`}> <FaArrowRightLong /></div>
                        </div>



                        {/* <button className={` ${ styles.requestDemoBtn } font1`}>  Request a Demo    </button> 
                        <div className={` ${ styles.requestDemoBtn } font1`} ><FaArrowRightLong  /></div> */}

                    </div>

                </div>

            </section>

            {/* section2 */}

            <section className={`${styles.section2} `}>


                <div className={`${styles.section2Heading} font3 globalSectionSize`}>Our <span className={` blueTextGlobalClass font2`} > End to End </span>  Technology Solution</div>



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


            {/* section3 */}


            <section className={`${styles.section3} globalSectionSize`}>

                <div className={`${styles.section3Heading} font3`}>With deep expertise in <span className={` blueTextGlobalClass font2`}>Hospitality Technology</span> , we have
                    perfected the art of delivering efficient, scalable, and tailored
                    tech solutions for the industry</div>


                <p className={`${styles.section3Para} font1`} >With a deep understanding of the hospitality industry's unique needs, we deliver cutting-edge software solutions tailored for hotels, restaurants, and event spaces. From full-stack cloud ERP systems to focused modules for specific operations, our tools enhance efficiency and elevate guest experiences across wellness, leisure, and meetings.</p>

                
                <div className={`${styles.section3Video}`} >
                    <img style={{ width: "100%" }} loading="lazy" src={vimg} alt="video" />
                </div>



                <div>
                    <div className={`${styles.videoImgBox}`}>
                        
                    </div>
                </div>



            </section>


            {/* section4 */}





            <section className={`${styles.section4} globalSectionSize`}>

                <div className={`${styles.section4Heading}`}>
                    <span className={` blueTextGlobalClass font2`}>Trusted</span><span className="font3"> by Brands around the World</span>
                </div>
            </section>


            <div className={styles.clientSection} >
                <div className={`${styles.clientLogoBox} globalSectionSize`}>
                    {/* <img style={{ width: "100%" }} src={client} alt="" /> */}
                    {clientLogo.map((item) =>
                    (
                        <div className={`${styles.clinetLogoSize}`} >
                            <img style={{ width: "100%" }} src={item.logo} alt="" />
                        </div>

                    ))}
                </div>
            </div>









            {/* section5 */}


            <div className={`${styles.reviewSection}`}>
                <section className={`${styles.section5} globalSectionSize`}>

                    <div className={`${styles.section5Heading} font1`}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0px 20px" }}>
                            <div style={{ width: "55px", paddingBottom: "14px" }}>
                                <img style={{ width: "100%" }} src={clientHeadIcon} alt="" />
                            </div>

                            <div className="font3">
                                What our <span className={` blueTextGlobalClass font2`}>Customers</span> say about us ?
                            </div>
                        </div>
                    </div>






                    <div className={`${styles.section5Subheading} font1`}>
                        <span style={{ fontWeight: "600" }} >"Proven Excellence:</span> Trusted by Leading  <span className={` blueTextGlobalClass font2`}>Hotels, Resorts, and Restaurants</span>."
                    </div>



                    <main className={`${styles.feedBack}`}>
                        {feedback.map((item) =>
                        (
                            <article key={item.key} className={`${styles.feedBackArticleBox} font1`} >

                                <figure >

                                    <div style={{ textAlign: "center" }}  >
                                        <img style={{ width: "28%" }} src={item.img} alt="" />
                                    </div>

                                    <figcaption style={{ textAlign: "center" }} > <span style={{ fontWeight: "bold" }}>{item.position}</span> <span>{item.company}</span></figcaption>

                                </figure>
                                <div>
                                    {item.key === 2 ? (<div className={`${styles.cardBoxInnerHeading2} blueTextGlobalClass font3`} >"{item.heading}"</div>) : (<div className={`${styles.cardBoxInnerHeading} blueTextGlobalClass font3`} >"{item.heading}"</div>)}
                                </div>



                                <p style={{ textAlign: "center", lineHeight: "1.8rem" }}>{item.para}</p>

                            </article>
                        ))}
                    </main>


                </section>
            </div>



            <div className={`${styles.reviewSectionForPhone}`}>
                <section className={`${styles.section5} globalSectionSize`}>

                    <div className={`${styles.section5Heading} font1`}>
                        <div className={`${styles.section5HeadingAndIconBox}`} >

                            <div style={{ width: "40px", }}>
                                <img style={{ width: "100%" }} src={clientHeadIcon} alt="" />
                            </div>

                            <div style={{ textAlign: "left", paddingLeft: "20px" }} className="font3">
                                What our <span className={` blueTextGlobalClass font2`}>Customers</span> say about us ?
                            </div>
                        </div>
                    </div>






                    <div className={`${styles.section5Subheading} font1`}>
                        <span style={{ fontWeight: "600" }} >"Proven Excellence:</span> Trusted by Leading  <span className={` blueTextGlobalClass font2`}>Hotels, Resorts, and Restaurants</span>."
                    </div>



                    <main className={`${styles.feedBack}`}>


                        <article key={feedback[feedbackIndex].key} className={`${styles.feedBackArticleBox} font1`} >

                            <figure >

                                <div style={{ textAlign: "center" }}  >
                                    <img style={{ width: "28%" }} src={feedback[feedbackIndex].img} alt="" />
                                </div>

                                <figcaption style={{ textAlign: "center" }} > <span style={{ fontWeight: "bold" }}>{feedback[feedbackIndex].position}</span> <span>{feedback[feedbackIndex].company}</span></figcaption>

                            </figure>
                            <div>
                                {feedback[feedbackIndex].key === 2 ? (<div className={`${styles.cardBoxInnerHeading2} blueTextGlobalClass font3`} >"{feedback[feedbackIndex].heading}"</div>) : (<div className={`${styles.cardBoxInnerHeading} blueTextGlobalClass font3`} >"{feedback[feedbackIndex].heading}"</div>)}
                            </div>



                            <p style={{ textAlign: "center", lineHeight: "1.8rem" }}>{feedback[feedbackIndex].para}</p>

                        </article>

                    </main>


                    <div className="indicators">
                        {feedback.map((_, index) => (
                            <span
                                key={index}
                                className={`indicator ${feedbackIndex === index ? 'active' : ''}`}
                                onClick={() => setFeedbackIndex(index)}
                            ></span>
                        ))}
                    </div>


                </section>
            </div>








            {/* section6 */}
            <section className={`${styles.section6} globalSectionSize`}>
                <div className={`${styles.section6Heading} font1`}>






                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0px 20px" }}>
                        <div style={{ width: "50px", paddingTop: "12px" }}>
                            <img style={{ width: "100%" }} src={h2} alt="" />
                        </div>

                        <div className="font3">
                            Real  <span className={` blueTextGlobalClass font2`}>Stories</span> , Real <span className={` blueTextGlobalClass font2`}>Impact</span>
                        </div>
                    </div>



                </div>


                <div className={`${styles.storySection} font1`}>

                    {stories.map((item) =>
                    (
                        <div className={`${styles.storyBox}`}>

                            <div>
                                <img style={{ width: "100%" }} src={item.img} alt="storyimg" />
                            </div>

                            <div className={`${styles.cardBoxStoryInnerHeading} blueTextGlobalClass font1`}>
                                {item.heading}
                            </div>

                            <p style={{ lineHeight: "1.8rem", marginBottom: item.margin }} >{item.para}</p>

                            <div className={`${styles.viewMoreBtn} font1`} style={{ textAlign: "center" }}>
                                View More
                            </div>

                        </div>

                    ))}

                </div>


            </section>


            <section className={`${styles.section6ForPhone} globalSectionSize`}>
                <div className={`${styles.section6Heading} font1`}>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0px 20px" }}>
                        <div style={{ width: "50px", paddingTop: "12px" }}>
                            <img style={{ width: "100%" }} src={h2} alt="" />
                        </div>

                        <div className="font3">
                            Real  <span className={` blueTextGlobalClass font2`}>Stories</span> , Real <span className={` blueTextGlobalClass font2`}>Impact</span>
                        </div>
                    </div>
                </div>


                <div className={`${styles.storySection} font1`}>


                    <div className={`${styles.storyBox}`}>

                        <div>
                            <img style={{ width: "100%" }} src={stories[currentIndex].img} alt="storyimg" />
                        </div>

                        <div className={`${styles.cardBoxStoryInnerHeading} blueTextGlobalClass font1`}>
                            {stories[currentIndex].heading}
                        </div>

                        <p style={{ lineHeight: "1.8rem", marginBottom: stories[currentIndex].margin }} >{stories[currentIndex].para}</p>

                        <div className={`${styles.viewMoreBtn} font1`} style={{ textAlign: "center" }}>
                            View More
                        </div>

                    </div>
                </div>

                <div className="indicators">
                    {stories.map((_, index) => (
                        <span
                            key={index}
                            className={`indicator ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>


            </section>







            {/* section7 */}
            <section className={`${styles.section7} globalSectionSize`}>


                <div className={`${styles.section7Heading} font1`}>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0px 20px" }}>
                        <div style={{ width: "50px" }}>
                            <img style={{ width: "100%" }} src={h1} alt="" />
                        </div>

                        <div className="font3">
                            Some Interesting <span className={` blueTextGlobalClass font2`} >Insights</span> from the Hospitality Industry
                        </div>
                    </div>



                </div>

                <div className={`${styles.insightSection} font1`}>

                    {insights.map((item) => (
                        <div className={`${styles.insightBox}`}>

                            <div>
                                <img style={{ width: "100%" }} src={item.img} alt="" />
                            </div>

                            <div className={`${styles.cardBoxInsightsInnerHeading} blueTextGlobalClass font1`}>{item.heading}</div>
                            <p style={{ lineHeight: "1.8rem" }}  >{item.para}</p>
                        </div>
                    ))}
                </div>


            </section>

            <section className={`${styles.section7ForPhone} globalSectionSize`}>


                <div className={`${styles.section7Heading} font1`}>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0px 20px" }}>
                        <div style={{ width: "50px" }}>
                            <img style={{ width: "100%" }} src={h1} alt="" />
                        </div>

                        <div className="font3">
                            Some Interesting <span className={` blueTextGlobalClass font2`} >Insights</span> from the Hospitality Industry
                        </div>
                    </div>



                </div>

                <div className={`${styles.insightSection} font1`}>


                    <div className={`${styles.insightBox}`}>

                        <div>
                            <img style={{ width: "100%" }} src={insights[insightsIndex].img} alt="" />
                        </div>

                        <div className={`${styles.cardBoxInsightsInnerHeading} blueTextGlobalClass font1`}>{insights[insightsIndex].heading}</div>
                        <p style={{ lineHeight: "1.8rem" }}  >{insights[insightsIndex].para}</p>
                    </div>

                </div>

                <div className="indicators">
                    {insights.map((_, index) => (
                        <span
                            key={index}
                            className={`indicator ${insightsIndex === index ? 'active' : ''}`}
                            onClick={() => setInsightsIndex(index)}
                        ></span>
                    ))}
                </div>

            </section>

            <div >

                <Footer />
            </div>



        </>
    )
}
