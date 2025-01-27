import styles from "./requestButton.module.css"
import { Link } from "react-router-dom"

export default function RequestButton() {
  return (
    <>
            <div className={`${styles.requestDemoBtnSideBar} font1`}>
                <Link style={{ color: "white" }} className="linkClass" to={"form"}>
                    <div className={`${styles.demoButtonSideBar}`}>
                        Request for Demo
                    </div>
                </Link>
            </div>
        </>
  )
}


// import styles from "./requestButton.module.css"
// import { Link } from "react-router-dom"

// export default function RequestButton() {
//     return (
//         <>
//             <div className={`${styles.requestDemoBtnSideBar} font1`}>
//                 <Link style={{ color: "white" }} className="linkClass" to={"form"}>
//                     <div className={`${styles.demoButtonSideBar}`}>
//                         Request for Demo
//                     </div>
//                 </Link>
//             </div>
//         </>
//     )
// }
