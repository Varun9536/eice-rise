import styles from "./iic.module.css"
import laptop from "../../../assets/section3Laptop/account.webp"

import FooterLower from "../../../Components/Footer/FooterLower"

export default function IIC() {

    const challenges = [
        {
            id: 1,
            key: "User Access Control and Permissions",
            value: (<>

                <span> With multiple users, you need to ensure that the right users have access to the right parts of the software. Managing permissions, roles, and different user access levels can be complex.</span> <strong>Solution: </strong> <span>Role-Based Access Control (RBAC): Implement RBAC to manage user roles (admin, user, guest, etc.). Each role should have specific permissions for certain actions or data.</span>
                <strong> Granular Permissions: </strong> <span>For more complex systems, permissions can be based on individual data entities (e.g., only a user's data or specific features) rather than whole sections of the software. </span>

            </>)


        },
        {
            id: 2,
            key: "Understanding Client Requirements Vague Requirements",
            value: (<>
                <span> Clients may have unclear, incomplete, or unrealistic expectations. Translating their vision into specific, actionable requirements can be difficult.</span>
                <strong> Changing Requirements: </strong> <span> Clients often change their mind during the development process, which can lead to scope creep, delays, and budget overruns.</span>
            </>

            )
        },
        {
            id: 3,
            key: "Testing and Quality Assurance Bug Fixes and Testing Delays",
            value: (<>

                <span> Insufficient testing can lead to bugs or issues that are only discovered later in the development process, leading to delays and unexpected costs.</span>

                <strong> Client-Related Testing: </strong>
                <span> Sometimes clients want to perform their own testing, which can lead to misunderstandings or unrealistic expectations about the final product's behavior.</span>

            </>
            )
        },
        {
            id: 4,
            key: "Scope Creep Adding Features",
            value: (<>

                <span>
                    During the course of the project, clients may keep adding new features or change existing ones, which can significantly alter the scope of the project and lead to delays and budget issues.
                </span>

                <strong> Inadequate Documentation: </strong>
                <span> Without proper documentation, scope changes can cause confusion and lead to miscommunication regarding what was agreed upon initially.</span>

            </>)

        }
    ];





    const roleHighlights = [
        {
            id: 1,
            key: "Determine Access Control",
            value: "Different users may need different levels of access, and defining roles helps in managing who can do what."
        },
        {
            id: 2,
            key: "Provide Clear Responsibilities",
            value: "Roles help define what users are expected to do within the software. This clarity is important for both the development and end-user experience."
        },
        {
            id: 3,
            key: "Facilitate the System's Structure",
            value: "Defining roles allows a system to be organized and ensures users can only interact with relevant features."
        }
    ];

    // ]

    return (
        <>

            <header className={`${styles.pageMainHeading}`}>

                <span className={`font2 blueTextGlobalClass `} >IIC</span>  <span className="font4" > SKY</span>

            </header>

            <section className={`${styles.briefDescSection} globalBlueOverviewSection `}>

                <div className={`${styles.imgAndDescBox} globalSectionSize `}>

                    <div className={`${styles.descImg}`}>
                        <img style={{ width: "100%" }} src={laptop} alt="brief description" />
                    </div>

                    <div className={`${styles.briefDescBox}`}>

                        <div className={`${styles.briefDescHeading} font3`}>
                            Project Brief
                        </div>

                        <div className={`${styles.briefPara} font1`}>
                            Implement Role-Based Access Control (RBAC), enabling tailored access for different user roles such as admin, user, and guest. This approach ensured secure, organized access to relevant data and features. We also tackled challenges around unclear client requirements, scope creep, and testing delays, delivering a secure, scalable system aligned with IICC's goals while maintaining clear communication and focused development
                        </div>

                    </div>

                </div>

            </section>


            <section className={`${styles.challengeSection} globalSectionSize `} >

                <div className={`${styles.sectionHeading} font3 `}>
                    The Challenge
                </div>

                <div className={`${styles.informationBox} font1 `}>

                    <div className={`${styles.statement1}`} >
                        Challenges with User Interaction in Multi-User Software Systems




                    </div>

                    <div className={`${styles.statement2}`} >
                        <ul>

                            {challenges.map((item) =>
                            (
                                <li>
                                    <span className="font3">{item.key}:</span>
                                    <span> {item.value} </span>
                                </li>
                            ))}
                        </ul>



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
                    When you are managing a multi-user software system, defining roles becomes crucial because each role comes with specific duties, access rights, and permissions to use or modify parts of the system.
                </div>

                <div className={`${styles.roleDesc} font1 `}>
                    In software systems, roles are often used to:
                </div>

                <div className={`${styles.roleHighlights} font4`}>
                    <ul>
                        {roleHighlights.map((item) =>
                        (
                            <li>
                                <strong>{item.key}:</strong>
                                <span> {item.value} </span>
                            </li>
                        ))}
                    </ul>
                </div>




            </section>


            <section className={`${styles.toolsAndTechSection} globalSectionSize`} >
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

            </section>


            <section className={`${styles.valuesToClientSection} globalSectionSize `} >

                <div className={`${styles.sectionHeading} font3`}>

                    Value to Client
                </div>

                {/* <div className={`${styles.highlightBox}`} >

                    <div className={`${styles.highlightBoxHeading} font1 `} >
                        Key HighLlights
                    </div>

                    <div className={`${styles.highlightsList} font4 `}>

                        <ul>
                            {roleHighlights.map((item) =>
                            (
                                <li>
                                    <strong>{item.key}:</strong>
                                    <span> {item.value} </span>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div> */}

                <div className={`${styles.highlightsBottomPara} font1`}>
                Successfully developing multi-user software involves understanding and addressing the challenges of user interaction, permissions management, security, and client communication. Defining clear roles and responsibilities, implementing effective RBAC, and fostering good communication with the client are essential components of the process. These strategies will ensure that the software is functional, secure, and aligned with client expectations, ultimately leading to a successful project outcome
                </div>

            </section>

            <div>
                <FooterLower />
            </div>



        </>
    )
}
