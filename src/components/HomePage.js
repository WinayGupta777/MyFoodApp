import TitleTag from "./HomePage-Title";
import NavBar from "./NavBar";
import "./homepage.css";
import { useState } from "react";

const HomePage=(props)=>{
    const [status,setStatus] = useState(props.status);
    const [uname, setUname] = useState(props.uname);
    return(
        <div className="homepage">
            <div className="section1">
                <NavBar status={status}  uname={uname} />
                <TitleTag />
            </div>
        </div>
    );
}
export default HomePage;