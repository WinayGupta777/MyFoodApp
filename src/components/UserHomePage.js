import NavBar from "./NavBar";
import SearchBox from "./SearchBox";
import AppName from "./AppName";
import "./userhomepage.css"
import CollectionList from "./CollectionList";

const UserHomePage=()=>{
    return(
        <div className="userhome">
            <div className="oval-wrap">
                <div className="oval">
                    <NavBar />
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