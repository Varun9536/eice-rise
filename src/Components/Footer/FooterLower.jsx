import styles from "./footer.module.css"
import logo from '../../assets/logo/logo.svg';

import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa6";

import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";


import { IoLogoWhatsapp } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import { IoMail } from "react-icons/io5";



export default function FooterLower() {
    return (

        <>
            <div className={`${styles.footerNavigationBox}`}>

                <div className={`${styles.footerInnerBox} globalSectionSize`}>

                    <div className={`${styles.eiceLogoAndSocialMediaBox} font1 `}>

                        <div>
                            <img className={styles.logoWhite} src={logo} alt="" />
                        </div>

                        <div className={`${styles.footerParagraph}`}>
                            Delivering innovative ERP solutions since 2010. Simplifying operations, enhancing efficiency, and empowering businesses worldwide.
                        </div>

                        <div style={{ fontWeight: "600", marginTop: "20px" }}>
                            Follow us

                            <div style={{ display: "flex", gap: "0px 20px", marginTop: "15px" }}>

                                <div>
                                    <Link to={"https://www.linkedin.com/company/eice-technology/posts/?feedView=all&viewAsMember=true"}>
                                        <FaLinkedin size={30} className="blueTextGlobalClass" />
                                    </Link>

                                </div>

                                <div>
                                    <Link to={"https://twitter.com/EiceTech24"}>
                                        <FaSquareXTwitter size={30} className="blueTextGlobalClass" />
                                    </Link>

                                </div>

                                <div>
                                    <Link to={"https://www.instagram.com/eicetechnology24/?next=%2F"}>
                                        <FaInstagram size={30} className="blueTextGlobalClass" />
                                    </Link>

                                </div>

                                <div>
                                    <Link to={"https://www.facebook.com/Eicetechnology/"}>
                                        <FaFacebookSquare size={30} className="blueTextGlobalClass" />
                                    </Link>

                                </div>



                            </div>
                        </div>



                    </div>




                  



                    <div className={`${styles.contactContainer}`}>

                        <div className={`${styles.getInTouchBox} font1`}>

                            <div className={`${styles.getInTouchHeading} font1`}> GET IN TOUCH :</div>

                            <div className={`${styles.logoAndDetailBox}`}>
                                <div > <IoLogoWhatsapp /> </div>
                                <div className={`${styles.contactDetails}`} style={{paddingBottom : "4px"}}> +91-987185200</div>
                            </div>

                            <div className={`${styles.logoAndDetailBox}`}>

                                <div>
                                    <MdPhone />
                                </div>
                                <div  className={`${styles.contactDetails}`} style={{paddingBottom : "4px"}}>
                                    +1 832 280 4632
                                </div>
                            </div>
                            <div className={`${styles.logoAndDetailBox}`}>
                                <div>
                                    <IoMail />
                                </div>

                                <div className={`${styles.contactDetails}`} style={{paddingBottom : "4px"}}>
                                    info@eicetechnology.com
                                </div>
                            </div>



                        </div>

                        <div className={`${styles.addressContainer}`}>

                            <div className={`${styles.indiaOffice}`}>

                                <div className={`${styles.countryName} font1`}>
                                    INDIA
                                </div>

                                <div className={`${styles.location1} font1`}>
                                    B-8 , Second Floor Sec-60 , Noida 201301
                                </div>

                            </div>

                            <div className={`${styles.usOffice}`}>

                                <div>
                                    <div className={`${styles.countryName} font1`} >
                                        UNITED
                                    </div>
                                    <div className={`${styles.countryName } font1`} >
                                        STATES
                                    </div>
                                </div>


                                <div className={`${styles.location2} font1`} >
                                    440 Cobia Drive
                                    #901 Katy , Texas
                                    77494
                                </div>

                            </div>

                        </div>

                    </div>






                </div>
            </div>




            <div className={`${styles.copyRightSectionBox} font4  `}  >
                <div className={`${styles.copyRightSectionInnerBox} globalSectionSize `}>
                    <div >
                        ©2024 EICE Technologies Pvt. Ltd. All rights reserved.
                    </div>

                    <div style={{ fontWeight: "bold" }}>
                        Terms & Conditions
                    </div>
                </div>


            </div>
        </>
    )
}
