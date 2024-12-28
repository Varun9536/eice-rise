import FooterLower from "../../../Components/Footer/FooterLower"
import styles from "./android.module.css"

import laptop from "../../../assets/caseStudy/android.webp"

export default function Android() {


    const challenges = [
        {
            id: "1",
            key: "Mobile Phones",
            value: "On phones, only one screen could be viewed at a time, limiting the user's ability to multitask"
        },

        {
            id: "2",
            key: "Tablets",
            value: "On tablets, the expectation was to have both screens displayed side by side for better productivity and a more efficient workflow."
        }
    ]


    const roleHighlights = [
        {
            id: "r1",
            key: "Adaptive UI",
            value: "Utilized fragments for a responsive layout that adapts to both phones and tablets."
        },

        {
            id: "r2",
            key: "Efficient Workflow",
            value: "Enabled side-by-side views on tablets, optimizing the user's workflow while maintaining simplicity on mobile"
        },

        {
            id: "r3",
            key: "Code Reuseability",
            value: "Avoided the need for creating separate layouts for different devices, ensuring a more streamlined development process and easier maintenance."
        }
    ]

    return (
        <>

            <header className={`${styles.pageMainHeading}`}>

                <div>
                    <span className={`font2 blueTextGlobalClass `}>Inventory Suite</span><span className={"font1"}  >:  Transforming </span>
                </div>

                <div className="font1" >

                    Operational Efficiency for  <span className={`font2 blueTextGlobalClass `} > Sales Vu</span>
                </div>
            </header>

            <section className={`${styles.briefDescSection}  `}>

                <div className={`${styles.imgAndDescBox} globalSectionSize `}>

                    <div className={`${styles.descImg}`}>
                        <img style={{ width: "100%" }} src={laptop} alt="brief description" />
                    </div>

                    <div className={`${styles.briefDescBox}`}>

                        <div className={`${styles.briefDescHeading} font3`}>
                            Project Brief
                        </div>

                        <div className={`${styles.briefPara} font1`}>
                            The SalesVu Android App enhances POS functionality with features like order management, payment processing, and barcode scanning. These features streamline operations, improve inventory management, and provide secure, fast transactions, all while boosting user accessibility. The app delivers an intuitive solution for businesses to efficiently manage their operations on Android devices.
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
                        SalesVu faced a unique design challenge in optimizing the user experience across different device types. The application consisted of two key screens: one for selecting the category and product, and the other for displaying order details.


                    </div>

                    <div className={`${styles.statement2}`} >
                        <ul>

                            {challenges.map((item) =>
                            (
                                <li key={item.id}>
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
                        Android
                    </div>

                    <div className={`${styles.technologyName}`}  >
                        Core Java
                    </div>

                    <div className={`${styles.technologyName}`}  >
                        Eclipse
                    </div>

                    <div className={`${styles.technologyName}`}  >
                        Mercury Payment Gateway

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
                                <li key={item.id}>
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
