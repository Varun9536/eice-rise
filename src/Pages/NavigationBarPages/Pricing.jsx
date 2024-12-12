import styles from "./styles/pricing.module.css"

import img1 from "../../assets/pricing/upperPart/1.webp"
import img2 from "../../assets/pricing/upperPart/2.webp"
import img3 from "../../assets/pricing/upperPart/3.webp"
import Club from "../PricePages/Club"
import Enterprise from "../PricePages/Enterprise"
import Inventary from "../PricePages/Inventary"
import Pos from "../PricePages/Pos"
import FrontDesk from "../PricePages/FrontDesk"
import Banquet from "../PricePages/Banquet"
import Vanilla from "../PricePages/Vanilla"
import { useState } from "react"

export default function Pricing() {



  const suites = [
    {
      suiteName: "CLUB SUITE",
      key: 0
    },

    {
      suiteName: "ENTERPRISE SUITE",
      key: 1
    },

    {
      suiteName: "INVENTORY SUITE",
      key: 2
    },

    {
      suiteName: "POS SUITE",
      key: 3
    },

    {
      suiteName: "FRONT DESK SUITE",
      key: 4
    },

    {
      suiteName: "BANQUET SUITE",
      key: 5
    },

    {
      suiteName: "VANILLA SUITE",
      key: 6
    }
  ]


  const suitPage = [
    {
      page: <Club />
    },

    {
      page: <Enterprise />
    },

    {
      page: <Inventary />
    },

    {
      page: <Pos />
    },
    {
      page: <FrontDesk />
    },
    {
      page: <Banquet />
    },
    {
      page: <Vanilla />
    }
  ]

  const [showSuitPage, setShowSuitPage] = useState(0)

  const handleSuitPage = (e, key) => {

    setShowSuitPage(key)

  }




  return (
    <>
      <section>

        <div className={`${styles.animationSection} insidePageUpperSection`}>

          <div className={`${styles.animationImgSize} ${styles.sideImgCutLeft}`}>
            <img style={{ width: "100%" }} src={img1} alt="" />
          </div>
          <div className={`${styles.animationImgSize} ${styles.middleimage}`}>
            <img style={{ width: "100%" }} src={img2} alt="" />
          </div>
          <div className={`${styles.animationImgSize} ${styles.sideImgCutRight}`}>
            <img style={{ width: "100%" }} src={img3} alt="" />
          </div>

        </div>

      </section>


      <section>
        <div>
          Suites For Your Needs
        </div>


        <div>


          <div>
            {suites.map((item) =>
            (
              <div onClick={(e) => { handleSuitPage(e, item.key) }} key={item.key}>{item.suiteName}</div>
            ))}
          </div>



        </div>
      </section>


      <section>
        {suitPage[showSuitPage].page}

      </section>



    </>
  )
}
