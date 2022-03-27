import "./suggestionitem.css"
import img1 from "../assets/mainbg.jpg";
const SuggestionItem=()=>{
    return(
        <div className="suggestion-div">
            <div className="img-block">
                <img src={img1} id="sugg-img" />
            </div>
            <div className="content-block">
                <p>Samosa</p>
            </div>
        </div>
    );
}
export default SuggestionItem;