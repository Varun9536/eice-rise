
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
      heading: "Customized Packages and Pricing",
      desc: "Create tailored event packages, allowing clients to choose from various services, amenities, and F&B options to suit their preferences.",
      img: ufi, // Image from the previous array
      width: "64px", // Width from the previous array
    },
    {
      key: 2,
      heading: "Digital Contracts and Invoicing",
      desc: "Generate digital contracts and detailed invoices for events, with transparent breakdowns of services, charges, and taxes.",
      img: rtmm, // Image from the previous array
      width: "65px", // Width from the previous array
    },
    {
      key: 3,
      heading: "Integrated Resource Management",
      desc: "Allocate staff, catering, equipment, etc., based on event requirements, optimizing resources and reducing overbooking risks.",
      img: oc, // Image from the previous array
      width: "54px", // Width from the previous array
    },
    {
      key: 4,
      heading: "Automated Billing System",
      desc: "Streamline the billing process with automatic calculations for banquet charges, F&B services, and additional event-related costs.",
      img: tm, // Image from the previous array
      width: "65px", // Width from the previous array
    },
    {
      key: 5,
      heading: "Comprehensive Reports",
      desc: "Access real-time reports on event bookings, revenue, and client preferences, enabling better forecasting and decision-making.",
      img: ips, // Image from the previous array
      width: "65px", // Width from the previous array
    },
    {
      key: 6,
      heading: "Client Portal Access",
      desc: "Provide clients with a portal to review booking details, confirm event schedules, and make payments easily.",
      img: it, // Image from the previous array
      width: "63px", // Width from the previous array
    }
  ];




  const benefits = [
    {
      key: 1,
      heading: "Enhanced Client Experience",
      desc: "Simplified booking and clear billing ensure a hassle-free experience for clients.",
      img: b1, // Reused or placeholder image
      width: "79%",
      imgwidth: "356px"
    },
    {
      key: 2,
      heading: "Improved Efficiency",
      desc: "Automates event management and billing, reducing manual errors and saving time.",
      img: b2, // Reused or placeholder image
      width: "86%",
      imgwidth: "315px"
    },
    {
      key: 3,
      heading: "Revenue Optimization",
      desc: "Accurate invoicing and comprehensive reports help maximize revenue from event services.",
      img: b3, // Reused or placeholder image
      width: "75%",
      imgwidth: "410px"
    },
    {
      key: 4,
      heading: "Centralized Management",
      desc: "A unified platform allows for streamlined event management, reducing complexity and ensuring that all event-related details are easily accessible and managed in one place.",
      img: b4, // Reused or placeholder image
      width: "86%",
      imgwidth: "642px"
    },
    {
      key: 5,
      heading: "Better Resource Utilization",
      desc: "Automated scheduling and inventory tracking ensure efficient use of resources, preventing overbooking and underutilization of assets.",
      img: b5, // Reused or placeholder image
      width: "88%",
      imgwidth: "635px"
    },

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
              <span style={{ color: "#012060" }}>BANQUET &</span>
              <span style={{ color: "#01B0F1" }} className="blueTextGlobalClass"> BILLING</span>
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

                EICE Rise ERP’s Banquet & Billing module is designed to simplify the management of Events, Weddings, Corporate Gatherings, and Private Parties. The module offers comprehensive tools for Booking, Scheduling, and Billing, enabling hospitality businesses to deliver seamless event experiences. By integrating with other operational functions, it ensures accurate resource allocation, efficient billing, and enhanced customer satisfaction.

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

