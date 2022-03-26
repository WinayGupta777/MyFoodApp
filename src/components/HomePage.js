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
        </div>
    );
}
export default HomePage;