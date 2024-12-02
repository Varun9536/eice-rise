import style from "./Styles/payrol.module.css"


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

export default function Payroll() {





  const features = [
    {
        key: 1,
        heading: "Automated Payroll Processing",
        desc: "Automates salary calculations, deductions, bonuses, and taxes, ensuring timely and accurate payroll processing every time.",
        img: ufi, // Taken from the previous features array
        width: "64px", // Taken from the previous features array
    },
    {
        key: 2,
        heading: "Employee Data Management",
        desc: "Centralized storage of employee records, including salary details, benefits, tax information, and working hours, ensuring easy access and data accuracy.",
        img: rtmm, // Taken from the previous features array
        width: "65px", // Taken from the previous features array
    },
    {
        key: 3,
        heading: "Customizable Pay Structures",
        desc: "Define multiple earnings & deduction pay types, to accommodate various employee compensation models.",
        img: oc, // Taken from the previous features array
        width: "54px", // Taken from the previous features array
    },
    {
        key: 4,
        heading: "Tax Compliance and Reporting",
        desc: "Automatically calculates taxes based on current laws, generates tax reports, and ensures compliance regulations.",
        img: tm, // Taken from the previous features array
        width: "65px", // Taken from the previous features array
    },
    {
        key: 5,
        heading: "Leave and Attendance Management",
        desc: "Integrates with time tracking systems to manage employee leave, absences, and overtime, ensuring accurate payroll calculations.",
        img: ips, // Taken from the previous features array
        width: "65px", // Taken from the previous features array
    },
    {
        key: 6,
        heading: "Direct Deposit and Payment Processing",
        desc: "Enables direct deposit to employees' bank accounts, reducing manual payment efforts and improving payment accuracy.",
        img: it, // Taken from the previous features array
        width: "63px", // Taken from the previous features array
    },
    
];






const benefits = [
  {
      key: 1,
      heading: "Time Efficiency",
      desc: "Automates payroll tasks, reducing manual effort and the time spent on calculating, processing, and distributing payroll.",
      img: b1, // Reused from the previous benefits array
      width: "79%", // Reused from the previous benefits array
      imgwidth: "356px" // Reused from the previous benefits array
  },
  {
      key: 2,
      heading: "Accurate Payroll Processing",
      desc: "Reduces errors by automating calculations and ensuring compliance with tax laws, minimizing the risk of overpayments, underpayments, or compliance issues.",
      img: b2, // Reused from the previous benefits array
      width: "86%", // Reused from the previous benefits array
      imgwidth: "315px" // Reused from the previous benefits array
  },
  {
      key: 3,
      heading: "Improved Compliance",
      desc: "Helps businesses stay up-to-date with changing tax regulations and labor laws, ensuring compliance and reducing legal risks.",
      img: b3, // Reused from the previous benefits array
      width: "75%", // Reused from the previous benefits array
      imgwidth: "410px" // Reused from the previous benefits array
  },
  {
      key: 4,
      heading: "Cost Savings",
      desc: "By automating payroll and reducing errors, businesses can save on administrative costs and avoid costly penalties for non-compliance.",
      img: b4, // Reused from the previous benefits array
      width: "86%", // Reused from the previous benefits array
      imgwidth: "642px" // Reused from the previous benefits array
  },
  {
      key: 5,
      heading: "Employee Satisfaction",
      desc: "Ensures timely and accurate payments, boosting employee trust and satisfaction.",
      img: b5, // Reused from the previous benefits array
      width: "88%", // Reused from the previous benefits array
      imgwidth: "635px" // Reused from the previous benefits array
  },
  {
      key: 6,
      heading: "Real-Time Insights",
      desc: "Provides detailed reports on payroll, taxes, and labor costs, helping businesses make informed financial decisions and manage budgets effectively.",
      img: b3, // Reused from the previous benefits array
      width: "75%", // Reused from the previous benefits array
      imgwidth: "410px" // Reused from the previous benefits array
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
              <span style={{ color: "#012060" }}>PAYROLL</span>
              {/* <span style={{ color: "#01B0F1" }} className="blueTextGlobalClass"> MANAGEMENT</span> */}
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

              The Payroll Management System automates payroll processing, simplifying salary, deduction, bonus, and tax management while ensuring regulatory compliance. It integrates with HR and accounting platforms to reduce errors, save time, and provide real-time payroll insights for better decision-making.


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

