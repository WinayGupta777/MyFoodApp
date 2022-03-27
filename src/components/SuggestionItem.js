import "./suggestionitem.css"
import img1 from "../assets/mainbg.jpg";
const SuggestionItem=(props)=>{
    //console.log(props.img);
    return(
        <div className="suggestion-div">
            <div className="img-block">
                <img src={props.img} id="sugg-img" />
            </div>
            <div className="content-block">
                <p>Samosa</p>
                <p id="subless">{props.name}</p>
            </div>
        </div>
    );
}
export default SuggestionItem;