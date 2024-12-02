

import style from "./Styles/employeeSuite.module.css"


import icon1 from "../../assets/insidePages/pos/posPage/section3/icon1.png"
import icon2 from "../../assets/insidePages/pos/posPage/section3/icon2.png"
import icon3 from "../../assets/insidePages/pos/posPage/section3/icon3.png"



// features
import ips from "../../assets/insidePages/pos/posPage/feature/ips.png"
import it from "../../assets/insidePages/pos/posPage/feature/it.png"
import kds from "../../assets/insidePages/pos/posPage/feature/kds.png"
import oc from "../../assets/insidePages/pos/posPage/feature/oc.png"
import plp from "../../assets/insidePages/pos/posPage/feature/plp.png"
import rtmm from "../../assets/insidePages/pos/posPage/feature/rtmm.png"
import rtsr from "../../assets/insidePages/pos/posPage/feature/rtsr.png"
import tm from "../../assets/insidePages/pos/posPage/feature/tm.png"
import ufi from "../../assets/insidePages/pos/posPage/feature/ufi.png"



// benifits

import b1 from "../../assets/insidePages/pos/posPage/benefit/b1.webp"
import b2 from "../../assets/insidePages/pos/posPage/benefit/b2.webp"
import b3 from "../../assets/insidePages/pos/posPage/benefit/b3.webp"
import b4 from "../../assets/insidePages/pos/posPage/benefit/b4.webp"
import b5 from "../../assets/insidePages/pos/posPage/benefit/b5.webp"



import laptop from "../../assets/insidePages/pos/posPage/laptop.webp"

import Accordion from "../../Components/Accordian/Accordian.jsx"

import Footer3 from "../../Components/Footer/Footer3.jsx"

import { FaArrowRightLong } from "react-icons/fa6";

export default function EmployeeSuite() {





  const features = [
    {
        key: 1,
        heading: "Personal Information Management",
        desc: "Employees can update their contact details, emergency contacts, and tax information, ensuring accurate and up-to-date records.",
        img: ufi, // Replace with the appropriate image from your existing feature array
        width: "64px", // Adjust to match the previous feature array
    },
    {
        key: 2,
        heading: "Payroll and Compensation",
        desc: "Employees can access payslips, track salary history, and view deductions and bonuses, providing full transparency on compensation.",
        img: rtmm, // Replace with the appropriate image from your existing feature array
        width: "65px", // Adjust to match the previous feature array
    },
    {
        key: 3,
        heading: "Leave and Attendance Management",
        desc: "Employees can submit leave requests, track attendance, and view leave balances, making time-off management easier.",
        img: oc, // Replace with the appropriate image from your existing feature array
        width: "54px", // Adjust to match the previous feature array
    },
    {
        key: 4,
        heading: "Training and Development",
        desc: "Employees can explore training programs, track progress, and enroll in courses to enhance their professional skills.",
        img: tm, // Replace with the appropriate image from your existing feature array
        width: "65px", // Adjust to match the previous feature array
    },
    {
        key: 5,
        heading: "Document Access",
        desc: "Employees can access important documents such as policies, contracts, benefits, and company announcements, ensuring quick access to essential information.",
        img: ips, // Replace with the appropriate image from your existing feature array
        width: "65px", // Adjust to match the previous feature array
    },
    {
        key: 6,
        heading: "Company Announcements and News",
        desc: "Employees stay updated on company news, policy changes, and upcoming events, fostering better communication within the organization.",
        img: it, // Replace with the appropriate image from your existing feature array
        width: "63px", // Adjust to match the previous feature array
    },
    {
        key: 7,
        heading: "Performance Management",
        desc: "Employees can track their goals, review feedback, and collaborate with managers to set development plans.",
        img: ufi, // Replace with the appropriate image from your existing feature array
        width: "64px", // Adjust to match the previous feature array
    },
    {
        key: 8,
        heading: "Benefits Management",
        desc: "Employees can manage their benefits like health insurance, retirement plans, and wellness programs, ensuring they stay informed of all available options.",
        img: rtmm, // Replace with the appropriate image from your existing feature array
        width: "65px", // Adjust to match the previous feature array
    },
    {
        key: 9,
        heading: "Support and Requests",
        desc: "Employees can submit HR inquiries, request support, or raise issues through the portal, streamlining communication and issue resolution.",
        img: oc, // Replace with the appropriate image from your existing feature array
        width: "54px", // Adjust to match the previous feature array
    }
];






const benefits = [
  {
      key: 1,
      heading: "Improved Efficiency",
      desc: "Reduces administrative work by centralizing HR services and allowing employees to manage their own data.",
      img: b1, // Updated with new image reference
      width: "79%", // Added width
      imgwidth: "356px", // Added imgwidth
  },
  {
      key: 2,
      heading: "Enhanced Communication",
      desc: "Ensures clear communication about company policies, events, and updates.",
      img: b2, // Updated with new image reference
      width: "86%", // Added width
      imgwidth: "315px", // Added imgwidth
  },
  {
      key: 3,
      heading: "Employee Empowerment",
      desc: "Increases engagement by giving employees control over their personal and professional information.",
      img: b3, // Updated with new image reference
      width: "75%", // Added width
      imgwidth: "410px", // Added imgwidth
  },
  {
      key: 4,
      heading: "Transparency and Trust",
      desc: "Promotes trust by providing full visibility into payroll, benefits, and performance.",
      img: b4, // Updated with new image reference
      width: "86%", // Added width
      imgwidth: "642px", // Added imgwidth
  },
  {
      key: 5,
      heading: "Time Savings",
      desc: "Automates HR processes, freeing up time for HR teams to focus on strategic tasks.",
      img: b5, // Updated with new image reference
      width: "88%", // Added width
      imgwidth: "635px", // Added imgwidth
  },
  {
      key: 6,
      heading: "Compliance and Security",
      desc: "Ensures secure storage and compliance with data privacy regulations, protecting sensitive employee information.",
      img: b1, // Reused first image for consistency
      width: "79%", // Reused width from first item
      imgwidth: "356px", // Reused imgwidth from first item
  }
];













  const query = [
    {
      question: "Q : How does the Dining (POS) module handle split bills or group payments?",
      answer: "A: The Dining (POS) module offers an intuitive split-billing feature, allowing guests to divide payments among multiple parties or payment methods seamlessly."
    },
    {
      question: "Q : Can the module manage menu customization and promotions in real-time?",
      answer: "A : Absolutely. The system allows real-time updates to menus, pricing, and promotional offers, ensuring your dining services are always up-to-date and aligned with your marketing strategies."
    },
    {
      question: "Q : Does the Dining (POS) module support table reservations and service tracking?",
      answer: "A : Yes, the module includes features for managing table reservations and tracking service status, helping staff deliver timely and personalized guest experiences."
    },
    {
      question: "Q : What analytics and reporting capabilities does the Dining (POS) module offer?",
      answer: "A : The system provides detailed insights into sales trends, popular menu items, and customer preferences through customizable reports, empowering data-driven decision-making."
    }
  ];





  return (
    <>



      <section>
        <div className={`${style.section1} insidePageUpperSection`}>
          <div style={{ width: "33%" }}>
            <div className={`${style.section1Heading} font4`}>
              <span style={{ color: "#012060" }}>EMPLOYEE </span>
              <span style={{ color: "#01B0F1" }} className="blueTextGlobalClass">SUITE</span>
            </div>
          </div>

          <div className={style.section1ImgBox}>

          </div>
        </div>

      </section>


      <section style={{ backgroundColor: "#f5f5f5" }}>
        <div className={`${style.section2} font4 globalSectionSize`}>

          <div className={style.section2IconAndName}>
            <div className={`${style.section2Icon}`}>
              <img style={{ width: "100%" }} src={icon1} alt="" />
            </div>

            <div className={`${style.iconName} `}>

              <div> Effortless</div>
              <div> Operations</div>
            </div>
          </div>



          <div className={style.section2IconAndName}>

            <div className={`${style.section2Icon}`}>
              <img style={{ width: "100%" }} src={icon2} alt="" />
            </div>

            <div className={`${style.iconName} `}>



              <div> Personalized</div>
              <div>Experience</div>

            </div>
          </div>



          <div className={style.section2IconAndName}>

            <div className={`${style.section2Icon}`}>
              <img style={{ width: "100%" }} src={icon3} alt="" />
            </div>

            <div className={`${style.iconName}`}>


              <div>
                Smart
              </div>

              <div>
                Insights
              </div>
            </div>

          </div>



        </div>
      </section>



      <section>

        <div className={`${style.section3}`}>



          <div className={`${style.blueBoxSetion3}`}>

            <div className={`${style.laptopImgSection3}`}>
              <div className={`${style.laptopImgBox}`} >
                <img style={{ width: "100%" }} src={laptop} alt="" />
              </div>
            </div>


            <div className={`${style.section3Para} font4`}>
              <div className={`${style.paragraph}`}>

              The Employee Portal provides centralized access to work-related information, resources, and services. It streamlines HR processes, boosts engagement, and promotes transparency, enhancing overall productivity and the employee experience.

              </div>

            </div>

            {/* <div style={{overflow : "hidden"}} >
            <div className={`${style.section3Spiral}`}  >
                <img style={{width : "100%" }} src={spiral} alt="" />
            </div>
        </div> */}

          </div>

        </div>
      </section>





      <section >
        <div className={`${style.section4} globalSectionSize`}>

          <div className={`${style.section4heading} font4`}>Key Features</div>

          <div className={`${style.featureContainer}`}>

            {features.map((item) =>
            (
              <div key={item.key} className={`${style.featureInnerBox} font4`}>

                <div className={`${style.headingAndIconFeatures}`}>

                  <div style={{ width: item.width }}>
                    <img style={{ width: "100%" }} src={item.img} alt="" />
                  </div>

                  <div className={`${style.featureHeading}`}>
                    <div>
                      {item.heading}
                    </div>

                    <div>
                      {item.heading2}
                    </div>

                  </div>

                </div>

                <div className={`${style.featureDesc}`}>
                  {item.desc}
                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      <section className={`${style.requestDemoBtn}`}>

        <div style={{ display: "flex", justifyContent: "center" }} className="globalSectionSize">
          <div className={`${style.demoButton} font1`}>
            <div > Request a Demo </div>
            <div className={`${style.demoArrowButton}`}> <FaArrowRightLong /></div>
          </div>

        </div>

      </section>



      <section style={{ background: "#f5f5f5" }} >
        <div className={`${style.section5} font4 globalSectionSize`}>


          <div className={`${style.section5heading} font4`}>Benefits</div>
          <div className={`${style.benifitContainer}`}>

            {benefits.map((item, i) => (


              (i + 1) % 2 !== 0 ? (<div className={`${style.innerBenifitBox}`}>

                <div style={{ width: item.imgwidth }} className={`${style.benefitImages}`} >
                  <img style={{ width: "100%" }} src={item.img} alt="" />
                </div>

                <div className={`${style.benefitHeadingAndDesc}`}>

                  <div className={`${style.innerHeadingBenifit}`}>
                    {item.heading}
                  </div>
                  <p style={{ width: item.width }} className={`${style.innerDescBenifit}`}>
                    {item.desc}
                  </p>

                </div>

              </div>) : (<div className={`${style.innerBenifitBox2}`}>

                <div style={{ width: item.imgwidth }} className={`${style.benefitImages}`} >
                  <img style={{ width: "100%" }} src={item.img} alt="" />
                </div>

                <div className={`${style.benefitHeadingAndDesc}`}>
                  <div className={`${style.innerHeadingBenifit}`}>
                    {item.heading}
                  </div>
                  <p style={{ width: item.width }} className={`${style.innerDescBenifit}`}>
                    {item.desc}
                  </p>
                </div>

              </div>)
            )

            )}

          </div>

        </div>
      </section>



      <section >
        <div className={`${style.FAQsection} globalSectionSize font4`}>
          <div className={`${style.FAQHeading}`}>Frequently Asked Questions</div>


          <div className={style.FAQContainer}>
            {query.map((faq, index) => (
              <Accordion key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

        </div>
      </section>


      <div >
        <Footer3 />

      </div>

    </>
  )
}
