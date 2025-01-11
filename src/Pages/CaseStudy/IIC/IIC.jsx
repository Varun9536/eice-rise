import styles from "./iic.module.css"
import laptop from "../../../assets/caseStudy/IIC.webp"

import FooterLower from "../../../Components/Footer/FooterLower"


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

import { useState, useEffect } from "react"


export default function IIC() {

    const [isPhone, setIsPhone] = useState(window.innerWidth <= 800);





    useEffect(() => {
        const handleResize = () => {
            setIsPhone(window.innerWidth <= 800); // Update based on screen size
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    // const challenges = [
    //     {
    //         id: 1,
    //         key: "User Access Control and Permissions",
    //         value: (<>

    //             <span> With multiple users, you need to ensure that the right users have access to the right parts of the software. Managing permissions, roles, and different user access levels can be complex.</span> <strong>Solution: </strong> <span>Role-Based Access Control (RBAC): Implement RBAC to manage user roles (admin, user, guest, etc.). Each role should have specific permissions for certain actions or data.</span>
    //             <strong> Granular Permissions: </strong> <span>For more complex systems, permissions can be based on individual data entities (e.g., only a user's data or specific features) rather than whole sections of the software. </span>

    //         </>)


    //     },
    //     {
    //         id: 2,
    //         key: "Understanding Client Requirements Vague Requirements",
    //         value: (<>
    //             <span> Clients may have unclear, incomplete, or unrealistic expectations. Translating their vision into specific, actionable requirements can be difficult.</span>
    //             <strong> Changing Requirements: </strong> <span> Clients often change their mind during the development process, which can lead to scope creep, delays, and budget overruns.</span>
    //         </>

    //         )
    //     },
    //     {
    //         id: 3,
    //         key: "Testing and Quality Assurance Bug Fixes and Testing Delays",
    //         value: (<>

    //             <span> Insufficient testing can lead to bugs or issues that are only discovered later in the development process, leading to delays and unexpected costs.</span>

    //             <strong> Client-Related Testing: </strong>
    //             <span> Sometimes clients want to perform their own testing, which can lead to misunderstandings or unrealistic expectations about the final product's behavior.</span>

    //         </>
    //         )
    //     },
    //     {
    //         id: 4,
    //         key: "Scope Creep Adding Features",
    //         value: (<>

    //             <span>
    //                 During the course of the project, clients may keep adding new features or change existing ones, which can significantly alter the scope of the project and lead to delays and budget issues.
    //             </span>

    //             <strong> Inadequate Documentation: </strong>
    //             <span> Without proper documentation, scope changes can cause confusion and lead to miscommunication regarding what was agreed upon initially.</span>

    //         </>)

    //     }
    // ];


    const challenges = [
        {
            key: "User Role Management",
            value1: "IIC required a system to define and manage permissions for various roles, including admin, user, and guest.",
            value2: "Ensuring secure access and organized data flow across user levels was critical."
        },
        {
            key: "Dynamic Requirements",
            value1: "The absence of clear initial requirements and frequent changes during the project led to scope creep and complexity."
        },
        {
            key: "Testing Delays",
            value1: "The need for iterative client-side testing introduced delays in identifying and resolving issues."
        },
        {
            key: "Operational Complexity",
            value1: "Managing employee data, financial workflows, and user interactions within a unified system required meticulous planning."
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

        {
            serviceName: "EMPLOYEE SUITE",
            icon: emp,
            path: "/employee-suite",
            key: 6
        },

        {
            serviceName: "PAYROLL",
            icon: pay,
            path: "/payroll",
            key: 7
        },

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

        {
            serviceName: "FOOD & BEVERAGE COST ANALYSIS",
            icon: food,
            path: "/food-cost",
            key: 10
        }
    ]





    // const roleHighlights = [
    //     {
    //         id: 1,
    //         key: "Determine Access Control",
    //         value: "Different users may need different levels of access, and defining roles helps in managing who can do what."
    //     },
    //     {
    //         id: 2,
    //         key: "Provide Clear Responsibilities",
    //         value: "Roles help define what users are expected to do within the software. This clarity is important for both the development and end-user experience."
    //     },
    //     {
    //         id: 3,
    //         key: "Facilitate the System's Structure",
    //         value: "Defining roles allows a system to be organized and ensures users can only interact with relevant features."
    //     }
    // ];

    // ]

    const valueToClient = [
        {
            id: 1,
            key: "Enhanced Security",
            value: "Role-specific permissions minimized unauthorized access and ensured data integrity."
        },
        {
            id: 2,
            key: "Streamlined Operations",
            value: "Automated workflows for employee management, finance, and user interactions reduced administrative burdens."
        },
        {
            id: 3,
            key: "Improved User Engagement",
            value: "A unified platform simplified interactions for admins, users, and guests, boosting satisfaction and productivity."
        },
        {
            id: 4,
            key: "Scalability and Flexibility",
            value: "The suite's modular architecture ensured it could grow alongside IIC's needs, providing a future-proof solution."
        },
        {
            id: 5,
            key: "Efficient Project Delivery",
            value: "Despite challenges, the Enterprise Suite's design facilitated timely completion while exceeding expectations."
        }
    ];


    const role = [
        {
            id: 1,
            key: "Role-Based Access Control (RBAC)",
            value: "Centralized control over user roles and permissions ensured secure and efficient access."
        },
        {
            id: 2,
            key: "Employee Portal and Payroll",
            value: "Streamlined employee data management and payroll processing enhanced administrative efficiency."
        },
        {
            id: 3,
            key: "Accounts & Finance Integration",
            value: "Provided real-time financial oversight, improving transparency and decision-making."
        },
        {
            id: 4,
            key: "Customizable Features",
            value: "The modular design of the Enterprise Suite allowed for the seamless addition of functionalities, adapting to evolving client needs."
        }
    ];

    return (
        <>

            {isPhone ? (
                <header className={`${styles.pageMainHeadingPhone}`}>

                    <div>
                        <span className={`font1 blueTextGlobalClass `}>Enterprise Suite</span><span className={"font1"}  >: Empowering Indian </span>
                        <span className="font1">International Center</span>   <span className={`font2 blueTextGlobalClass `} >(IIC)</span>
                        {/* <span className="font1">for</span>   <span className={`font2 blueTextGlobalClass `} > Houston Durga Bari Society</span> <span>(HDBS)</span> */}
                    </div>

                    <div className="font1" >


                    </div>

                </header>) : (<header className={`${styles.pageMainHeading}`}>

                    {/* <span className={`font2 blueTextGlobalClass `} >IIC</span>  <span className="font4" > SKY</span> */}
                    <div>
                        <span className={`font2 blueTextGlobalClass `}>Enterprise Suite</span><span className={"font1"} >: Empowering Indian</span>
                    </div>

                    <div className="font1" >
                        International Center <span className={`font2 blueTextGlobalClass `} >(IIC)</span>
                    </div>


                </header>)}



            {!isPhone && (<section className={`${styles.briefDescSection}  `}>

                <div className={`${styles.imgAndDescBox} globalSectionSize `}>

                    <div className={`${styles.descImg}`}>
                        <img style={{ width: "100%" }} src={laptop} alt="brief description" />
                    </div>

                    <div className={`${styles.briefDescBox}`}>

                        <div className={`${styles.briefDescHeading} font3`}>
                            Overview
                        </div>

                        <div className={`${styles.briefPara} font1`}>
                            The Indian International Center (IIC) faced the challenge of managing complex, multi-user interactions while ensuring secure access and operational efficiency. EICE Technology implemented the Enterprise Suite, tailored to meet these demands. With its comprehensive modules-such as Role-Based Access Control (RBAC), Employee Portal, Accounts & Finance, and Payroll-the Enterprise Suite enabled IIC to digitize operations, streamline workflows, and enhance user interaction across diverse roles.
                        </div>

                    </div>

                </div>

            </section>)}


            {isPhone && (<section className={`${styles.briefDescSectionPhone}  `}>

                <div className={`${styles.descImgPhone}`}>
                    <img style={{ width: "100%" }} src={laptop} alt="brief description" />
                </div>

            </section>)}


            {isPhone && (<div className={`${styles.briefDescBoxPhone}`}>

                <div className={`${styles.briefDescHeadingPhone} font3`}>
                    Overview
                </div>

                <div className={`${styles.briefParaPhone} font1`}>
                    The Houston Durga Bari Society (HDBS) sought a transformative digital solution to overcome the challenges of managing its diverse operations and engaging a geographically dispersed community. EICE Technology implemented the Club Suite, a comprehensive set of integrated modules, to address these needs. By leveraging the suite's capabilities, HDBS was able to centralize its operations, foster stronger connections with its members, and streamline administrative processes.
                </div>

            </div>)}






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
                    The Challenge
                </div>

                <div className={`${styles.informationBox} font1 `}>

                    {/* <div className={`${styles.statement1}`} >
                        Challenges with User Interaction in Multi-User Software Systems




                    </div> */}

                    <div className={`${styles.statement2}`} >


                        {challenges.map((item, index) =>
                        (
                            <>
                                {/* <ol className="font3">
                                    <li>
                                        {item.key}:
                                    </li>
                                </ol> */}

                                <div className="font3" >
                                    <span>{index + 1}. </span>
                                    {item.key}:
                                </div>

                                <div className={`${styles.value}`} >
                                    <ul>
                                        <li>
                                            {item.value1}

                                        </li>
                                        {item.value2 && (<li>
                                            {item.value2}
                                        </li>)}

                                    </ul>
                                </div>





                            </>

                        ))}




                    </div>

                    {/* <div className={`${styles.statement3}`} >
                        The challenge was to maintain a consistent user interface across devices without having to build entirely separate layouts for each device type.
                    </div> */}

                </div>

            </section>


            <section className={`${styles.ourRoleSection} globalSectionSize `}>

                <div className={`${styles.sectionHeading} font3`}>
                    Our Role
                </div>

                <div className={`${styles.roleDesc} font1 `}>
                    The Enterprise Suite enabled EICE Technology to address IIC's challenges holistically:
                </div>

                {/* <div className={`${styles.roleDesc} font1 `}>
                    In software systems, roles are often used to:
                </div> */}

                <div className={`${styles.roleHighlights} font4`}>
                    <ul>
                        {role.map((item) =>
                        (
                            <li className={`${styles.roleHighlightsListBox}`} >
                                <strong className={`${styles.roleHighlightsKey}`}>{item.key}:</strong>
                                <span className={`${styles.roleHighlightsValue}`} > {item.value} </span>
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
                        .Net Framework
                    </div>

                    <div className={`${styles.technologyName}`}  >
                        HTML/CSS/JS

                    </div>

                    <div className={`${styles.technologyName}`}  >
                        C#
                    </div>

                    <div className={`${styles.technologyName}`}  >
                        jQuery
                    </div>

                    <div className={`${styles.technologyName}`}  >
                        Oracle Database

                    </div>

                </div>

            </section> */}


            <section className={`${styles.valuesToClientSection} globalSectionSize `} >

                <div className={`${styles.sectionHeading} font3`}>

                    Value to Client
                </div>

                <div className={`${styles.highlightBox}`} >

                    <div className={`${styles.valueToClientSubheading} font4 `} >
                        The Enterprise Suite delivered transformative benefits for IIC:
                    </div>

                    <div className={`${styles.valueToClientList} font4 `}>

                        <ul >
                            {valueToClient.map((item) =>
                            (
                                <li className={`${styles.valueToClientListBox}`}>
                                    <strong className={`${styles.valueToClientListKey}`} >{item.key}:</strong>
                                    <span className={`${styles.valueToClientListValue}`} > {item.value} </span>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>

                {/* <div className={`${styles.highlightsBottomPara} font1`}>
                    Successfully developing multi-user software involves understanding and addressing the challenges of user interaction, permissions management, security, and client communication. Defining clear roles and responsibilities, implementing effective RBAC, and fostering good communication with the client are essential components of the process. These strategies will ensure that the software is functional, secure, and aligned with client expectations, ultimately leading to a successful project outcome
                </div> */}

            </section>

            <section className={`${styles.conclusionSection} globalSectionSize `} >

                <div className={`${styles.sectionHeading} font3`}>

                    Conclusion
                </div>


                <div className={`${styles.conclusionPara} font1`}>
                    By implementing the Enterprise Suite, <span className="font2 blueTextGlobalClass">EICE Technology empowered IIC to overcome its operational challenges, enhance security, and foster seamless multi-user interactions</span> . The result was a scalable, efficient, and secure system that aligned with IIC's vision for the future.
                </div>

            </section>

            <div>
                <FooterLower />
            </div>



        </>
    )
}
