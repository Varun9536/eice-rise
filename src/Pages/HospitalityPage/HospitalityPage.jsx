import styles from "./Hospitality.module.css"
import laptop from "../../assets/Hospitality/laptop.png"



export default function HospitalityPage() {
    return (
        <>


            <div className={styles.section1}>

                <div className={styles.laptopImg}>
                    <img style={{ maxWidth: "60%" }} src={laptop} alt="" />
                </div>

                <div className={styles.textBox}>
                    <div className={`${styles.text1}  `}>
                        <span className="s2" >Flexible, Modular Solutions</span> <span className="s1">tailored to your business needs</span>
                    </div>

                    <div className={`${styles.text2} s1`}>
                        EICE Rise ERP simplifies hospitality operations by uniting front desk, housekeeping, dining, and finance into a single, efficient platform for streamlined management and enhanced guest experiences.
                    </div>

                    <div className={`${styles.text3} s1`}>
                        Request a Demo
                    </div>

                </div>

            </div>



            <div className={`${styles.section2} globalPageSize`}>

            </div>



        </>
    )
}
