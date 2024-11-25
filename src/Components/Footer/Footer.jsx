import styles from "./footer.module.css"
import footer from "../../assets/footer/foot.png"
import { FaArrowRightLong } from "react-icons/fa6";

import logo from '../../assets/logo/logo.svg';


import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {



    const navItems = [
        'Home',
        'About Us',
        'Products',
        'Room Booking',
        'Dining (POS)',
        'Banquet & Billing',
        'Membership Portal',
        'Accounts & Finance',
        'Pricing',
        'Blogs'
    ];

    return (
        <>

            <div className={`${styles.footerMainBox} `}>

                <div style={{ width: "60%" }}>

                    <div >
                        <span style={{ fontSize: "46px" }} className="font2 blueTextGlobalClass" > Flexible, Modular Solutions <span className="font1" style={{ color: "black", fontWeight: "600" }}> tailored to your business needs</span> </span>
                    </div>



                    <div className={`${styles.demoButton} font1`}>
                        <div > Request a Demo </div>
                        <div className={`${styles.demoArrowButton}`}> <FaArrowRightLong /></div>
                    </div>

                </div>

                <div style={{ width: "39%" }} >
                    <img style={{ width: "100%" }} src={footer} alt="" />
                </div>

            </div>



            <div style={{ marginTop: "8rem", display: "flex", justifyContent: "space-between" }}>

                <div className="font1" style={{ display: "flex", rowGap: "30px", flexDirection: "column", width: "40%" }}>

                    <div>

                        <img src={logo} alt="" />


                    </div>

                    <div>

                        Delivering innovative ERP solutions since 2010. Simplifying operations, enhancing efficiency, and empowering businesses worldwide.
                    </div>

                    <div style={{ fontWeight: "600" }}>
                        follow us

                        <div style={{ display: "flex", gap: "0px 20px", marginTop: "15px" }}>

                            <div>
                                <FaLinkedin size={30} className="blueTextGlobalClass" />
                            </div>

                            <div>
                                <FaSquareXTwitter size={30} className="blueTextGlobalClass" />
                            </div>

                        </div>
                    </div>



                </div>


                <div className="font1" style={{ display: "flex", gap: "0px 50px" }}>

                    <div>

                        <div className={`${styles.footerSubHeading}`} >Explore</div>

                        <div className={`${styles.footerPoints}`}>
                            <div style={{ fontWeight: "600" }}>Home</div>
                            <div style={{ fontWeight: "600" }}>About Us</div>
                            <div style={{ fontWeight: "600" }}>Products</div>
                            <div>Room Booking</div>
                            <div>Dining (POS)</div>
                            <div>Banquet & Billing</div>
                            <div>Membership Portal</div>
                            <div>Accounts & Finance</div>
                            <div style={{ fontWeight: "600" }}>Pricing</div>
                            <div style={{ fontWeight: "600" }}>Blogs</div>
                        </div>



                    </div>


                    <div>

                        <div className={`${styles.footerSubHeading}`}>Company</div>

                        <div className={`${styles.footerPoints}`}>
                            <div style={{ fontWeight: "600" }}>About Eice</div>
                            <div style={{ fontWeight: "600" }}>Careers</div>
                            <div style={{ fontWeight: "600" }}>Contact us</div>

                        </div>



                    </div>

                    <div>
                        <div className={`${styles.footerSubHeading}`}>Get in Touch</div>


                        <div className={`${styles.footerPoints}`}>

                            <div>
                                <div style={{ fontWeight: "600" }}>Email:</div>
                                <div className="blueTextGlobalClass">support@eice.com</div>
                            </div>


                            <div>
                                <div style={{ fontWeight: "600" }}>Phone : <span > 0120 435 5910</span></div>

                            </div>
                            <div>
                                <div style={{ fontWeight: "600" }}>
                                    Address :(India):
                                </div>

                                <div >  B-8 Second Floor Sec-60, Noida 201301</div>
                            </div>

                            <div >
                                <div style={{ fontWeight: "600" }}>Address (USA):</div>

                                <div>  440 Cobia Drive, #901 Katy, Texas 77494</div>
                            </div>


                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}
