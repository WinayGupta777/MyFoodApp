import { useState } from "react";
import "./suggestionbox.css";
import SuggestionItem from "./SuggestionItem";

const SuggestionBox=(props)=>{
    // console.log(props.suggestions);
    return(
        <div className="SuggestionBox">
            {
                props.suggestions.map(
                    (i)=><SuggestionItem img={i.samosa.img} name={i.samosa.restname} />
                )
            }
        </div>
    );
}
export default SuggestionBox;
