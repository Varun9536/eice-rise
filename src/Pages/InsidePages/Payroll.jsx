import style from "./Styles/payrol.module.css"


import icon1 from "../../assets/insidePages/pos/posPage/section3/icon1.png"
import icon2 from "../../assets/insidePages/pos/posPage/section3/icon2.png"
import icon3 from "../../assets/insidePages/pos/posPage/section3/icon3.png"





// features

import app from "../../assets/insidePages/pay/payFeatures/app.png"
import cps from "../../assets/insidePages/pay/payFeatures/cps.png"
import ddpp from "../../assets/insidePages/pay/payFeatures/ddpp.png"
import edm from "../../assets/insidePages/pay/payFeatures/edm.png"
import lam from "../../assets/insidePages/pay/payFeatures/lam.png"
import tcr from "../../assets/insidePages/pay/payFeatures/tcr.png"






import appb from "../../assets/insidePages/pay/payrollBenefit/app.webp"
import cs from "../../assets/insidePages/pay/payrollBenefit/cs.webp"
import es from "../../assets/insidePages/pay/payrollBenefit/es.webp"
import ic from "../../assets/insidePages/pay/payrollBenefit/ic.webp"
import te from "../../assets/insidePages/pay/payrollBenefit/te.webp"



import laptop from "../../assets/insidePages/pos/posPage/laptop.webp"

import Accordion from "../../Components/Accordian/Accordian.jsx"


import { FaArrowRightLong } from "react-icons/fa6";
import FooterLower from "../../Components/Footer/FooterLower.jsx"
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx"

import footer from "../../assets/footer/foot.webp"

export default function Payroll() {





  const features = [
    {
      key: 1,
      heading: "Automated Payroll Processing",
      desc: "Automates salary calculations, deductions, bonuses, and taxes, ensuring timely and accurate payroll processing every time.",
      img: app, // Taken from the previous features array
      width: "58px", // Taken from the previous features array
    },
    {
      key: 2,
      heading: "Employee Data Management",
      desc: "Centralized storage of employee records, including salary details, benefits, tax information, and working hours, ensuring easy access and data accuracy.",
      img: edm, // Taken from the previous features array
      width: "59px", // Taken from the previous features array
    },
    {
      key: 3,
      heading: "Customizable Pay Structures",
      desc: "Define multiple earnings & deduction pay types, to accommodate various employee compensation models.",
      img: cps, // Taken from the previous features array
      width: "54px", // Taken from the previous features array
    },
    {
      key: 4,
      heading: "Tax Compliance and Reporting",
      desc: "Automatically calculates taxes based on current laws, generates tax reports, and ensures compliance regulations.",
      img: tcr, // Taken from the previous features array
      width: "62px", // Taken from the previous features array
    },
    {
      key: 5,
      heading: "Leave and Attendance Management",
      desc: "Integrates with time tracking systems to manage employee leave, absences, and overtime, ensuring accurate payroll calculations.",
      img: lam, // Taken from the previous features array
      width: "71px", // Taken from the previous features array
    },
    {
      key: 6,
      heading: "Direct Deposit and Payment Processing",
      desc: "Enables direct deposit to employees' bank accounts, reducing manual payment efforts and improving payment accuracy.",
      img: ddpp, // Taken from the previous features array
      width: "63px", // Taken from the previous features array
    },

  ];






  const benefits = [
    {
      key: 1,
      heading: "Time Efficiency",
      desc: "Automates payroll tasks, reducing manual effort and the time spent on calculating, processing, and distributing payroll.",
      img: te,
    },
    {
      key: 2,
      heading: "Accurate Payroll Processing",
      desc: "Reduces errors by automating calculations and ensuring compliance with tax laws, minimizing the risk of overpayments, underpayments, or compliance issues.",
      img: appb,

    },
    {
      key: 3,
      heading: "Improved Compliance",
      desc: "Helps businesses stay up-to-date with changing tax regulations and labor laws, ensuring compliance and reducing legal risks.",
      img: ic,
    },
    {
      key: 4,
      heading: "Cost Savings",
      desc: "By automating payroll and reducing errors, businesses can save on administrative costs and avoid costly penalties for non-compliance.",
      img: cs,
    },

    {
      key: 5,
      heading: "Employee Satisfaction",
      desc: "Ensures timely and accurate payments, boosting employee trust and satisfaction.",
      img: es,
    },



    // {
    //   key: 6,
    //   heading: "Real-Time Insights",
    //   desc: "Provides detailed reports on payroll, taxes, and labor costs, helping businesses make informed financial decisions and manage budgets effectively.",
    //   img: , 
    // }


  ];




  const query = [
    {
      key: 1,
      question: "Q : How does the Payroll Management System automate payroll processing?",
      answer: "A : The system automates salary calculations, deductions, bonuses, and taxes, ensuring timely and accurate payroll processing."
    },
    {
      key: 2,
      question: "Q : Can employees access their payroll information?",
      answer: "A : Yes, employees can view their payslips, salary history, deductions, and bonuses through the system, providing transparency."
    },
    {
      key: 3,
      question: "Q : Does the system ensure compliance with tax regulations?",
      answer: "A : Yes, the system automatically calculates taxes according to current laws and generates tax reports to ensure compliance with regulations."
    },
    {
      key: 4,
      question: "Q : Can the system handle direct deposit payments?",
      answer: "A : Yes, the system supports direct deposit to employees’ bank accounts, improving accuracy and reducing manual payment efforts."
    },
    {
      key: 5,
      question: "Q : How does the system help businesses manage labor costs?",
      answer: "A : It provides detailed reports on payroll expenses, taxes, and deductions, helping businesses track labor costs and manage budgets effectively."
    }
  ];












  const footerUpperText = {

    text1: "Streamlined payrol",
    text2: "",
    text3: "processing with accuracy, compliance, and efficiency",
    img: footer
  }





  return (
    <>



      <section>
        <div className={`${style.section1} insidePageUpperSection`}>
          <div className={`${style.pageHeadingBox}`}>
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





      {/* <section style={{ background: "#f5f5f5" }} >
        <div className={`${style.section5} font4 globalSectionSize`}>


          <div className={`${style.section5heading} font4`}>Benefits</div>
          {benefits.map((item, index) =>
          (

            index % 2 === 0 ? (<div className='GlobalBenefitBox1'>


              <div style={{ width: "25%" }}>
                <img style={{ width: "100%" }} src={item.img} alt="" />
              </div>

              <div className='GlobalBenefitTextBox' >
                <div className={`${style.innerHeadingBenifit}`}>{item.heading}</div>
                <div className={`${style.innerDescBenifit}`}>{item.desc}</div>
              </div>


            </div>) : (<div className='GlobalBenefitBox2'>


              <div style={{ width: "25%" }}>
                <img style={{ width: "100%" }} src={item.img} alt="" />
              </div>

              <div className='GlobalBenefitTextBox' >
                <div className={`${style.innerHeadingBenifit}`}>{item.heading}</div>
                <div className={`${style.innerDescBenifit}`}>{item.desc}</div>
              </div>


            </div>)


          ))}

        </div>
      </section> */}

<section style={{ background: "#f5f5f5" }} >
                <div className={`${style.section5} font4 globalSectionSize`}>


                    <div className={`${style.section5heading} font4`}>Benefits</div>
                    {benefits.map((item, index) =>
                    (

                        index % 2 === 0 ? (<div className='GlobalBenefitBox1'>


                            <div className="GlobalBenefitImgBox" >
                                <img style={{ width: "100%" }} src={item.img} alt="" />
                            </div>

                            <div className='GlobalBenefitTextBox' >
                                <div className={`${style.innerHeadingBenifit}`}>{item.heading}</div>
                                <div className={`${style.innerDescBenifit}`}>{item.desc}</div>
                            </div>


                        </div>) : (<div className='GlobalBenefitBox2'>


                            <div className="GlobalBenefitImgBox">
                                <img style={{ width: "100%" }} src={item.img} alt="" />
                            </div>

                            <div className='GlobalBenefitTextBox' >
                                <div className={`${style.innerHeadingBenifit}`}>{item.heading}</div>
                                <div className={`${style.innerDescBenifit}`}>{item.desc}</div>
                            </div>


                        </div>)


                    ))}

                </div>
            </section>



      <section >
        <div className={`${style.FAQsection} globalSectionSize font4`}>
          <div className={`${style.FAQHeading}`}>Frequently Asked Questions</div>


          <div className={style.FAQContainer}>
            {query.map((item) => (
              <Accordion key={item.key} question={item.question} answer={item.answer} />
            ))}
          </div>

        </div>
      </section>


      <div >
        <FooterUpperPart text1={footerUpperText.text1} text2={footerUpperText.text2} text3={footerUpperText.text3} img={footerUpperText.img} />
        <FooterLower />

      </div>

    </>
  )
}

