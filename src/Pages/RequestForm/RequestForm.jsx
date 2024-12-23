import styles from "./requestForm.module.css"

import c3 from "../../assets/Hospitality/customer/c1.png"
import c2 from "../../assets/Hospitality/customer/c2.png"
import c1 from "../../assets/Hospitality/customer/c3.png"

import React, { useEffect, useState } from 'react';
import Select from 'react-select';
// feedback

import ak from "../../assets/form/feedback/AK.png"
import kd from "../../assets/form/feedback/KD.png"
import pd from "../../assets/form/feedback/PD.png"


import laptop from "../../assets/form/laptop.webp"
import Accordion from "../../Components/Accordian/Accordian"

import FooterLower from "../../Components/Footer/FooterLower"


import { FaArrowRightLong } from "react-icons/fa6";

export default function RequestForm() {


    const handleSubmit = (e) => {

        e.preventDefault()

        console.log(e)

    }

    const [countries, setCountries] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json()) // Convert response to JSON
            .then((data) => {
                // Map the response data to get country names and codes
                const countryList = data.map((country) => ({
                    label: country.name.common,  // The name of the country
                    value: country.cca2,         // The country code (ISO 3166-1 alpha-2)
                }));
                setCountries(countryList);
            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
            });
    }, []);

    const feedback = [
        {
            img: kd,
            position: "Operations Manager",
            company: ", LuxeStay Hotels",
            heading: "Transformative Technology Partner",
            para: (<span> EICE Rise has <span style={{ fontWeight: "bold" }}>completely transformed</span>  our operations. Their cloud ERP <span style={{ fontWeight: "bold" }}>seamlessly integrates</span> seamlessly integrates all aspects of our hotel, from reservations to dining, improving efficiency and enhancing our guest experience. We couldn’t ask for a better technology partner.</span>),
            // para: " EICE Rise has completely transformed our operations. Their cloud ERP seamlessly integrates all aspects of our hotel, from reservations to dining, improving efficiency and enhancing our guest experience. We couldn’t ask for a better technology partner.",
            key: 1

        },

        {
            img: pd,
            position: " General Manager ",
            company: ", Serenity Resorts",
            heading: "Exceptional Support & Innovation",
            para: (<span>The <span style={{ fontWeight: "bold" }}>intuitive modules</span>  offered by EICE Rise have simplified our front desk and housekeeping operations. <span style={{ fontWeight: "bold" }} >Their team’s support and innovative approach are unmatched. </span> We’ve seen remarkable growth since implementing their solutions.</span>),
            key: 2

        },

        {
            img: ak,
            position: " Director of Operations",
            company: ", Gourmet Suites",
            heading: "Elevated, Efficiency Guaranteed",
            para: (<span>Thanks to EICE Rise, <span style={{ fontWeight: "bold" }}>we’ve streamlined processes</span>  like banquet management and inventory control. The centralized platform has <span style={{ fontWeight: "bold" }}>saved us time</span>  and significantly improved <span style={{ fontWeight: "bold" }} > guest satisfaction.</span> </span>),
            key: 3

        }
    ]

    const query = [
        {
            key: 1,
            question: "Q : What financial functions does the Accounts & Finance module manage?",
            answer: "A : The module manages accounts receivable, accounts payable, debit & credit notes, taxation, balance sheets, and general ledger. It streamlines processes and ensures accurate financial operations."
        },
        {
            key: 2,
            question: "Q : How does the module help in financial decision-making?",
            answer: "A : It provides real-time financial data and advanced reporting tools, enabling managers to make data-driven decisions that enhance profitability and financial stability."
        },
        {
            key: 3,
            question: "Q : How does the system handle tax compliance?",
            answer: "A : The module automates tax calculations based on regional and international tax regulations, ensuring compliance and applying taxes seamlessly to invoices and payments."
        },
        {
            key: 4,
            question: "Q : Can the Accounts & Finance module integrate with other systems?",
            answer: "A : Yes, it integrates fully with other EICE Rise ERP modules like Room Booking, Banquet & Billing, Dining (POS), and more, ensuring synchronized financial records and consistent data flow."
        },
        {
            key: 5,
            question: "Q : How does the system assist in managing cash flow?",
            answer: "A : It provides real-time tracking and reporting, helping businesses monitor cash flow, ensuring liquidity, and optimizing cash reserves."
        }
    ];

    const customStyles = {
        control: (provided) => ({
            ...provided,
            paddingTop: '3px',  // Padding inside the input field
            paddingBottom: '3px',  // Padding inside the input field
            width: '31rem',  // Custom width
        }),
        menu: (provided) => ({
            ...provided,
            paddingTop: '5px',  // Padding for the dropdown menu
            paddingBottom: '3px',
            width: '31rem',  // Padding for the dropdown menu
        }),
    };

    return (
        <>


            <div className={`${styles.formHeadingBox}`}>

                <div className={`${styles.formHeading} `}> <span className="font2 blueTextGlobalClass" >Get in touch</span> <span style={{ fontWeight: "700" }} className="font3"> with us</span></div>
                <div className={`${styles.formSubheading} font4`}>Fill out the form below, and we'll get back to you shortly</div>

            </div>

            <div className={`${styles.formContainer} font1`}>

                <form onSubmit={handleSubmit} >

                    <div className={`${styles.FormInnerHeading}`}>
                        Add Your Information
                    </div>


                    <div className={`${styles.line1}`}>

                        <div>
                            <label>Name*</label>
                            <div  >
                                <input required className={`${styles.line1Input}`} type="text" />
                            </div>
                        </div>

                        <div>
                            <label>Company Name*</label>

                            <div >
                                <input required className={`${styles.line1Input}`} type="text" />
                            </div>
                        </div>


                    </div>


                    <div className={`${styles.line2}`}>

                        <div>
                            <label>Role/Designation (optional)</label>
                            <div>
                                <input className={`${styles.line2Input}`} type="text" />
                            </div>
                        </div>

                        <div>
                            <label>Email ID*</label>

                            <div>
                                <input required className={`${styles.line2Input}`} type="email" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" />
                            </div>
                        </div>


                        <div>
                            <label>Phone Number*</label>

                            <div>
                                <input required className={`${styles.line2Input}`} type="tel" pattern="[0-9]{10}" />
                            </div>
                        </div>

                    </div>


                    <div className={`${styles.line3}`}>

                        <div>
                            {/* <label>Country*</label>
                            <div>
                                <input required className={`${styles.line3Input}`} type="text" />
                            </div> */}


                            <label htmlFor="country">Country:</label>


                            <Select className={`${styles.line6Input}`}
                                id="country"
                                options={countries}          // Pass the country options here
                                isSearchable={true}          // Enables the search functionality
                                placeholder=" --Please select--"
                                styles={customStyles}
                            />




                        </div>

                        <div>
                            <div>Address*</div>

                            <div>
                                <input required className={`${styles.line3Input}`} type="text" />
                            </div>
                        </div>


                    </div>

                    <div className={`${styles.requirement}`}>
                        <label>
                            Requirement*
                        </label>
                        <div>
                            <select
                                id="requirement"
                                name="requirement"
                                required
                                className={`${styles.requirementInput}`}
                            >
                                <option value="">-- Please Select --</option>
                                <option value="Product Details or Demo">Product Details or Demo</option>
                                <option value="Product Pricing">Product Pricing</option>
                                <option value="Support or Training">Support or Training</option>
                            </select>
                        </div>

                    </div>

                    <div className={`${styles.messageTextArea}`}>
                        <div>
                            <label htmlFor="message">Message:</label>

                        </div>

                        <div>
                            <textarea className={`${styles.messageTextAreaInput}`} rows="5" placeholder="Write your message here">
                            </textarea>
                        </div>

                    </div>

                    <div className={`${styles.checkBoxContainer}`}>

                        <div className={`${styles.checkBox}`} >
                            <div style={{ paddingTop: "1px" }}>
                                <input type="checkbox" />
                            </div>
                            <div style={{ paddingBottom: "3px" }}>
                                Recieve EICE Rise Products, Services, Events and more
                            </div>

                        </div>

                        <div className={`${styles.checkBox}`}>

                            <div>
                                <input required type="checkbox" />
                            </div>
                            <div style={{ paddingBottom: "3px" }}>
                                I have agreed to EICE Technology Private policy
                            </div>


                        </div>
                    </div>


                    <div className={`${styles.submitButtonConatiner}`}>
                        <div className={`${styles.buttonbox}`} >

                            <div >
                                <input required className=" font3" style={{ fontSize: "17px", border: "none", color: "white", background: "rgba(1, 176, 241, 1)" }} type="submit" name="submit" id="" />
                            </div>

                            <div className={`${styles.demoArrowButton}`}> <FaArrowRightLong /></div>

                        </div>



                    </div>



                </form>

            </div>


            <div className={`${styles.reviewSection}`}>
                <section className={`${styles.section5} globalSectionSize`}>

                    <div className={`${styles.section5Heading} font1`}>

                        <div className="font3">
                            What our clients say  ?
                        </div>

                    </div>


                    <main className={`${styles.feedBack}`}>
                        {feedback.map((item) =>
                        (
                            <article key={item.key} className={`${styles.feedBackArticleBox} font1`} >

                                <figure >

                                    <div style={{ textAlign: "center" }}  >
                                        <img style={{ width: "28%" }} src={item.img} alt="" />
                                    </div>

                                    <figcaption style={{ textAlign: "center" }} > <span style={{ fontWeight: "bold" }}>{item.position}</span> <span>{item.company}</span></figcaption>

                                </figure>
                                <div className={`${styles.quoteHeading} blueTextGlobalClass font3`}>
                                    "{
                                        item.heading
                                    }"
                                    {/* {item.key === 2 ? (<div className={`${styles.cardBoxInnerHeading2} blueTextGlobalClass font3`} >"{item.heading}"</div>) : (<div className={`${styles.cardBoxInnerHeading} blueTextGlobalClass font3`} >"{item.heading}"</div>)} */}
                                </div>



                                <p style={{ textAlign: "center", lineHeight: "1.8rem" }}>{item.para}</p>

                            </article>
                        ))}
                    </main>


                </section>
            </div>

            <section >
                <div className={`${styles.FAQsection} globalSectionSize font4`}>
                    <div className={`${styles.FAQHeading}`}>Frequently Asked Questions</div>


                    <div className={styles.FAQContainer}>
                        {query.map((item) => (
                            <Accordion key={item.key} question={item.question} answer={item.answer} />
                        ))}
                    </div>

                </div>
            </section>


            <section className={`${styles.contactUsBackground}`}>
                <div className={`${styles.ContactUsSection} globalSectionSize  `}>

                    <div className={`${styles.contactUsHeading} font3`}>
                        Contact Us
                    </div>

                    <div className={`${styles.contactUsBox} font1 `}>

                        <div>

                            <div className={`${styles.key} font3`}>Email :</div>
                            <div className={`${styles.value} font1 `}  >info@eicetechnology.com</div>

                        </div>
                        <div>

                            <div className={`${styles.key} font3 `}>Phone no :</div>
                            <div className={`${styles.value} font1 `}> 0120 435 5910</div>

                        </div>
                        <div>

                            <div className={`${styles.key} font3`}>Address (India) :</div>
                            <div className={`${styles.value} font1 `}>B-8 Second Floor   </div>
                            <div className={`${styles.value} font1 `}> Sec-60, Noida 201301</div>

                        </div>
                        <div >

                            <div className={`${styles.key} font3`}>Address (USA) :</div>
                            <div className={`${styles.value} font1 `}>440 Cobia Drive, #901 </div>
                            <div className={`${styles.value} font1 `}>katy, Texas 77494</div>

                        </div>


                    </div>

                </div>
            </section>



            <section className={`${styles.LaptopImgSection}`}>
                <div className={`${styles.LaptopImg}`} >
                    <img src={laptop} alt="footer" />
                </div>

            </section>

            <div>
                <FooterLower />
            </div>

        </>
    )
}
