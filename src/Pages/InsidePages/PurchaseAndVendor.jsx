import style from "./Styles/purchaseAndVendor.module.css"


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

export default function PurchaseAndVendor() {




    // const features = [
    //     {
    //         key: 1,
    //         heading: "User-Friendly Interface",
    //         desc: "Enjoy an intuitive, tablet-based POS system that allows staff to quickly and efficiently manage orders, reducing wait times and improving service quality.",
    //         img: ufi,
    //         width: "64px",
    //     },
    //     {
    //         key: 2,
    //         heading: "Real-Time Menu Management",
    //         desc: "Easily update the menu with daily specials, seasonal items, and pricing changes. Reflect these updates instantly across all devices to ensure consistent information.",
    //         img: rtmm,
    //         width: "65px",
    //     },
    //     {
    //         key: 3,
    //         heading: "Order Customization",
    //         desc: "Enable guests to customize their orders with specific preferences, such as dietary restrictions or ingredient substitutions, ensuring a personalized dining experience.",
    //         img: oc,
    //         width: "54px",
    //     },
    //     {
    //         key: 4,
    //         heading: "Table Management",
    //         desc: "Visually manage table assignments, seating, and reservations with a dynamic table layout. Optimize table turnover and seating arrangements for better service flow.",
    //         img: tm,
    //         width: "65px",
    //     },
    //     {
    //         key: 5,
    //         heading: "Integrated Payment Solutions",
    //         desc: "Accept multiple payment methods, including credit/debit cards, UPI, mobile wallets, and contactless payments. Split bills or apply discounts seamlessly at checkout.",
    //         img: ips,
    //         width: "65px",
    //     },
    //     {
    //         key: 6,
    //         heading: "Inventory Tracking",
    //         desc: "Automatically track ingredient usage and monitor stock levels in real time. Get low-stock alerts to ensure timely replenishment and avoid service disruptions.",
    //         img: it,
    //         width: "63px",
    //     },
    //     {
    //         key: 7,
    //         heading: "Kitchen Display System (KDS) Integration",
    //         desc: "Orders are directly sent to the kitchen display system, streamlining communication between the wait staff and kitchen team for faster, error-free order preparation.",
    //         img: kds,
    //         width: "70px",
    //     },
    //     {
    //         key: 8,
    //         heading: "Promotions and Loyalty Programs",
    //         desc: "Easily set up special offers, happy hours, and loyalty programs to engage customers and drive repeat business. Track customer preferences for targeted promotions.",
    //         img: plp,
    //         width: "65px",
    //     },
    //     {
    //         key: 9,
    //         heading: "Real-Time Sales Reporting",
    //         desc: "Access detailed sales reports and analytics to gain insights into daily revenue, top-selling items, and customer preferences, helping you make informed business decisions.",
    //         img: rtsr,
    //         width: "60px",
    //     }
    // ];


    const features = [
      {
          key: 1,
          heading: "Vendor Management",
          desc: "Maintain a centralized database with detailed vendor profiles, including contact information, product offerings, and contract terms, helping businesses efficiently track and manage supplier relationships.",
          img: ufi, // Image from the previous feature array
          width: "64px" // Width from the previous feature array
      },
      {
          key: 2,
          heading: "RFP/RFQ Management",
          desc: "Easily create, send, and manage Requests for Proposals (RFPs) and Quotations (RFQs), ensuring businesses receive competitive bids from multiple vendors, simplifying the procurement process.",
          img: rtmm, // Image from the previous feature array
          width: "65px" // Width from the previous feature array
      },
      {
          key: 3,
          heading: "Automated Quotation Comparison",
          desc: "Automatically compare vendor quotations based on price, delivery, and quality, helping businesses make data-driven procurement decisions quickly.",
          img: oc, // Image from the previous feature array
          width: "54px" // Width from the previous feature array
      },
      {
          key: 4,
          heading: "Order Management",
          desc: "Track and manage purchase orders from creation to fulfillment, with integration to inventory and warehouse management for real-time stock level and delivery updates.",
          img: tm, // Image from the previous feature array
          width: "65px" // Width from the previous feature array
      },
      {
          key: 5,
          heading: "Vendor Payment Tracking",
          desc: "Monitor vendor payments, including invoices and due dates, ensuring smooth transactions with transparent payment status for both businesses and vendors.",
          img: ips, // Image from the previous feature array
          width: "65px" // Width from the previous feature array
      },
      {
          key: 6,
          heading: "Purchase Order Approvals",
          desc: "Enable multi-level approval workflows for purchase orders to ensure alignment with internal budgets and procurement policies before sending to vendors.",
          img: it, // Image from the previous feature array
          width: "63px" // Width from the previous feature array
      },
      {
          key: 7,
          heading: "Supplier Performance Monitoring",
          desc: "Evaluate vendor performance through comprehensive reports on delivery, product quality, and compliance, helping businesses strengthen supplier relationships.",
          img: ufi, // Image reused for consistency
          width: "64px" // Reused width for consistency
      },
      {
          key: 8,
          heading: "Document Management",
          desc: "Securely store and access procurement-related documents like contracts, invoices, and agreements in a centralized repository for easy sharing with vendors.",
          img: rtmm, // Reused image for consistency
          width: "65px" // Reused width for consistency
      },
      {
          key: 9,
          heading: "Purchase Forecasting and Budgeting",
          desc: "Forecast purchasing needs based on historical data and trends, set procurement budgets, and track spending to ensure financial control.",
          img: oc, // Reused image for consistency
          width: "54px" // Reused width for consistency
      }
  ];
  



  const benefits = [
    {
        key: 1,
        heading: "Efficient Vendor Management",
        desc: "Centralized vendor profiles allow businesses to maintain organized and up-to-date records, making it easier to track relationships and performance over time.",
        img: b1, // Reused or placeholder image
        width: "79%", // Reused from previous benefit array
        imgwidth: "356px" // Reused from previous benefit array
    },
    {
        key: 2,
        heading: "Time and Cost Savings",
        desc: "Streamlining the RFP and RFQ processes reduces the time spent on sourcing and vendor selection, allowing businesses to make quicker procurement decisions and secure better prices.",
        img: b2, // Reused or placeholder image
        width: "86%", // Reused from previous benefit array
        imgwidth: "315px" // Reused from previous benefit array
    },
    {
        key: 3,
        heading: "Transparency and Accountability",
        desc: "Vendors can easily track payment statuses and purchase orders, reducing disputes and fostering trust between businesses and suppliers.",
        img: b3, // Reused or placeholder image
        width: "75%", // Reused from previous benefit array
        imgwidth: "410px" // Reused from previous benefit array
    },
    {
        key: 4,
        heading: "Improved Supplier Relationships",
        desc: "By evaluating supplier performance and maintaining clear, direct communication through the portal, businesses can build stronger, more collaborative partnerships with vendors.",
        img: b4, // Reused or placeholder image
        width: "86%", // Reused from previous benefit array
        imgwidth: "642px" // Reused from previous benefit array
    },
    {
        key: 5,
        heading: "Better Financial Control",
        desc: "Integration with finance modules ensures that payment terms, budgets, and spending are tracked efficiently, enabling businesses to stay within budget and manage cash flow effectively.",
        img: b5, // Reused or placeholder image
        width: "88%", // Reused from previous benefit array
        imgwidth: "635px" // Reused from previous benefit array
    },
    {
        key: 6,
        heading: "Enhanced Reporting and Insights",
        desc: "Comprehensive reports and analytics provide businesses with insights into purchasing trends, vendor performance, and cost-saving opportunities, aiding strategic procurement decisions.",
        img: b3, // Reused or placeholder image
        width: "75%", // Reused from previous benefit array
        imgwidth: "410px" // Reused from previous benefit array
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
          question:  "Q : What analytics and reporting capabilities does the Dining (POS) module offer?",
          answer: "A : The system provides detailed insights into sales trends, popular menu items, and customer preferences through customizable reports, empowering data-driven decision-making."
        }
      ];





    return (
        <>



            <section>
                <div className={`${style.section1} insidePageUpperSection`}>
                    <div style={{ width: "33%" }}>
                        <div className={`${style.section1Heading} font4`}>
                            <span style={{ color: "#012060" }}>PURCHASE & VENDOR</span>
                            <span style={{ color: "#01B0F1" }} className="blueTextGlobalClass"> PORTAL</span>
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

                            EICE Rise ERP’s Purchase & Vendor Portal streamlines procurement by enhancing communication between businesses and suppliers. It simplifies the RFP and RFQ processes, allows vendors to track payment statuses, and ensures transparency and efficiency in transactions, optimizing procurement operations and supplier management.

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
