import "./navbar.css"
import { useNavigate } from "react-router-dom";
import UserProfileAvatar from "./UserProfileAvatar";
import { useState } from "react";

const NavBar=(props)=>{
    const [status, setStatus] = useState(props.status);
    const [username, setUsername] = useState(props.uname);
    const navigate = useNavigate();

    // setStatus(props.status);

    const navigateTo=(place)=>{
        if (place == "rest") navigate("/addrestaurant")
        else if (place == "regis") navigate("/register")
        else if (place == "sign") navigate("/login")
    }

    
    return(
        <div className="NavBar">
                <div className="logo"></div>
                <div className="lists">
                    <div id="addRestBtn" onClick={()=>navigateTo("rest")}>Add restaurant</div>
                    { status ? 
                        <UserProfileAvatar name={username} /> : 
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