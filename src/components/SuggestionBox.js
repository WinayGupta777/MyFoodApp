import "./suggestionbox.css";
import SuggestionItem from "./SuggestionItem";

const SuggestionBox=()=>{
    return(
        <div className="SuggestionBox">
            <SuggestionItem />
            <SuggestionItem />
            <SuggestionItem />
        </div>
    );
}
export default SuggestionBox;
