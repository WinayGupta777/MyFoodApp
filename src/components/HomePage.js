import TitleTag from "./HomePage-Title";
import NavBar from "./NavBar";
import "./homepage.css";

const HomePage=()=>{
    return(
        <div className="homepage">
            <div className="section1">
                <NavBar />
                <TitleTag />
            </div>
            <div className="section2">
            </div>
            <div className="section3">
            </div>
        </div>
    );
}
export default HomePage;