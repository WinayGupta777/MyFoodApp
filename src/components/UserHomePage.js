import NavBar from "./NavBar";
import "./userhomepage.css"

const UserHomePage=()=>{
    return(
        <div className="userhome">
            <div className="oval-wrap">
                <div className="oval">
                    <NavBar />
                </div>
            </div>
            <div className="sectoru2"></div>
        </div>
    );
}
export default UserHomePage;