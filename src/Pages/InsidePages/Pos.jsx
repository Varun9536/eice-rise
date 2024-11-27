import style from "./Styles/pos.module.css"


import icon1 from "../../assets/insidePages/room/roomPage/Icons/1.png"
import icon2 from "../../assets/insidePages/room/roomPage/Icons/2.png"
import icon3 from "../../assets/insidePages/room/roomPage/Icons/3.png"



// features
import rt from "../../assets/insidePages/room/roomPage/feature/rt.png"
import app from "../../assets/insidePages/room/roomPage/feature/app.png"
import cbd from "../../assets/insidePages/room/roomPage/feature/cbd.png"
import cbo from "../../assets/insidePages/room/roomPage/feature/cbo.png"
import frs from "../../assets/insidePages/room/roomPage/feature/frs.png"
import ibc from "../../assets/insidePages/room/roomPage/feature/ibc.png"
import mfi from "../../assets/insidePages/room/roomPage/feature/mfi.png"
import wifi from "../../assets/insidePages/room/roomPage/feature/wifi.png"
import ipg from "../../assets/insidePages/room/roomPage/feature/ipg.png"



// benifits

import b1 from "../../assets/insidePages/room/roomPage/benifit/b1.png"
import b2 from "../../assets/insidePages/room/roomPage/benifit/b2.png"
import b3 from "../../assets/insidePages/room/roomPage/benifit/b3.png"
import b4 from "../../assets/insidePages/room/roomPage/benifit/b4.png"
import b5 from "../../assets/insidePages/room/roomPage/benifit/b5.png"







import Footer2 from "../../Components/Footer/Footer2.jsx"

export default function Pos() {




    const features = [
        {
            key: 1,
            heading: "Real-Time Room Availability",
            desc: "Easily check room availability in real-time, providing guests with up-to-date information to make informed booking decisions.",
            img: rt
        },
        {
            key: 2,
            heading: "Flexible Room Selection",
            desc: "Choose from a variety of room types, including standard, deluxe, and suite categories. Each room type includes detailed descriptions, photos, and amenities.",
            img: frs
        },
        {
            key: 3,
            heading: "Integrated Wi-Fi Access",
            desc: "Automatically grants guests secure Wi-Fi access as part of their booking package, enhancing their stay experience from the moment they check in.",
            img: wifi
        },
        {
            key: 4,
            heading: "Customizable Booking Options",
            desc: "Enable guests to select add-ons such as breakfast packages, airport transfers, or room upgrades directly during the booking process.",
            img: cbo
        },
        {
            key: 5,
            heading: "Automated Pricing and Promotions",
            desc: "Dynamic pricing based on demand, seasonality, and special events, with options for promotional codes and loyalty discounts to attract repeat customers.",
            img: app
        },
        {
            key: 6,
            heading: "Centralized Booking Dashboard",
            desc: "Manage all room bookings from a single dashboard. Track check-ins, check-outs, and cancellations effortlessly, optimizing room occupancy rates.",
            img: cbd
        },
        {
            key: 7,
            heading: "Integrated Payment Gateway",
            desc: "Secure online payment processing with multiple options (credit/debit cards, UPI, mobile wallets) for a smooth, hassle-free booking experience.",
            img: ipg
        },
        {
            key: 8,
            heading: "Mobile-Friendly Interface",
            desc: "Guests can book rooms on the go using mobile devices, ensuring a responsive and seamless experience across all platforms.",
            img: mfi
        },
        {
            key: 9,
            heading: "Instant Booking Confirmation",
            desc: "Automated email and SMS confirmations are sent to guests upon successful booking, including details like check-in time, room type, and any additional services selected.",
            img: ibc
        },

    ];



    const benifits = [
        {
            key: 1,
            heading: "Enhanced Guest Experience",
            desc: "Provides a hassle-free booking process that enhances customer satisfaction and loyalty.",
            img: b1,
        },
        {
            key: 2,
            heading: "Operational Efficiency",
            desc: "Reduces manual workload for staff and minimizes booking errors, resulting in smoother operations.",
            img: b2
        },
        {
            key: 3,
            heading: "Revenue Optimization",
            desc: "Maximizes room occupancy and boosts revenue through dynamic pricing and promotional features.",
            img: b3
        },
        {
            key: 4,
            heading: "Centralized Management",
            desc: "Offers a unified platform for handling all room bookings, reducing complexity and improving oversight.",
            img: b4
        },
        {
            key: 5,
            heading: "Real-time Availability",
            desc: "Ensures guests have access to up-to-date room availability, preventing overbooking and improving guest trust.",
            img: b5
        }
    ];


    const query = [
        {
            question: "What is the Room Booking module, and who is it designed for?",
            answer: "The Room Booking module is a comprehensive solution for the hospitality industry, ideal for hotels, resorts, clubs, and institutions. It simplifies the booking process while integrating seamlessly with EICE Rise ERP."
        },
        {
            question: "How does this module improve the guest experience?",
            answer: "The module offers real-time availability, customizable booking options, and instant confirmations, ensuring a smooth and hassle-free experience for guests."
        },
        {
            question: "What payment options are supported by the Integrated Payment Gateway?",
            answer: "The payment gateway supports credit/debit cards, UPI, and mobile wallets, ensuring secure and convenient transactions."
        },
        {
            question: "Is the Room Booking module integrated with front desk and housekeeping systems?",
            answer: "Yes, it synchronizes room status with the front desk and housekeeping modules, enabling efficient room management and timely cleaning services."
        }
    ];





    return (
        <>

            <section>
                <div className={`${style.section1} insidePageUpperSection`}>
                    <div className={`${style.section1Haeding}`}>
                        ROOM BOOKING
                    </div>
                    <div className={style.section1ImgBox}>

                    </div>
                </div>

            </section>


            <section>
                <div className={`${style.section2} globalSectionSize`}>

                    <div>
                        <img src={icon1} alt="" />
                    </div>

                    <div>
                        <img src={icon2} alt="" />
                    </div>

                    <div>
                        <img src={icon3} alt="" />
                    </div>
                </div>
            </section>



            <section>

                <div className={`${style.section3}`}>

                    <div className={`${style.laptopImgSection3}`}>
                        <img src="" alt="" />
                    </div>

                    <div className={`${style.blueBoxSetion3}`}>
                        <p className={`${style.section3Para}`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis fugit asperiores est debitis ducimus officiis ipsum similique hic quod! Blanditiis iure vero aut sapiente rerum reprehenderit quidem similique in.
                        </p>
                    </div>

                </div>
            </section>



            <section >
                <div className={`${style.section4}`}>

                    <div className={`${style.heading}`}>Key Features</div>

                    <div className={`${style.featureContainer}`}>

                        {features.map((item) =>
                        (
                            <div key={item.key} className={`${style.featureInnerBox}`}>
                                <div className={`${style.headingAndIconFeatures}`}>

                                    <div style={{ width: "20%" }}>
                                        <img style={{ width: "100%" }} src={item.img} alt="" />
                                    </div>

                                    <div>
                                        {item.heading}
                                    </div>

                                </div>

                                <div>
                                    {item.desc}
                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>


            <section >
                <div className={`${style.section5}`}>

                    <div className={`${style.benifitContainer}`}>

                        {benifits.map((item) => (
                            <div className={`${style.innerBenifitBox}`}>

                                <div>
                                    <img src={item.img} alt="" />
                                </div>

                                <div>
                                    <div>
                                        {item.heading}
                                    </div>
                                    <p>
                                        {item.desc}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>


            <section >
                <div className={`${style.FAQsection}`}>

                    <div className={`${style.FAQHeading}`}></div>

                    <div className={`${style.questionAndAnswerBox}`}>

                        {query.map((item) =>
                        (
                            <div>
                                <div>{item.question}</div>
                                <div>{item.answer}</div>
                            </div>

                        ))}

                    </div>

                </div>
            </section>






            <div >
                <Footer2 />

            </div>







        </>
    )
}
