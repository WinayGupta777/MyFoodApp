import NavBar from "./NavBar";
import SearchBox from "./SearchBox";
import AppName from "./AppName";
import "./userhomepage.css"
import CollectionList from "./ThaliCollectionList";
import { useState } from "react";
import RestaurantCollectionList from "./RestaurantCollectionList";

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
                <div className="headSubTitle"><p>Find the best which suits you</p></div>
                <CollectionList />
            </div>
            <div className="sectoru3">
                <div className="headTitle">Popular Restaurants near you</div>
                <div className="headSubTitle"><p>Discover the best food & drinks just within <b>3 km</b></p></div>
                <RestaurantCollectionList />
            </div>
        </div>
    );
}
export default UserHomePage;