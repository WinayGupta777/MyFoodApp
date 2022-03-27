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
            <div className="sectoru4">
                <div className="bottomHead">
                    <div className="bottomLogo">Foody</div>
                    <div className="bottomtag">"Good Food for Good Moments"</div>
                    <div className="bottomlinks">
                        <div id="rowlinks">
                            <p>Who we are</p>
                            <p>Privacy</p>
                            <p>Terms</p>
                            <p>Report Fraud</p>
                            <p>Community</p>
                            <p>Contact</p>
                        </div>
                        <p>
                            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies.<br />
                            All right reserved.©
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserHomePage;