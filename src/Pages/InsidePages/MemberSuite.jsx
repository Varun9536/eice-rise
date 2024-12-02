
import style from "./Styles/memberSuite.module.css"


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

export default function MemberSuite() {





  const features = [
    {
        key: 1,
        heading: "Membership Registration and Management",
        desc: "Seamlessly register and manage different membership tiers, and convert membership with customizable features, including individual, family, corporate, and lifetime memberships.",
        img: ufi, // Reusing image from previous array, replace with relevant image if needed
        width: "64px"
    },
    {
        key: 2,
        heading: "Self-Service Portal",
        desc: "Empower members with a self-service portal to update their profiles, renew subscriptions, and outstanding bills, view membership benefits, and access exclusive offers.",
        img: rtmm, // Reusing image from previous array, replace with relevant image if needed
        width: "65px"
    },
    {
        key: 3,
        heading: "Subscription Management",
        desc: "Automate subscription renewals, payments, and reminders, ensuring members stay informed and engaged without any manual effort.",
        img: oc, // Reusing image from previous array, replace with relevant image if needed
        width: "54px"
    },
    {
        key: 4,
        heading: "Exclusive Member Benefits",
        desc: "Offer tailored benefits such as priority bookings, special discounts, and access to exclusive events, enhancing the overall member experience.",
        img: tm, // Reusing image from previous array, replace with relevant image if needed
        width: "65px"
    },
    {
        key: 5,
        heading: "Integrated Communication Tools",
        desc: "Enable real-time communication with members via email, push notifications, and in-app messages, keeping them informed about events, announcements, and offers.",
        img: ips, // Reusing image from previous array, replace with relevant image if needed
        width: "65px"
    },
    {
        key: 6,
        heading: "Analytics Dashboard",
        desc: "Gain insights into member activity, preferences, and engagement levels with detailed analytics, helping you tailor services to meet their needs.",
        img: it, // Reusing image from previous array, replace with relevant image if needed
        width: "63px"
    }
];





const benefits = [
  {
      key: 1,
      heading: "Enhanced Member Experience",
      desc: "Provide a personalized and streamlined experience for your members, improving retention and satisfaction.",
      img: b1, // Reusing image from previous array, replace with relevant image if needed
      width: "79%",
      imgwidth: "590px"
  },
  {
      key: 2,
      heading: "Operational Efficiency",
      desc: "Automate routine tasks such as renewals and notifications, reducing administrative workload.",
      img: b2, // Reusing image from previous array, replace with relevant image if needed
      width: "86%",
      imgwidth: "520px"
  },
  {
      key: 3,
      heading: "Data-Driven Insights",
      desc: "Leverage analytics to understand member preferences and make informed decisions on services and offerings.",
      img: b3, // Reusing image from previous array, replace with relevant image if needed
      width: "75%",
      imgwidth: "555px"
  },
  {
      key: 4,
      heading: "Improved Communication",
      desc: "Streamline communication with members through automated alerts, reminders, and personalized messaging, fostering stronger relationships and engagement.",
      img: b4, // Reusing image from previous array, replace with relevant image if needed
      width: "86%",
      imgwidth: "603px"
  },
  {
      key: 5,
      heading: "Increased Member Retention",
      desc: "By offering targeted services and benefits based on member data, you can increase retention and reduce churn, creating long-term loyalty.",
      img: b5, // Reusing image from previous array, replace with relevant image if needed
      width: "88%",
      imgwidth: "635px"
  },
  {
      key: 6,
      heading: "Revenue Growth",
      desc: "Enable upselling and cross-selling opportunities through tailored offers and personalized services, driving additional revenue streams from your existing member base.",
      img: b1, // Reusing image from previous array, replace with relevant image if needed
      width: "79%",
      imgwidth: "590px"
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
              <span style={{ color: "#012060" }}>MEMBER </span>
              <span style={{ color: "#01B0F1" }} className="blueTextGlobalClass"> SUITE</span>
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
              EICE Rise ERP’s Member Suite offers a centralized solution for managing diverse membership types, subscriptions, and engagement activities. Designed specifically for Clubs, Institutions, Hotels, and Resorts, this module streamlines membership processes, enhances communication, and provides personalized services to members, all within a secure, user-friendly platform.


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
