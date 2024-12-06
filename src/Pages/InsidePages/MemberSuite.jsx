
import style from "./Styles/memberSuite.module.css"


// import icon1 from "../../assets/insidePages/pos/posPage/section3/icon1.png"
// import icon2 from "../../assets/insidePages/pos/posPage/section3/icon2.png"
// import icon3 from "../../assets/insidePages/pos/posPage/section3/icon3.png"


import cag from "../../assets/insidePages/member/memberSection2/cag.png"
import pme from "../../assets/insidePages/member/memberSection2/pme.png"
import smo from "../../assets/insidePages/member/memberSection2/smo.png"


// features
// import ips from "../../assets/insidePages/pos/posPage/feature/ips.png"
// import it from "../../assets/insidePages/pos/posPage/feature/it.png"
// import kds from "../../assets/insidePages/pos/posPage/feature/kds.png"
// import oc from "../../assets/insidePages/pos/posPage/feature/oc.png"
// import plp from "../../assets/insidePages/pos/posPage/feature/plp.png"
// import rtmm from "../../assets/insidePages/pos/posPage/feature/rtmm.png"
// import rtsr from "../../assets/insidePages/pos/posPage/feature/rtsr.png"
// import tm from "../../assets/insidePages/pos/posPage/feature/tm.png"
// import ufi from "../../assets/insidePages/pos/posPage/feature/ufi.png"


import ad from "../../assets/insidePages/member/icon/ad.png"
import emb from "../../assets/insidePages/member/icon/emb.png"
import ict from "../../assets/insidePages/member/icon/ict.png"
import mrm from "../../assets/insidePages/member/icon/mrm.png"
import sadp from "../../assets/insidePages/member/icon/sadp.png"
import scm from "../../assets/insidePages/member/icon/scm.png"
import sm from "../../assets/insidePages/member/icon/sm.png"
import ssp from "../../assets/insidePages/member/icon/ssp.png"



// benifits

import b1 from "../../assets/insidePages/pos/posPage/benefit/b1.webp"
import b2 from "../../assets/insidePages/pos/posPage/benefit/b2.webp"
import b3 from "../../assets/insidePages/pos/posPage/benefit/b3.webp"
import b4 from "../../assets/insidePages/pos/posPage/benefit/b4.webp"
import b5 from "../../assets/insidePages/pos/posPage/benefit/b5.webp"


// benefits
import ddi from "../../assets/insidePages/member/memberBenefit/ddi.webp"
import eme from "../../assets/insidePages/member/memberBenefit/eme.webp"
import ic from "../../assets/insidePages/member/memberBenefit/ic.webp"
import imr from "../../assets/insidePages/member/memberBenefit/imr.webp"
import oe from "../../assets/insidePages/member/memberBenefit/oe.webp"



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
        img: mrm, // Reusing image from previous array, replace with relevant image if needed
        width: "64px"
    },
    {
        key: 2,
        heading: "Self-Service Portal",
        desc: "Empower members with a self-service portal to update their profiles, renew subscriptions, and outstanding bills, view membership benefits, and access exclusive offers.",
        img: ssp, // Reusing image from previous array, replace with relevant image if needed
        width: "65px"
    },
    {
        key: 3,
        heading: "Subscription Management",
        desc: "Automate subscription renewals, payments, and reminders, ensuring members stay informed and engaged without any manual effort.",
        img: sm, // Reusing image from previous array, replace with relevant image if needed
        width: "54px"
    },
    {
        key: 4,
        heading: "Exclusive Member Benefits",
        desc: "Offer tailored benefits such as priority bookings, special discounts, and access to exclusive events, enhancing the overall member experience.",
        img: emb, // Reusing image from previous array, replace with relevant image if needed
        width: "65px"
    },
    {
        key: 5,
        heading: "Integrated Communication Tools",
        desc: "Enable real-time communication with members via email, push notifications, and in-app messages, keeping them informed about events, announcements, and offers.",
        img: ict, // Reusing image from previous array, replace with relevant image if needed
        width: "65px"
    },
    {
        key: 6,
        heading: "Analytics Dashboard",
        desc: "Gain insights into member activity, preferences, and engagement levels with detailed analytics, helping you tailor services to meet their needs.",
        img: ad, // Reusing image from previous array, replace with relevant image if needed
        width: "63px"
    }
];





const benefits = [
  {
      key: 1,
      heading: "Enhanced Member Experience",
      desc: "Provide a personalized and streamlined experience for your members, improving retention and satisfaction.",
      img: eme, 
  },
  {
      key: 2,
      heading: "Operational Efficiency",
      desc: "Automate routine tasks such as renewals and notifications, reducing administrative workload.",
      img: oe, 
  },
  {
      key: 3,
      heading: "Data-Driven Insights",
      desc: "Leverage analytics to understand member preferences and make informed decisions on services and offerings.",
      img: ddi, 
  },
  {
      key: 4,
      heading: "Improved Communication",
      desc: "Streamline communication with members through automated alerts, reminders, and personalized messaging, fostering stronger relationships and engagement.",
      img: ic, 
  },
  {
      key: 5,
      heading: "Increased Member Retention",
      desc: "By offering targeted services and benefits based on member data, you can increase retention and reduce churn, creating long-term loyalty.",
      img: imr, 
  },

  // {
  //     key: 6,
  //     heading: "Revenue Growth",
  //     desc: "Enable upselling and cross-selling opportunities through tailored offers and personalized services, driving additional revenue streams from your existing member base.",
  //     img: r, 
  // }
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
              <img style={{ width: "100%" }} src={cag} alt="" />
            </div>

            <div className={`${style.iconName} `}>

              <div> Effortless</div>
              <div> Operations</div>
            </div>
          </div>



          <div className={style.section2IconAndName}>

            <div className={`${style.section2Icon}`}>
              <img style={{ width: "100%" }} src={smo} alt="" />
            </div>

            <div className={`${style.iconName} `}>



              <div> Personalized</div>
              <div>Experience</div>

            </div>
          </div>



          <div className={style.section2IconAndName}>

            <div className={`${style.section2Icon}`}>
              <img style={{ width: "100%" }} src={pme} alt="" />
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
