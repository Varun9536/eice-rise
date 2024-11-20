import styles from "./Hospitality.module.css"
import laptop from "../../assets/Hospitality/laptop.png"


import pos from "../../assets/insidePages/account/account.webp"



export default function HospitalityPage() {


    const services = [
        {
            serviceName: "POS",
            icon: pos
        },

        {
            serviceName: "POS",
            icon: pos
        }

        ,

        {
            serviceName: "POS",
            icon: pos
        }

        ,

        {
            serviceName: "POS",
            icon: pos
        }

        ,

        {
            serviceName: "POS",
            icon: pos
        }

        ,

        {
            serviceName: "POS",
            icon: pos
        }

        ,

        {
            serviceName: "POS",
            icon: pos
        }

        ,

        {
            serviceName: "POS",
            icon: pos
        }

        ,

        {
            serviceName: "POS",
            icon: pos
        }

        ,

        {
            serviceName: "POS",
            icon: pos
        }
    ]


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


                <div className={`${styles.section2Heading} s1`}>Our <span s className={`${styles.headingClass} s2`} > End to End </span>  Technology Solution</div>



                <div className={`${styles.servicesBox}`}>
                    {services.map((item) =>
                    (
                        <div className={`${styles.iconAndTextBox}`}>

                            <div className={styles.imgBox} >
                                <img src={item.icon} alt="" />
                            </div>


                            <div className={`${styles.serviceName} s2`}>{item.serviceName}</div>
                        </div>
                    ))}
                </div>


            </div>



        </>
    )
}
