import styles from "./requestForm.module.css"

import c3 from "../../assets/Hospitality/customer/c1.png"
import c2 from "../../assets/Hospitality/customer/c2.png"
import c1 from "../../assets/Hospitality/customer/c3.png"

import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import ak from "../../assets/form/feedback/AK.png"
import kd from "../../assets/form/feedback/KD.png"
import pd from "../../assets/form/feedback/PD.png"

import laptop from "../../assets/form/laptop.webp"
import Accordion from "../../Components/Accordian/Accordian"

import FooterLower from "../../Components/Footer/FooterLower"

import { FaArrowRightLong } from "react-icons/fa6";

export default function RequestForm() {

    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        role: '',
        email: '',
        phone: '',
        country: '',
        address: '',
        requirement: '',
        message: '',
        subscribe: false,
        policyAgree: false,
    });

    const [countries, setCountries] = useState([]);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then((response) => response.json())
            .then((data) => {
                const countryList = data.map((country) => ({
                    label: country.name,
                    value: country.name,
                    
                }));

                data.map((item)=>
                {
                    console.log(item.name.common)
                })
               
                setCountries(countryList);
                // console.log(data)
            })
            .catch((error) => console.error('Error fetching country data:', error));
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSelectChange = (selectedOption) => {
        setFormData((prevData) => ({
            ...prevData,
            country: selectedOption ? selectedOption.value : '',
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log(formData)

        // Check if both checkboxes are checked before submitting
        if (!formData.subscribe || !formData.policyAgree) {
            alert("Please agree to the terms and conditions before submitting.");
            return;
        }

        const dataToSend = {
            name: formData.name,
            companyName: formData.companyName,
            role: formData.role,
            email: formData.email,
            phone: formData.phone,
            country: formData.country,
            address: formData.address,
            requirement: formData.requirement,
            message: formData.message,
        };

        try {
            // const response = await fetch("YOUR_API_ENDPOINT_HERE", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(dataToSend),
            // });
            console.log(dataToSend)
            // if (response.ok) {
            //     alert("Your form has been submitted successfully.");
            // } else {
            //     alert("Failed to submit the form. Please try again.");
            // }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        }
    };

    const feedback = [
        {
            img: kd,
            position: "Operations Manager",
            company: ", LuxeStay Hotels",
            heading: "Transformative Technology Partner",
            para: (<span> EICE Rise has <span style={{ fontWeight: "bold" }}>completely transformed</span> our operations. Their cloud ERP <span style={{ fontWeight: "bold" }}>seamlessly integrates</span> all aspects of our hotel, from reservations to dining, improving efficiency and enhancing our guest experience. We couldn’t ask for a better technology partner.</span>),
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
            para: (<span>Thanks to EICE Rise, <span style={{ fontWeight: "bold" }}>we’ve streamlined processes</span> like banquet management and inventory control. The centralized platform has <span style={{ fontWeight: "bold" }}>saved us time</span> and significantly improved <span style={{ fontWeight: "bold" }} > guest satisfaction.</span> </span>),
            key: 3
        }
    ];

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
            paddingTop: '3px',
            paddingBottom: '3px',
            width: '31rem',
        }),
        menu: (provided) => ({
            ...provided,
            paddingTop: '5px',
            paddingBottom: '3px',
            width: '31rem',
        }),
    };

    return (
        <>
            <div className={`${styles.formHeadingBox}`}>
                <div className={`${styles.formHeading}`}> <span className="font2 blueTextGlobalClass">Get in touch</span> <span style={{ fontWeight: "700" }} className="font3"> with us</span></div>
                <div className={`${styles.formSubheading} font4`}>Fill out the form below, and we'll get back to you shortly</div>
            </div>

            <div className={`${styles.formContainer} font1`}>
                <form onSubmit={handleSubmit}>

                    <div className={`${styles.FormInnerHeading}`}>
                        Add Your Information
                    </div>

                    <div className={`${styles.line1}`}>
                        <div>
                            <label>Name*</label>
                            <div>
                                <input autoComplete="off" required className={`${styles.line1Input}`} type="text" name="name" value={formData.name} onChange={handleChange} />
                            </div>
                        </div>

                        <div>
                            <label>Company Name*</label>
                            <div>
                                <input autoComplete="off" required className={`${styles.line1Input}`} type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.line2}`}>
                        <div>
                            <label>Role/Designation (optional)</label>
                            <div>
                                <input autoComplete="off" className={`${styles.line2Input}`} type="text" name="role" value={formData.role} onChange={handleChange} />
                            </div>
                        </div>

                        <div>
                            <label>Email ID*</label>
                            <div>
                                <input autoComplete="off" required className={`${styles.line2Input}`} type="email" name="email" value={formData.email} onChange={handleChange} />
                            </div>
                        </div>

                        <div>
                            <label>Phone Number*</label>
                            <div>
                                <input autoComplete="off" required className={`${styles.line2Input}`} type="tel" name="phone" value={formData.phone} onChange={handleChange} pattern="[0-9]{10}" />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.line3}`}>
                        <div>
                            <label htmlFor="country">Country:</label>
                            <Select
                                className={`${styles.line6Input}`}
                                id="country"
                                options={countries}
                                isSearchable={true}
                                placeholder=" -- Please Select --"
                                styles={customStyles}
                                value={countries.find((option) => option.value === formData.country)}
                                onChange={handleSelectChange}
                            />
                        </div>

                        <div>
                            <div>Address*</div>
                            <div>
                                <input autoComplete="off" required className={`${styles.line3Input}`} type="text" name="address" value={formData.address} onChange={handleChange} />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.requirement}`}>
                        <label>Requirement*</label>
                        <div>
                            <select
                                id="requirement"
                                name="requirement"
                                required
                                className={`${styles.requirementInput}`}
                                value={formData.requirement} 
                                onChange={handleChange}
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
                            <textarea
                                className={`${styles.messageTextAreaInput}`}
                                rows="5"
                                placeholder="Write your message here"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                               
                            />
                        </div>
                    </div>

                    <div className={`${styles.checkBoxContainer}`}>
                        <div className={`${styles.checkBox}`}>
                            <input
                                type="checkbox"
                                name="subscribe"
                                checked={formData.subscribe}
                                onChange={handleChange}

                            />
                            <span>Recieve EICE Rise Products, Services, Events and more</span>
                        </div>

                        <div className={`${styles.checkBox}`}>
                            <input
                                required
                                type="checkbox"
                                name="policyAgree"
                                checked={formData.policyAgree}
                                onChange={handleChange}
                            />
                            <span>I have agreed to EICE Technology Privacy policy</span>
                        </div>
                    </div>

                    <div className={`${styles.submitButtonConatiner}`}>
                        <div className={`${styles.buttonbox}`}>
                            <input
                                required
                                type="submit"
                                className="font3"
                                style={{ fontSize: "17px", border: "none", color: "white", background: "rgba(1, 176, 241, 1)" }}
                            />
                            <div className={`${styles.demoArrowButton}`}>
                                <FaArrowRightLong />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className={`${styles.reviewSection}`}>
                {/* Feedback and FAQ sections remain the same */}
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
                <div className={`${styles.LaptopImg}`}>
                    <img src={laptop} alt="footer" />
                </div>
            </section>

            <FooterLower />
        </>
    );
}
