import style from "./Styles/banquetAndBilling.module.css"


import artb from "../../assets/insidePages/banquet/section2B/artb.png"
import eem from "../../assets/insidePages/banquet/section2B/eem.png"
import fcb from "../../assets/insidePages/banquet/section2B/fcb.png"






import abs from "../../assets/insidePages/banquet/icon/abs.png"
import cpa from "../../assets/insidePages/banquet/icon/cpa.png"
import cpp from "../../assets/insidePages/banquet/icon/cpp.png"
import cr from "../../assets/insidePages/banquet/icon/cr.png"
import dci from "../../assets/insidePages/banquet/icon/dci.png"
import irm from "../../assets/insidePages/banquet/icon/irm.png"






// benefits

import bru from "../../assets/insidePages/banquet/banquetbenefits/bru.webp"
import cm from "../../assets/insidePages/banquet/banquetbenefits/cm.webp"
import ece from "../../assets/insidePages/banquet/banquetbenefits/ece.webp"
import ie from "../../assets/insidePages/banquet/banquetbenefits/ie.webp"
import ro from "../../assets/insidePages/banquet/banquetbenefits/ro.webp"



import laptop from "../../assets/insidePages/pos/posPage/laptop.webp"

import Accordion from "../../Components/Accordian/Accordian.jsx"


import { FaArrowRightLong } from "react-icons/fa6";


import footer from "../../assets/footer/foot.webp"
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx"
import FooterLower from "../../Components/Footer/FooterLower.jsx"

export default function BanquetAnsBilling() {





  const features = [
    {
      key: 1,
      heading: "Customized Packages and Pricing",
      desc: "Create tailored event packages, allowing clients to choose from various services, amenities, and F&B options to suit their preferences.",
      img: cpp,
      width: "69px",
    },

    {
      key: 2,
      heading: "Digital Contracts and Invoicing",
      desc: "Generate digital contracts and detailed invoices for events, with transparent breakdowns of services, charges, and taxes.",
      img: dci,
      width: "58px",
    },

    {
      key: 3,
      heading: "Integrated Resource Management",
      desc: "Allocate staff, catering, equipment, etc., based on event requirements, optimizing resources and reducing overbooking risks.",
      img: irm,
      width: "72px",
    },

    {
      key: 4,
      heading: "Automated Billing System",
      desc: "Streamline the billing process with automatic calculations for banquet charges, F&B services, and additional event-related costs.",
      img: abs,
      width: "65px",
    },

    {
      key: 5,
      heading: "Comprehensive Reports",
      desc: "Access real-time reports on event bookings, revenue, and client preferences, enabling better forecasting and decision-making.",
      img: cr,
      width: "58px",
    },

    {
      key: 6,
      heading: "Client Portal Access",
      desc: "Provide clients with a portal to review booking details, confirm event schedules, and make payments easily.",
      img: cpa,
      width: "54px",
    }
  ];




  const benefits = [
    {
      key: 1,
      heading: "Enhanced Client Experience",
      desc: "Simplified booking and clear billing ensure a hassle-free experience for clients.",
      img: ece,
    },
    {
      key: 2,
      heading: "Improved Efficiency",
      desc: "Automates event management and billing, reducing manual errors and saving time.",
      img: ie,
    },
    {
      key: 3,
      heading: "Revenue Optimization",
      desc: "Accurate invoicing and comprehensive reports help maximize revenue from event services.",
      img: ro,
    },
    {
      key: 4,
      heading: "Centralized Management",
      desc: "A unified platform allows for streamlined event management, reducing complexity and ensuring that all event-related details are easily accessible and managed in one place.",
      img: cm,
    },
    {
      key: 5,
      heading: "Better Resource Utilization",
      desc: "Automated scheduling and inventory tracking ensure efficient use of resources, preventing overbooking and underutilization of assets.",
      img: bru,
    },

  ];












  const query = [
    {
      key: 1,
      question: "Q : How can I manage event bookings?",
      answer: "A : You can easily reserve venues and manage multiple event bookings with real-time availability updates."
    },
    {
      key: 2,
      question: "Q : Does the system handle customized event packages?",
      answer: "A : Yes, it allows you to create tailored event packages with various service and F&B options."
    },
    {
      key: 3,
      question: "Q : Are digital contracts and invoicing available?",
      answer: "A : Yes, digital contracts and detailed invoices with transparent service breakdowns are generated automatically."
    },
    {
      key: 4,
      question: "Q : Can I track event revenue?",
      answer: "A : Yes, you can access real-time reports on event bookings, revenue, and client preferences."
    },
    {
      key: 5,
      question: "Q : How is resource management handled?",
      answer: "A : Resource allocation for staff, catering, and equipment is automated to optimize event logistics and prevent overbooking."
    }
  ];

  const footerUpperText = {

    text1 : "Manage events" ,
    text2 : "" ,
    text3 : "and simplify billing with our Banquet solution" ,
    img : footer
  }





  return (
    <>



      <section>
        <div className={`${style.section1} insidePageUpperSection`}>
          <div className={`${style.pageHeadingBox}`}>
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
              <img style={{ width: "100%" }} src={artb} alt="" />
            </div>

            <div className={`${style.iconName} `}>

              <div>Accurate Real Time</div>
              <div> Billing</div>
            </div>
          </div>



          <div className={style.section2IconAndName}>

            <div className={`${style.section2Icon}`}>
              <img style={{ width: "100%" }} src={eem} alt="" />
            </div>

            <div className={`${style.iconName} `}>



              <div> EffortLess Event</div>
              <div>Mangement</div>

            </div>
          </div>



          <div className={style.section2IconAndName}>

            <div className={`${style.section2Icon}`}>
              <img style={{ width: "100%" }} src={fcb} alt="" />
            </div>

            <div className={`${style.iconName}`}>


              <div>
                Flexible Custom
              </div>

              <div>
                Packages
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


      {/* <div >
        <Footer3 />

      </div> */}

      <div >
        <FooterUpperPart text1={footerUpperText.text1} text2={footerUpperText.text2} text3={footerUpperText.text3} img={footerUpperText.img} />
        <FooterLower />

      </div>

    </>
  )
}
