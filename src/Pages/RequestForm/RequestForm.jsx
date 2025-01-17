import styles from "./requestForm.module.css"

import c3 from "../../assets/Hospitality/customer/c1.png"
import c2 from "../../assets/Hospitality/customer/c2.png"
import c1 from "../../assets/Hospitality/customer/c3.png"


import Flag from "react-world-flags"

import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import ak from "../../assets/form/feedback/AK.png"
import kd from "../../assets/form/feedback/KD.png"
import pd from "../../assets/form/feedback/PD.png"

import laptop from "../../assets/form/allLaptop.webp"
import Accordion from "../../Components/Accordian/Accordian"

import FooterLower from "../../Components/Footer/FooterLower"

import { FaArrowRightLong } from "react-icons/fa6";

export default function RequestForm() {



    const [isPhone, setIsPhone] = useState(window.innerWidth <= 800);


    useEffect(() => {
        const handleResize = () => {
            setIsPhone(window.innerWidth <= 800);

        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        role: '',
        email: '',
        phone: '',
        country: '',
        phoneCode: '',
        address: '',
        requirement: '',
        message: '',
        subscribe: false,
        policyAgree: false,
    });


    const [countries, setCountries] = useState([]);
    const [isDisabled, setIsDisabled] = useState(true);



    const [feedbackIndex, setFeedbackIndex] = useState(0);






    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then((response) => response.json())
            .then((data) => {
                const countryList = data.map((country) => ({
                    label: country.name,
                    value: country.name,
                    code: country.callingCodes[0] || '',
                    flag: country.flag

                }));

                setCountries(countryList);

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



    const handleCountryCodeChange = (selectedOption) => {
        setFormData((prevData) => ({
            ...prevData,
            phoneCode: selectedOption ? selectedOption.code : '',
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();


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
            phoneCode: formData.phoneCode,
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
            client: "Kevin Droid",
            position: "Operations Manager",
            company: ", Zenith Hospitality",
            heading: "Transformative Technology Partner !",
            // para: (<span> EICE Rise has <span style={{ fontWeight: "bold" }}>completely transformed</span> our operations. Their cloud ERP <span style={{ fontWeight: "bold" }}>seamlessly integrates</span> all aspects of our hotel, from reservations to dining, improving efficiency and enhancing our guest experience. We couldn’t ask for a better technology partner.</span>),
            para: "The Enterprise Suite has streamlined our operations like never before. From payroll management to inventory tracking, every module is perfectly tailored to our needs. The support team is outstanding and always ready to help. Highly recommended!",
            key: 1
        },
        {
            img: pd,
            client: "Priya Desai",
            position: "Owner",
            company: ", Gourmet haven",
            heading: "Exceptional Efficiency and Customization!",
            // para: (<span>The <span style={{ fontWeight: "bold" }}>intuitive modules</span>  offered by EICE Rise have simplified our front desk and housekeeping operations. <span style={{ fontWeight: "bold" }} >Their team’s support and innovative approach are unmatched. </span> We’ve seen remarkable growth since implementing their solutions.</span>),
            para: "The POS Suite has revolutionized our customer experience. The integration with accounts and finance has made tracking and reporting seamless. It's an invaluable tool for any growing business.",
            key: 2
        },
        {
            img: ak,
            client: "Amit Khanna",

            position: "CEO",
            company: ",Elite Club International",
            heading: "Impressive All-In-One Solution !",
            para: "Switching to the Club Suite was the best decision for our membership-driven business. The member portal and room service modules work flawlessly, saving us countless hours each week. We couldn't be happier!",

            // para: (<span>Thanks to EICE Rise, <span style={{ fontWeight: "bold" }}>we’ve streamlined processes</span> like banquet management and inventory control. The centralized platform has <span style={{ fontWeight: "bold" }}>saved us time</span> and significantly improved <span style={{ fontWeight: "bold" }} > guest satisfaction.</span> </span>),
            key: 3
        }
    ];

    const query = [
        {
            key: 1,
            question: "Q :  What will the demo include?",
            answer: "A : Our demo will provide a comprehensive walk-through of the selected suite or modules, tailored to your business needs. You'll see how the solution works in real-time and learn about its key features and benefits."
        },
        {
            key: 2,
            question: "Q : How long does the demo take?",
            answer: "A : A typical demo lasts between 30 to 45 minutes, depending on the number of suites or modules you'd like to explore."
        },
        {
            key: 3,
            question: "Q : Can I customize the demo based on my business requirements?",
            answer: "A : Absolutely! During the request, let us know your specific needs, and we'll tailor the demo to address them."
        },

    ];

    const customStyles = {
        control: (provided) => ({
            ...provided,
            paddingTop: '3px',
            paddingBottom: '3px',
            // width: '33rem',
        }),
        menu: (provided) => ({
            ...provided,
            paddingTop: '5px',
            paddingBottom: '3px',
            // width: '33rem',
        }),
    };

    const customStyles2 = {
        control: (provided) => ({
            ...provided,
            paddingTop: '3px',
            paddingBottom: '3px',
            // width: '31rem',
        }),
        menu: (provided) => ({
            ...provided,
            paddingTop: '5px',
            paddingBottom: '3px',
            // width: '31rem',
        }),
    };

    const options = [
        { value: 'Product Details or Demo', label: 'Product Details or Demo' },
        { value: 'Product Pricing', label: 'Product Pricing' },
        { value: 'Support or Training', label: 'Support or Training' },
    ];

    const handleSelectChange2 = (selectedOption) => {
        handleChange({
            target: {
                name: 'requirement',
                value: selectedOption ? selectedOption.value : '',
            },
        });
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
                        <div className={`${styles.inputContainer}`}>
                            <label>Name*</label>
                            <div>
                                <input placeholder="Enter your name" autoComplete="off" required className={`${styles.line1Input}`} type="text" name="name" value={formData.name} onChange={handleChange} />
                            </div>
                        </div>

                        <div className={`${styles.inputContainer}`}>
                            <label>Company Name*</label>
                            <div>
                                <input placeholder="Enter your company name" autoComplete="off" required className={`${styles.line1Input}`} type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.line2}`}>
                        <div className={`${styles.inputContainer}`}>
                            <label>Role/Designation (optional)</label>
                            <div>
                                <input autoComplete="off" placeholder="Enter Your Role ( e.g Manager , Director)" className={`${styles.line2Input}`} type="text" name="role" value={formData.role} onChange={handleChange} />
                            </div>
                        </div>

                        <div className={`${styles.inputContainer}`}>
                            <label>Email ID*</label>
                            <div>
                                <input placeholder="Enter Your Bussiness Email Address" autoComplete="off" required className={`${styles.line2Input}`} type="email" name="email" value={formData.email} onChange={handleChange} />
                            </div>
                        </div>

                        <div className={`${styles.inputContainer}`}>
                            <label>Phone Number*</label>
                            <div className={`${styles.phoneNoAndCodeBox}`}>
                                <div >
                                    <Select
                                        className={`${styles.phoneCode}`}
                                        id="countryCode"
                                        placeholder="Code"
                                        options={countries.map(country => ({
                                            // label: (
                                            //     <div style={{ display: 'flex', alignItems: 'center' }}>
                                            //         <Flag code={country.code} style={{ width: 20, height: 15, marginRight: 8 }} />
                                            //         +{country.code}
                                            //     </div>
                                            // ),
                                            label: `+${country.code}`,
                                            value: country.value,
                                            code: country.code,
                                        }))}
                                        isSearchable={true}
                                        styles={customStyles2}




                                        value={countries.find(option => option.code === formData.phoneCode) ? {
                                            label: `+${formData.phoneCode}`,
                                            value: formData.phoneCode
                                        } : null}
                                        onChange={handleCountryCodeChange}
                                    />
                                </div>
                                <div className={`${styles.phoneNoInputBox}`} >
                                    <input placeholder="Enter Your Phone No" autoComplete="off" required className={`${styles.phoneNo}`} type="tel" name="phone" value={formData.phone} onChange={handleChange} pattern="[0-9]{10}" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={`${styles.line3}`}>
                        <div className={`${styles.inputContainer}`}>
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

                        <div className={`${styles.inputContainer}`}>
                            <label>Address*</label>
                            <div>
                                <input placeholder="Enter Your Address" autoComplete="off" required className={`${styles.line3Input}`} type="text" name="address" value={formData.address} onChange={handleChange} />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.requirement} ${styles.inputContainer} `}>
                        <label>Requirement*</label>
                        <div>


                            {/* <select
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
                            </select> */}

                            <Select
                                id="requirement"
                                name="requirement"
                                options={options}
                                value={options.find(option => option.value === formData.requirement)}
                                onChange={handleSelectChange2}
                                className={styles.requirementInput}
                                placeholder="-- Please Select --"
                                styles={customStyles2}
                            />


                        </div>
                    </div>

                    <div className={`${styles.messageTextArea}  ${styles.inputContainer} `}>
                        <div>
                            <label htmlFor="message">Message:</label>
                        </div>
                        <div>
                            <textarea
                                className={`${styles.messageTextAreaInput} font1`}
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
                            <span className={`${styles.checkBoxNote}`}>Recieve EICE Rise Products, Services, Events and more</span>
                        </div>

                        <div className={`${styles.checkBox}`}>
                            <input
                                required
                                type="checkbox"
                                name="policyAgree"
                                checked={formData.policyAgree}
                                onChange={handleChange}
                            />
                            <span className={`${styles.checkBoxNote}`}>I have agreed to EICE Technology Privacy policy</span>
                        </div>
                    </div>

                    <div className={`${styles.submitButtonConatiner}`}>
                        <div className={`${styles.buttonbox}`}>
                            <input
                                required
                                type="submit"

                                className={`${styles.buttonInputBox} font3`}
                            // style={{ fontSize: "17px", border: "none", color: "white", background: "rgba(1, 176, 241, 1)" }}
                            />


                            <div className={`${styles.demoArrowButton}`}>

                                <FaArrowRightLong />
                            </div>
                        </div>
                    </div>
                </form>
            </div>


            {isPhone ? (<div className={`${styles.reviewSectionForPhone}`}>
                <section className={`${styles.section5} globalSectionSize`}>

                    <div className={`${styles.clientHeading} font3`}>
                        What our clients say  ?
                    </div>

                    <main className={`${styles.feedBack}`}>


                        <article key={feedback[feedbackIndex].key} className={`${styles.feedBackArticleBox} font1`} >

                            <figure >

                                <div style={{ textAlign: "center" }}  >
                                    <img style={{ width: "28%" }} src={feedback[feedbackIndex].img} alt="" />
                                </div>

                                <figcaption className={`${styles.clientInfo}`} > <span >-- {feedback[feedbackIndex].client} ,</span> <span style={{ fontWeight: "bold" }} >{feedback[feedbackIndex].position}</span>  <span>{feedback[feedbackIndex].company}</span></figcaption>

                            </figure>
                            <div>
                                <div className={`${styles.quoteHeading} blueTextGlobalClass font3`}>
                                    "{
                                        feedback[feedbackIndex].heading
                                    }"

                                </div>
                            </div>



                            <p style={{ textAlign: "center", lineHeight: "1.8rem" }}>{feedback[feedbackIndex].para}</p>

                        </article>

                    </main>


                    <div className="indicators">
                        {feedback.map((_, index) => (
                            <span
                                key={index}
                                className={`indicator ${feedbackIndex === index ? 'active' : ''}`}
                                onClick={() => setFeedbackIndex(index)}
                            ></span>
                        ))}
                    </div>


                </section>
            </div>) : (<div className={`${styles.reviewSection}`}>
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

                                    <figcaption style={{ textAlign: "center", fontSize: "13px" }} > <span >--{item.client} ,</span> <span style={{ fontWeight: "bold" }}>{item.position}</span> <span>{item.company}</span></figcaption>

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
            </div>)}






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

                        <div >

                            <div className={`${styles.key} font3`}>Email :</div>
                            <div className={`${styles.value} font1 `}  >info@eicetechnology.com</div>

                        </div>
                        <div>

                            <div className={`${styles.key} font3 `}>Phone no :</div>
                            <div className={`${styles.value} font1 `}>+91 120 311 0836</div>

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


            <section className={`${styles.contactUsBackgroundPhone}`}>
                <div className={`${styles.ContactUsSectionPhone} globalSectionSize  `}>

                    <div className={`${styles.contactUsHeading} font3`}>
                        Contact Us
                    </div>

                    <div className={`${styles.contactUsBoxPhone} font1 `}>

                        <div className={`${styles.contactSubBox1}`}>
                            <div className={`${styles.contactDetailBox}`}>

                                <div className={`${styles.key} font3`}>Email </div>
                                <div className={`${styles.value} font1 `}  >info@eicetechnology.com</div>

                            </div>

                            <div className={`${styles.contactDetailBox}`}>

                                <div className={`${styles.key} font3`}>Address (India) </div>
                                <div className={`${styles.value} font1 `}>B-8 Second Floor   </div>
                                <div className={`${styles.value} font1 `}> Sec-60, Noida 201301</div>

                            </div>
                        </div>


                        <div className={`${styles.contactSubBox1}`}>

                            <div className={`${styles.contactDetailBox}`}>

                                <div className={`${styles.key} font3 `}>Phone no </div>
                                <div className={`${styles.value} font1 `}> +91 120 311 0836</div>

                            </div>

                            <div className={`${styles.contactDetailBox}`} >
                                <div className={`${styles.key} font3`}>Address (USA) </div>
                                <div className={`${styles.value} font1 `}>440 Cobia Drive, #901 </div>
                                <div className={`${styles.value} font1 `}>katy, Texas 77494</div>

                            </div>
                        </div>




                    </div>

                </div>
            </section>


            <section className={`${styles.LaptopImgSection}`}>
                <div className={`${styles.LaptopImg}`}>
                    <img src={laptop} alt="footer" />
                </div>
            </section>

            <section className={`${styles.LaptopImgSectionPhone}`}>
                <div className={`${styles.LaptopImgPhone}`}>

                </div>
            </section>

            <FooterLower />
        </>
    );
}
