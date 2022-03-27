import NavBar from "./NavBar";
import SearchBox from "./SearchBox";
import AppName from "./AppName";
import "./userhomepage.css"
import CollectionList from "./CollectionList";
import { useState } from "react";

const UserHomePage=(props)=>{
    const [status,setStatus] = useState(props.status);
    const [uname, setUname] = useState(props.uname);
    return(
        <div className="userhome">
            <div className="oval-wrap">
                <div className="oval">
                    <NavBar status={status} uname={uname}/>
                    <AppName />
                    <SearchBox />
                </div>
            </div>
            <div className="sectoru2">
                <div className="headTitle">Collections</div>
                <CollectionList />
            </div>
        </div>
    );
}
export default UserHomePage;