import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    // useState
    const [BtnNameReact, setBtnNameReact] = useState("Login");
    return (
        <div className="header-sec">
            <div className="container" >
                <div className="header flex">
                    <div className="Logo-container">
                        <img className="Logo" src={LOGO_URL} alt="" />
                    </div>
                    <div className="nav-item">
                        <ul className="flex">
                            <li><a hfref="">Home</a></li>
                            <li><a hfref="">About Us</a></li>
                            <li><a hfref="">Contact Us</a></li>
                            <li><a hfref="">Cart</a></li>
                            <button className="btn" onClick={() => {
                                BtnNameReact ==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                            }}>{BtnNameReact}</button>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;