
import style from "./Styles/accountAndFinance.module.css"



import afw from "../../assets/insidePages/account/financeSection2/afw.png"
import ddfi from "../../assets/insidePages/account/financeSection2/ddfi.png"
import rtet from "../../assets/insidePages/account/financeSection2/rtet.png"




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


import  ara from "../../assets/insidePages/account/icon/ara.png"
import  bf from "../../assets/insidePages/account/icon/bf.png"
import  cf from "../../assets/insidePages/account/icon/cf.png"
import  cfm from "../../assets/insidePages/account/icon/cfm.png"
import  iib from "../../assets/insidePages/account/icon/iib.png"
import  pgi from "../../assets/insidePages/account/icon/pgi.png"
import  rtfd from "../../assets/insidePages/account/icon/rtfd.png"
import  tmc from "../../assets/insidePages/account/icon/tmc.png"
import  vsp from "../../assets/insidePages/account/icon/vsp.png"



// benifits

import b1 from "../../assets/insidePages/pos/posPage/benefit/b1.webp"
import b2 from "../../assets/insidePages/pos/posPage/benefit/b2.webp"
import b3 from "../../assets/insidePages/pos/posPage/benefit/b3.webp"
import b4 from "../../assets/insidePages/pos/posPage/benefit/b4.webp"
import b5 from "../../assets/insidePages/pos/posPage/benefit/b5.webp"



import ac from "../../assets/insidePages/account/financebenefit/ac.webp"
import ca from "../../assets/insidePages/account/financebenefit/ca.webp"
import cc from "../../assets/insidePages/account/financebenefit/cc.webp"
import icfm from "../../assets/insidePages/account/financebenefit/icfm.webp"
import oe from "../../assets/insidePages/account/financebenefit/oe.webp"



import laptop from "../../assets/insidePages/pos/posPage/laptop.webp"

import Accordion from "../../Components/Accordian/Accordian.jsx"

import Footer3 from "../../Components/Footer/Footer3.jsx"

import { FaArrowRightLong } from "react-icons/fa6";

export default function AccountAndFinance() {



  const features = [
    {
      key: 1,
      heading: "Comprehensive Financial Management",
      desc: "Manage all core financial functions, including accounts receivable, accounts payable, debit & credit notes, taxation, balance sheets, and general ledger. Streamline processes and ensure timely payments and collections.",
      img: cfm,
      width: "64px",
    },
    {
      key: 2,
      heading: "Real-Time Financial Data",
      desc: "Access up-to-date financial data at any time, empowering managers to make data-driven decisions that enhance profitability and financial health.",
      img: rtfd,
      width: "65px",
    },
    {
      key: 3,
      heading: "Integrated Invoicing and Billing",
      desc: "Automatically generate invoices and billing statements for room bookings, event bookings, dining, and more. Customizable invoice templates ensure branding consistency and accuracy.",
      img: iib,
      width: "54px",
    },
    {
      key: 4,
      heading: "Tax Management and Compliance",
      desc: "Stay compliant with regional and international tax regulations. Automate tax calculations based on local laws and apply them seamlessly to invoices and payments.",
      img: tmc,
      width: "65px",
    },
    {
      key: 5,
      heading: "Advanced Reporting and Analytics",
      desc: "Create custom financial reports that provide deeper insights into revenue, expenditures, profit margins, etc. Analyze trends and generate forecasts to support future planning.",
      img: ara,
      width: "65px",
    },
    {
      key: 6,
      heading: "Payment Gateway Integration",
      desc: "Integrated with secure payment gateways, businesses can process payments efficiently and track financial transactions in real-time.",
      img: pgi,
      width: "63px",
    },
    {
      key: 7,
      heading: "Budgeting and Forecasting",
      desc: "Plan and monitor your budget effectively with integrated forecasting tools. Track expenses, and revenues, and allocate resources for better financial planning.",
      img: bf,
      width: "70px",
    },
    {
      key: 8,
      heading: "Cash Flow Management",
      desc: "Monitor cash flow with real-time reporting to ensure liquidity, helping businesses manage operational costs and optimize cash reserves.",
      img: cfm,
      width: "65px",
    },
    {
      key: 9,
      heading: "Vendor and Supplier Payments",
      desc: "Easily manage payments to vendors and suppliers, track due invoices, and ensure timely settlements with the automated payment tracking system.",
      img: vsp,
      width: "60px",
    },

  ];




  const benefits = [
    {
      key: 1,
      heading: "Financial Accuracy",
      desc: "Reduce human error in financial reporting and ensure accuracy in all transactions and documentation.",
      img: ac,

    },
    {
      key: 2,
      heading: "Operational Efficiency",
      desc: "Automate routine financial tasks, freeing up time for finance teams to focus on strategic decision-making.",
      img: oe

    },
    {
      key: 3,
      heading: "Cost Control",
      desc: "Monitor expenses, analyze spending patterns, and optimize cost management across departments.",
      img: cc,

    },
    {
      key: 4,
      heading: "Compliance Assurance",
      desc: "Stay compliant with industry standards and tax regulations, avoiding penalties and ensuring financial transparency.",
      img: ca,

    },
    {
      key: 5,
      heading: "Improved Cash Flow Management",
      desc: "With real-time tracking and reporting, businesses can manage their cash flow more effectively, improving financial stability.",
      img: icfm,

    },
    // {
    //   key: 6,
    //   heading: "Enhanced Decision Making",
    //   desc: "Gain valuable financial insights that drive informed decision-making and business growth.",
    //   img: b1,

    // },
    // {
    //   key: 7,
    //   heading: "Seamless Integration with Other Modules",
    //   desc: "Fully integrates with other EICE Rise ERP modules (like Room Booking, Banquet & Billing, Dining (POS), Member Portal, Employee Portal, Payroll, User & Store Inventory, Food & Beverage, and Purchase & Vendor Portal) for consistent data flow and synchronized financial records.",
    //   img: b2,
    // }
  ];












  const query = [
    {
      key: 1,
      question: "Q : How does the Dining (POS) module handle split bills or group payments?",
      answer: "A: The Dining (POS) module offers an intuitive split-billing feature, allowing guests to divide payments among multiple parties or payment methods seamlessly."
    },
    {
      key: 2,
      question: "Q : Can the module manage menu customization and promotions in real-time?",
      answer: "A : Absolutely. The system allows real-time updates to menus, pricing, and promotional offers, ensuring your dining services are always up-to-date and aligned with your marketing strategies."
    },
    {
      key: 3,
      question: "Q : Does the Dining (POS) module support table reservations and service tracking?",
      answer: "A : Yes, the module includes features for managing table reservations and tracking service status, helping staff deliver timely and personalized guest experiences."
    },
    {
      key: 4,
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
              <span style={{ color: "#012060" }}>ACCOUNTS &</span>
              <span style={{ color: "#01B0F1" }} className="blueTextGlobalClass"> FINANCE</span>
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
              <img style={{ width: "100%" }} src={ddfi} alt="" />
            </div>

            <div className={`${style.iconName} `}>

              <div> Effortless</div>
              <div> Operations</div>
            </div>
          </div>



          <div className={style.section2IconAndName}>

            <div className={`${style.section2Icon}`}>
              <img style={{ width: "100%" }} src={afw} alt="" />
            </div>

            <div className={`${style.iconName} `}>



              <div> Personalized</div>
              <div>Experience</div>

            </div>
          </div>



          <div className={style.section2IconAndName}>

            <div className={`${style.section2Icon}`}>
              <img style={{ width: "100%" }} src={rtet} alt="" />
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

                The Accounts and Finance module in EICE Rise ERP streamlines financial management for hospitality operations. It automates workflows, ensuring accurate records, compliance, and improved financial decision-making. This module enhances control and transparency in financial activities from budgeting, forecasting, invoicing, and taxation to financial reporting.


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
      </section>



      <section >
        <div className={`${style.FAQsection} globalSectionSize font4`}>
          <div className={`${style.FAQHeading}`}>Frequently Asked Questions</div>


          <div className={style.FAQContainer}>
            {query.map((faq, index) => (
              <Accordion key={faq.key} question={faq.question} answer={faq.answer} />
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
