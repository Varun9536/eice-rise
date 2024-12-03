
import style from "./Styles/foodCost.module.css"


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

export default function FoodCost() {





  const features = [
    {
        key: 1,
        heading: "Real-Time Cost Tracking",
        desc: "Monitor the cost of ingredients, resources, and overhead in real time, ensuring that all food and beverage transactions, from procurement to sale, are tracked and analyzed for accurate cost control.",
        img: ufi, // Placeholder based on your original provided array
        width: "64px",
    },
    {
        key: 2,
        heading: "Recipe Costing",
        desc: "Track detailed recipes, including ingredient quantities, preparation methods, and associated costs. The system automatically calculates the cost per dish or drink, helping businesses make accurate pricing decisions.",
        img: rtmm, // Placeholder based on your original provided array
        width: "65px",
    },
    {
        key: 3,
        heading: "Menu Engineering",
        desc: "Analyze the profitability of menu items by evaluating cost versus price. This helps identify high-cost or low-margin items and suggests ways to adjust pricing, optimize menu offerings, and implement portion control to boost profitability.",
        img: oc, // Placeholder based on your original provided array
        width: "54px",
    },
    {
        key: 4,
        heading: "Supplier Management & Purchase Orders",
        desc: "Monitor supplier prices and purchase orders to ensure the best deals on ingredients. The system helps compare supplier prices, manage inventory efficiently, and negotiate better prices to reduce the cost of goods sold (COGS).",
        img: tm, // Placeholder based on your original provided array
        width: "65px",
    },
    {
        key: 5,
        heading: "COGS Calculation",
        desc: "Track and calculate the cost of goods sold on a daily, weekly, or monthly basis. This feature provides insights into the total cost of ingredients used and evaluates the profitability of each food and beverage sale.",
        img: ips, // Placeholder based on your original provided array
        width: "65px",
    },
    {
        key: 6,
        heading: "Waste and Loss Management",
        desc: "Identify and reduce food and beverage wastage, whether caused by over-portioning, spoilage, or incorrect inventory practices. This feature helps minimize loss and optimize resource utilization.",
        img: it, // Placeholder based on your original provided array
        width: "63px",
    },
    {
        key: 7,
        heading: "Dynamic Pricing and Cost Adjustments",
        desc: "Adjust pricing strategies based on demand fluctuations, seasonality, or special events. The system enables businesses to set flexible pricing options for peak periods, offering promotions or discounts while maintaining profitability.",
        img: kds, // Placeholder based on your original provided array
        width: "70px",
    },
    {
        key: 8,
        heading: "Inventory Management",
        desc: "Efficiently manage inventory levels to avoid overstocking or stockouts. This system integrates inventory and purchasing to ensure stock availability, reduce waste, and maintain optimal ingredient levels.",
        img: plp, // Placeholder based on your original provided array
        width: "65px",
    },
    {
        key: 9,
        heading: "Sales Performance Insights",
        desc: "Analyze the sales performance of menu items and identify top-performing dishes and beverages. Use these insights to adjust menu offerings and match customer preferences.",
        img: rtsr, // Placeholder based on your original provided array
        width: "60px",
    },
    {
        key: 10,
        heading: "Financial Reporting and Analytics",
        desc: "Generate detailed financial reports on F&B costs, profit margins, and pricing strategies. These reports provide essential data to help businesses make informed decisions and improve operational efficiency.",
        img: ufi, // Reuse image identifier from provided array
        width: "64px",
    },
    {
        key: 11,
        heading: "Budgeting and Forecasting",
        desc: "Create budgets and forecast future F&B costs using historical data and trends. This feature allows businesses to plan for high-demand periods and optimize menu pricing.",
        img: rtmm, // Reuse image identifier from provided array
        width: "65px",
    },
    {
        key: 12,
        heading: "Nutritional and Dietary Costing",
        desc: "Track and cost menu items based on their nutritional value, catering to health-conscious guests or dietary-specific needs. The system helps optimize the health and wellness aspects of the menu while ensuring accurate costing.",
        img: oc, // Reuse image identifier from provided array
        width: "54px",
    }
];






const benefits = [
  {
      key: 1,
      heading: "Profitability Optimization",
      desc: "Gain insights into ingredient costs, portion sizes, and menu profitability to adjust pricing, eliminate waste, and improve profit margins.",
      img: b1,
  },
  {
      key: 2,
      heading: "Cost Control",
      desc: "Track F&B expenses in real-time from procurement to sale, reducing unexpected costs and ensuring better financial control.",
      img: b2, 
  },
  {
      key: 3,
      heading: "Efficient Menu Management",
      desc: "Optimize menu items based on profitability, removing low-margin dishes and adjusting portions to meet customer demand while ensuring profitability.",
      img: b3, 
  },
  {
      key: 4,
      heading: "Enhanced Supplier Negotiation",
      desc: "Track supplier prices and evaluate cost-effectiveness to negotiate better terms and reduce ingredient costs.",
      img: b4, 
  },
  {
      key: 5,
      heading: "Waste Reduction",
      desc: "Identify food wastage trends and implement better inventory practices to reduce spoilage, prevent over/under-preparation, and boost profits.",
      img: b5, 
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
              <span style={{ color: "#012060" }}>FOOD & BEVERAGE </span>
              <span style={{ color: "#01B0F1" }} className="blueTextGlobalClass" >COST ANALYSIS</span>
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

              The Food & Beverage (F&B) Cost Analysis module in EICE Rise ERP helps hospitality businesses monitor and optimize F&B costs. It offers real-time tracking, cost analysis, and strategic insights to improve efficiency, reduce wastage, and enhance profitability.

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

