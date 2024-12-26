import styles from "./iic.module.css"
import laptop from "../../../assets/section3Laptop/account.webp"

import FooterLower from "../../../Components/Footer/FooterLower"

export default function IIC() {

    const challenges = [
        {
            key: "Mobile Phones",
            value: "On phones, only one screen could be viewed at a time, limiting the user's ability to multitask"
        },

        {
            key: "Tablets",
            value: "On tablets, the expectation was to have both screens displayed side by side for better productivity and a more efficient workflow."
        }
    ]


    const roleHighlights = [
        {
            key: "Adaptive UI",
            value: "Utilized fragments for a responsive layout that adapts to both phones and tablets."
        },

        {
            key: "Efficient Workflow",
            value: "Enabled side-by-side views on tablets, optimizing the user's workflow while maintaining simplicity on mobile"
        },

        {
            key: "Efficient Workflow",
            value: "Avoided the need for creating separate layouts for different devices, ensuring a more streamlined development process and easier maintenance."
        }
    ]

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
                                    <strong>{item.key}:</strong>
                                    <span> {item.value} </span>
                                </li>
                            ))}
                        </ul>



                    </div>

                    <div className={`${styles.statement3}`} >
                        The challenge was to maintain a consistent user interface across devices without having to build entirely separate layouts for each device type.
                    </div>

                </div>

            </section>


            <section className={`${styles.ourRoleSection} globalSectionSize `}>

                <div className={`${styles.sectionHeading} font3`}>
                    Our Role
                </div>

                <div className={`${styles.roleDesc} font1 `}>
                    EICE Technology was tasked with developing both the Android app and the Web Admin interface for Salevsu. Our primary responsibility was to create a seamless experience for users on different devices, focusing on optimizing the UI/UX and functionality for both mobile phones and tablets.
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

                <div className={`${styles.highlightBox}`} >

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
                </div>

                <div className={`${styles.highlightsBottomPara} font1`}>
                    Through this approach, EICE Technology delivered a flexible and user-friendly app experience for Salevsu, ensuring functionality across device types without compromising on performance or design.
                </div>

            </section>

            <div>
                <FooterLower />
            </div>



        </>
    )
}
