import styles from "./durgabari.module.css"
import laptop from "../../../assets/section3Laptop/account.webp"

import FooterLower from "../../../Components/Footer/FooterLower"

export default function Durgabari() {


    // const challenges = [
    //     {
    //         key: "Mobile Phones",
    //         value: "On phones, only one screen could be viewed at a time, limiting the user's ability to multitask"
    //     },

    //     {
    //         key: "Tablets",
    //         value: "On tablets, the expectation was to have both screens displayed side by side for better productivity and a more efficient workflow."
    //     }
    // ]


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



    return (
        <>

            <header className={`${styles.pageMainHeading}`}>

                <span className="font4" >Houston</span>   <span className={`font2 blueTextGlobalClass `} >Durga Bari Socienty</span>  <span className="font4" > (HBDS)</span>

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
                            Digitize and streamline their operations, enhancing the overall experience for their community members. The project aimed to integrate various services, making them accessible online while preserving the cultural and religious essence of the society.
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
                        The Houston Durga Bari Society (HDBS) faced challenges in engaging with a geographically dispersed community while maintaining efficient management of its diverse activities. These included organizing religious and cultural events, managing memberships, facilitating venue reservations, and providing virtual access to religious services. The lack of a unified digital platform led to operational inefficiencies, limited accessibility for members, and a fragmented user experience. HDBS needed a comprehensive digital solution to centralize its offerings, enharice user engagement, and streamline administrative processes while preserving the essence of its cultural and religious heritage.


                    </div>

                    {/* <div className={`${styles.statement2}`} >
                        <ul>

                            {challenges.map((item) =>
                            (
                                <li>
                                    <strong>{item.key}:</strong>
                                    <span> {item.value} </span>
                                </li>
                            ))}
                        </ul>



                    </div> */}

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
                    At EICE Technology, we partnered with the Houston Durga Bari Society (HDBS) to bring their vision of a digitally connected and efficiently managed community to life. By leveraging our expertise in web development, digital solutions, and user-centric design, we delivered a comprehensive platform tailored to meet HDBS's unique needs
                </div>

            </section>


            <section className={`${styles.empoweringiListSection} globalSectionSize`}>

                <div className={`${styles.sectionHeading} font1`}>
                    Empowering Houston Durga Bari Society
                </div>

                <div className={`${styles.listBox} font1`} >
                    <ul>

                        {empoweringList.map((item) =>
                        (
                            <li key={item.id}>
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

            </section>


            <section className={`${styles.valuesToClientSection} globalSectionSize `} >

                <div className={`${styles.sectionHeading} font3`}>

                    Value to Client
                </div>

                <div className={`${styles.highlightBox}`} >

                    {/* <div className={`${styles.highlightBoxHeading} font1 `} >
                        Key HighLlights
                    </div> */}

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

                {/* <div className={`${styles.highlightsBottomPara} font1`}>
                    Through this approach, EICE Technology delivered a flexible and user-friendly app experience for Salevsu, ensuring functionality across device types without compromising on performance or design.
                </div> */}

            </section>

            <div>
                <FooterLower />
            </div>



        </>
    )
}
