import "./navbar.css"
import { useNavigate } from "react-router-dom";
import UserProfileAvatar from "./UserProfileAvatar";
import { useState } from "react";

const NavBar=()=>{
    const [status, setStatus] = useState(true);
    const navigate = useNavigate();
    const navigateTo=(place)=>{
        if (place == "rest") navigate("/resota")
        else if (place == "regis") navigate("/register")
        else if (place == "sign") navigate("/login")
    }

    
    return(
        <div className="NavBar">
                <div className="logo"></div>
                <div className="lists">
                    <div id="addRestBtn" onClick={()=>navigateTo("rest")}>Add restaurant</div>
                    { status ? 
                        <UserProfileAvatar name="Pandey" /> : 
                    <>
                        <div id="loginBtn" onClick={()=>navigateTo("sign")}>Log in</div>
                        <div id="signinBtn" onClick={()=>navigateTo("regis")}>Sign up</div>
                    </>
                    }
                </div>
        </div>
    );
}
export default NavBar;