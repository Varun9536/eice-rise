import React from 'react'
import style from "./Styles/banquetAndBilling.module.css"

export default function BanquetAnsBilling() {
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

    </>
  )
}
