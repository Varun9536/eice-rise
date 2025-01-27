import styles from "./topNavBar.module.css"
import { IoCloseSharp } from "react-icons/io5";
import { HiOutlineBars3 } from "react-icons/hi2";
import logo from "../../../assets/logo/logo.svg"
import { useEffect, useState } from "react";

export default function TopNavBar({ sendDataToParent , change }) {

    const [navIcon, setNavIcon] = useState(false);

    const handleIconChange = () => {
        setNavIcon(prev => !prev);
    };


    useEffect(()=>
    {
        
        handleIconChange()
    } , [change])


    return (
       
        <>

            <div>
                {navIcon ?
                    (< IoCloseSharp className={styles.menuIcon} onClick={() => { handleIconChange(), sendDataToParent() }} size={36} />) :
                    (<HiOutlineBars3 className={styles.closeIcon} onClick={() => { handleIconChange(), sendDataToParent() }} size={36} />)}
            </div>

            <div style={{ width: "100px" }}>
                <img style={{ width: "100%" }} src={logo} alt="Logo" />
            </div>

        </>

    )
}
