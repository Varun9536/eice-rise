import FooterLower from "../../../Components/Footer/FooterLower"
import styles from "./android.module.css"

export default function Android() {
    return (
        <>

            <header>

            </header>

            <section className={`${styles.briefSection}`}>

                <div className={`${styles.imgAndDescBox}`}>

                    <div className={`${styles.briefSection}`}>
                        <img src="" alt="" />
                    </div>

                    <div className={`${styles.briefSection}`}>

                    </div>

                </div>

            </section>


            <section className={`${styles.challengeSection}`} >

                <div className={`${styles.sectionHeading}`}></div>

                <div className={`${styles.informationBox}`}>

                    <div className={`${styles.statement1}`} >

                    </div>

                    <div className={`${styles.statement2}`} >

                        <div>

                        </div>

                        <div>

                        </div>

                    </div>

                    <div className={`${styles.statement3}`} >

                    </div>

                </div>

            </section>


            <section className={`${styles.ourRoleSection}`}>

                <div className={`${styles.sectionheading}`}>

                </div>

                <div className={`${styles.desc}`}>

                </div>

            </section>


            <section className={`${styles.toolsAndTechSection}`} >
                <div className={`${styles.sectionheading}`}>
                </div>

                <div className={`${styles.technology}`}>

                    <div className={`${styles.technologyName}`}  >

                    </div>

                    <div className={`${styles.technologyName}`}  >

                    </div>

                    <div className={`${styles.technologyName}`}  >

                    </div>

                    <div className={`${styles.technologyName}`}  >

                    </div>

                </div>

            </section>


            <section className={`${styles.valuesToClientSection}`} >

            <div className={`${styles.sectionheading}`}>
            </div>

            <div className={`${styles.highlightBox}`} >

                <div className={`${styles.highlightBoxHeading}`} >

                </div>

                <div className={`${styles.highlightsPoints}`}>

                    <div>

                    </div>

                    <div>
                        
                    </div>

                    <div>
                        
                    </div>

                </div>

                <div className={`${styles.highlightsBottomPara}`}>

                </div>

            </div>

            </section>

            <div>
                <FooterLower/>
            </div>



        </>
    )
}
