import styles from "./durgabari.module.css"
import laptop from "../../../assets/caseStudy/durga.webp"


import { Link } from "react-router-dom"


import account from "../../../assets/Hospitality/allPageIcon/Account.png"
import pos from "../../../assets/Hospitality/allPageIcon/POS.png"
import banquet from "../../../assets/Hospitality/allPageIcon/Banquet.png"
import emp from "../../../assets/Hospitality/allPageIcon/Employee.png"
import food from "../../../assets/Hospitality/allPageIcon/Food.png"
import inentry from "../../../assets/Hospitality/allPageIcon/store.png"
import member from "../../../assets/Hospitality/allPageIcon/Member.png"
import pay from "../../../assets/Hospitality/allPageIcon/PAyscale.png"
import room from "../../../assets/Hospitality/allPageIcon/Room.png"
import vendor from "../../../assets/Hospitality/allPageIcon/purchase.png"

import FooterLower from "../../../Components/Footer/FooterLower"

export default function Durgabari() {


    const challenges = [
        { id: 1, key: "Geographical Dispersion of Members", value: "HDBS needed to enhance accessibility for its community members across the globe while maintaining their cultural essence." },
        { id: 2, key: "Complex Event and Resource Management", value: "The society faced inefficiencies in organizing cultural events, religious ceremonies, and venue reservations." },
        { id: 3, key: "Fragmented Member Engagement", value: "Members lacked a unified platform to interact with the organization, access services, or stay updated on activities." },
        { id: 4, key: "Manual Administrative Processes", value: "From managing memberships to processing event registrations and donations, manual workflows led to delays and errors." }
    ];




    // const roleHighlights = [
    //     {
    //         key: "Adaptive UI",
    //         value: "Utilized fragments for a responsive layout that adapts to both phones and tablets."
    //     },

    //     {
    //         key: "Efficient Workflow",
    //         value: "Enabled side-by-side views on tablets, optimizing the user's workflow while maintaining simplicity on mobile"
    //     },

    //     {
    //         key: "Efficient Workflow",
    //         value: "Avoided the need for creating separate layouts for different devices, ensuring a more streamlined development process and easier maintenance."
    //     }
    // ]


    const empoweringList = [
        {
            id: "e1",
            key: "Website Development",
            value: "We created a modern, user-friendly website that serves as a central hub for all HDBS activities, ensuring seamless access to information and updates."
        },
        {
            id: "e2",
            key: "E-Puja Platform",
            value: "Our team developed an innovative online service, enabling devotees to participate in religious ceremonies virtually, fostering inclusivity for community members worldwide."
        },
        {
            id: "e3",
            key: "Member Portal",
            value: "We designed an integrated member portal where users can manage their profiles, book venues, recharge smart cards, and handle POS bookings with ease, enhancing convenience and engagement."
        },
        {
            id: "e4",
            key: "Event and Resource Management",
            value: "We implemented systems for online event registrations, donations, and auditorium reservations, streamlining operational workflows and improving event participation."
        },
        {
            id: "e5",
            key: "Membership Management System",
            value: "To support HDBS's growing community, we built a robust membership management solution for smooth renewal processes, payment handling, and member communications."
        }
    ];

    const services = [
        {
            serviceName: "ROOM BOOKING",
            icon: room,
            path: "/room-booking",
            key: 1
        },

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

        {

            serviceName: (<span style={{ padding: "0px 3px" }}>MEMBER SUITE</span>),
            icon: member,
            path: "/member-suite",
            key: 4
        },

        {
            serviceName: "ACCOUNT & FINANCE",
            icon: account,
            path: "/account-finance",
            key: 5
        },

        // {
        //     serviceName: "EMPLOYEE SUITE",
        //     icon: emp,
        //     path: "/employee-suite",
        //     key: 6
        // },

        // {
        //     serviceName: "PAYROLL",
        //     icon: pay,
        //     path: "/payroll",
        //     key: 7
        // },

        // {
        //     serviceName: "USER STORE & INVENTORY",
        //     icon: inentry,
        //     path: "/userstore-inventry",
        //     key: 8
        // },

        // {
        //     serviceName: "PURCHASE & VENDOR PORTAL",
        //     icon: vendor,
        //     path: "/purchase-vendor",
        //     key: 9
        // },

        // {
        //     serviceName: "FOOD & BEVERAGE COST ANALYSIS",
        //     icon: food,
        //     path: "/food-cost",
        //     key: 10
        // }
    ]


    const value = [
        {
            id: 1,
            key: "Enhanced Accessibility and Inclusivity",
            value: "Through the member portal and e-Puja platform, members worldwide could participate in religious ceremonies, stay updated on events, and contribute to the community.",
        },
        {
            id: 2,
            key: "Operational Efficiency",
            value: "Automated processes for venue reservations, event registrations, and membership renewals reduced administrative burdens, allowing staff to focus on community enrichment.",
        },
        {
            id: 3,
            key: "Streamlined Financial Operations",
            value: "The integration of POS and Accounts & Finance modules improved donation management, facilitated secure transactions, and provided real-time insights into financial health.",
        },
        {
            id: 4,
            key: "Improved Member Engagement",
            value: "The member portal became a one-stop solution for members, enabling them to easily manage bookings, participate in events, and interact with the society.",
        },
        {
            id: 5,
            key: "Preservation of Cultural Values",
            value: "HDBS seamlessly blended its cultural and religious heritage into the digital platform, ensuring that the essence of their traditions remained intact while embracing modern technology.",
        },
        {
            id: 6,
            key: "Global Reach and Community Building",
            value: "The platform fostered stronger connections within the HDBS community, bridging geographical gaps and ensuring every member felt included and valued.",
        },
    ];


    const valueToClient = [
        {
            id: "v1",
            key: "Enhanced Accessibility",
            value: "The new platform allowed members to access religious services, event registrations, and organizational updates from anywhere, fostering a stronger connection with the community."
        },
        {
            id: "v6",
            key: "Streamlined Operations",
            value: "With automated processes for venue reservations, event management, and membership renewals, HDBS significantly reduced administrative burdens and improved efficiency."
        },
        {
            id: "v2",
            key: "Improved Member Engagement",
            value: "The integrated member portal enabled seamless interaction with HDBS services, empowering members to manage bookings, recharge smart cards, and participate in events with ease."
        },
        {
            id: "v3",
            key: "Global Reach",
            value: "The introduction of the e-Puja platform allowed devotees worldwide to participate in religious ceremonies, ensuring inclusivity and preserving cultural traditions across distances."
        },
        {
            id: "v4",
            key: "Increased Revenue Opportunities",
            value: "By enabling online donations, event registrations, and auditorium bookings, the platform opened new avenues for fundraising and resource optimization."
        },
        {
            id: "v5",
            key: "Future-Ready Digital Presence",
            value: "The modern, scalable platform positions HDBS to adapt and grow with changing community needs, ensuring long-term sustainability and relevance."
        }
    ];


    const help = [
        {
            id: 1,
            key: "Member Portal Integration",
            value1: "Provided a centralized hub for members to manage their profiles, access religious services, and book venues or events.",
            value2: "Enabled features like smart card recharges and seamless POS transactions for donations and event payments.",
            value3: "Improved user engagement by offering easy access to organizational updates and activities.",
        },
        {
            id: 2,
            key: "Room Service Management",
            value1: "Streamlined the reservation process for religious and cultural venues.",
            value2: "Offered intuitive booking workflows, ensuring an organized and efficient system for managing room and resource allocation.",
        },
        {
            id: 3,
            key: "POS and Banquet Modules",
            value1: "Facilitated efficient financial transactions during events, including catering services and donation drives.",
            value2: "Improved the experience for members by offering seamless, secure, and quick payment processing during community events.",
        },
        {
            id: 4,
            key: "Accounts & Finance",
            value1: "Centralized financial tracking for donations, event revenues, and operational expenses.",
            value2: "Enhanced transparency and enabled HDBS to maintain accurate records of its financial activities.",
        },
    ];




    return (
        <>

            <header className={`${styles.pageMainHeading}`}>

                <div>
                    <span className={`font2 blueTextGlobalClass `}>Club Suite</span><span className={"font1"}  >:  Empowering Community Operations</span>
                </div>

                <div className="font1" >

                    for <span className={`font2 blueTextGlobalClass `} > Houston Durga Bari Society</span> (HDBS)
                </div>



            </header>

            <header className={`${styles.pageMainHeadingPhone}`}>

                <div>
                    <span className={`font1 blueTextGlobalClass `}>Club Suite</span><span className={"font1"}  >:  Empowering Community Operations </span>

                    <span className="font1">for</span>   <span className={`font2 blueTextGlobalClass `} > Houston Durga Bari Society</span> <span>(HDBS)</span>
                </div>

                <div className="font1" >


                </div>

            </header>

            <section className={`${styles.briefDescSection}  `}>

                <div className={`${styles.imgAndDescBox} globalSectionSize `}>

                    <div className={`${styles.descImg}`}>
                        <img style={{ width: "100%" }} src={laptop} alt="brief description" />
                    </div>

                    <div className={`${styles.briefDescBox}`}>

                        <div className={`${styles.briefDescHeading} font3`}>
                            Overview
                        </div>

                        <div className={`${styles.briefPara} font1`}>
                            The Houston Durga Bari Society (HDBS) sought a transformative digital solution to overcome the challenges of managing its diverse operations and engaging a geographically dispersed community. EICE Technology implemented the Club Suite, a comprehensive set of integrated modules, to address these needs. By leveraging the suite's capabilities, HDBS was able to centralize its operations, foster stronger connections with its members, and streamline administrative processes.
                        </div>

                    </div>

                </div>

            </section>



            <section className={`${styles.briefDescSectionPhone}  `}>

                <div className={`${styles.descImgPhone}`}>
                    <img style={{ width: "100%" }} src={laptop} alt="brief description" />
                </div>

            </section>


            <div className={`${styles.briefDescBoxPhone}`}>

                <div className={`${styles.briefDescHeadingPhone} font3`}>
                    Overview
                </div>

                <div className={`${styles.briefParaPhone} font1`}>
                    The Houston Durga Bari Society (HDBS) sought a transformative digital solution to overcome the challenges of managing its diverse operations and engaging a geographically dispersed community. EICE Technology implemented the Club Suite, a comprehensive set of integrated modules, to address these needs. By leveraging the suite's capabilities, HDBS was able to centralize its operations, foster stronger connections with its members, and streamline administrative processes.
                </div>

            </div>


            <section className={`${styles.section2} `}>



                <div className={`${styles.moduleboxAndHeading}  globalSectionSize `} >

                    <div className={`${styles.moduleIncludedHeading} font4`}>The Enterprise Suite included the following modules:</div>

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


            <section className={`${styles.challengeSection} globalSectionSize `} >

                <div className={`${styles.sectionHeading} font3 `}>
                    The Challenges Addressed with the Club Suite
                </div>

                <div className={`${styles.informationBox} font1 `}>

                    {/* <div className={`${styles.statement1}`} >
                        The Houston Durga Bari Society (HDBS) sought a transformative digital solution to overcome the challenges of managing its diverse operations and engaging a geographically dispersed community. EICE Technology implemented the Club Suite, a comprehensive set of integrated modules, to address these needs. By leveraging the suite's capabilities, HDBS was able to centralize its operations, foster stronger connections with its members, and streamline administrative processes.

                    </div> */}

                    <div className={`${styles.statement2}`} >
                        <ul>

                            {challenges.map((item) =>
                            (
                                <li>
                                    <strong className={`${styles.listKey}`}>{item.key}:</strong>
                                    <span className={`${styles.listValue}`}> {item.value} </span>
                                </li>
                            ))}
                        </ul>



                    </div>

                    {/* <div className={`${styles.statement3}`} >
                        The challenge was to maintain a consistent user interface across devices without having to build entirely separate layouts for each device type.
                    </div> */}

                </div>

            </section>


            {/* <section className={`${styles.ourRoleSection} globalSectionSize `}>

                <div className={`${styles.sectionHeading} font3`}>
                    Our Role
                </div>

                <div className={`${styles.roleDesc} font1 `}>
                    At EICE Technology, we partnered with the Houston Durga Bari Society (HDBS) to bring their vision of a digitally connected and efficiently managed community to life. By leveraging our expertise in web development, digital solutions, and user-centric design, we delivered a comprehensive platform tailored to meet HDBS's unique needs
                </div>

            </section> */}


            <section className={`${styles.challengeSection} globalSectionSize `} >

                <div className={`${styles.sectionHeading} font3 `}>
                    How the Club Suite Helped ?
                </div>

                <div className={`${styles.informationBox} font1 `}>

                    {/* <div className={`${styles.statement1}`} >
                        Challenges with User Interaction in Multi-User Software Systems




                    </div> */}

                    <div className={`${styles.statement2}`} >


                        {help.map((item, index) =>
                        (
                          
                                <div className={`${styles.helpBoxOfList}`}>
                                <div className="font3 blueTextGlobalClass">
                                    <span>{index + 1}. </span>
                                    {item.key}:
                                </div>

                                <div className={`${styles.value}`} >
                                    <ul>
                                        <li >
                                            {item.value1}

                                        </li>
                                        {item.value2 && (<li>
                                            {item.value2}
                                        </li>)}

                                        {item.value3 && (<li>
                                            {item.value3}
                                        </li>)}

                                    </ul>
                                </div>

                                </div>






                          

                        ))}




                    </div>

                    {/* <div className={`${styles.statement3}`} >
                        The challenge was to maintain a consistent user interface across devices without having to build entirely separate layouts for each device type.
                    </div> */}

                </div>

            </section>

            <section className={`${styles.empoweringiListSection} globalSectionSize`}>

                <div className={`${styles.sectionHeading} font3`}>
                    Value Delivered to HBDS
                </div>

                <div className={`${styles.listBox} font1`} >
                    <ul>

                        {value.map((item) =>
                        (
                            <li key={item.id}>
                                <strong className={`${styles.listKey}`} >{item.key}:</strong>
                                <span className={`${styles.listValue}`} > {item.value} </span>
                            </li>
                        ))}
                    </ul>



                </div>

            </section>


            {/* <section className={`${styles.toolsAndTechSection} globalSectionSize`} >
                <div className={`${styles.sectionHeading} font3 `}>
                    Tools and Technology
                </div>

                <div className={`${styles.technology} font1 `}>

                    <div className={`${styles.technologyName}`}  >
                        Core PHP (MVC)
                    </div>

                    <div className={`${styles.technologyName}`}  >
                        HTML/CSS/JS
                    </div>



                    <div className={`${styles.technologyName}`}  >
                        MY-SQL
                    </div>

                    <div className={`${styles.technologyName}`}  >
                        Bootstrap
                    </div>

                    <div className={`${styles.technologyName}`}  >
                        jQuery

                    </div>

                </div>

            </section> */}


            {/* <section className={`${styles.valuesToClientSection} globalSectionSize `} >

                <div className={`${styles.sectionHeading} font3`}>

                    Value to Client
                </div>

                <div className={`${styles.highlightBox}`} >

                   

                    <div className={`${styles.highlightDesc} font4 `}>
                        Our digital solutions provided Houston Durga Bari Society (HDBS) with transformative benefits that enhanced their operational efficiency, expanded their reach, and elevated the overall member experience
                    </div>

                    <div className={`${styles.highlightsList} font4 `}>

                        <ul>
                            {valueToClient.map((item) =>
                            (
                                <li key={item.id}>
                                    <strong>{item.key}:</strong>
                                    <span> {item.value} </span>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>

                

            </section> */}


            <section className={`${styles.conclusionSection} globalSectionSize `} >

                <div className={`${styles.sectionHeading} font3`}>

                    Conclusion
                </div>


                <div className={`${styles.conclusionPara} font1`}>
                    {/* By implementing the Enterprise Suite, <span className="font2 blueTextGlobalClass">EICE Technology empowered IIC to overcome its operational challenges, enhance security, and foster seamless multi-user interactions</span> . The result was a scalable, efficient, and secure system that aligned with IIC's vision for the future. */}
                    The implementation of the <span className="font2 blueTextGlobalClass" >Club Suite was a pivotal moment for the Houston Durga Bari Society</span> . By addressing their operational challenges holistically, <span className="font2 blueTextGlobalClass" >EICE Technology enabled HDBS to embrace a future-ready, scalable platform</span>  that not only optimized their workflows but also reinforced their cultural and religious values across their global community
                </div>

            </section>

            <div>
                <FooterLower />
            </div>



        </>
    )
}
