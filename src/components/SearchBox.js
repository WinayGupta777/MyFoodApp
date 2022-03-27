import { Search} from "@mui/icons-material";
import { InputAdornment, TextField} from "@mui/material";
import { useState } from "react";
import "./searchbox.css"
import SuggestionBox from "./SuggestionBox";
import AllThalis from "./SuggestionList.json"



const SearchBox=()=>{
    const [value, setValue] = useState(''); 
    const [suggs,setSugg] = useState([]);

     const onChangeMethod=(e)=>{
        // props.func(e.target.value);
        setValue(e.target.value);
        var searchWord = e.target.value.toLowerCase();
        var displayCmd = AllThalis.filter(
                (i)=>{ 
                    return i;
                }
            );
        if(searchWord){
            setSugg(displayCmd);
        }
        else {
            setSugg([]);
        }
        //setData(displayCmd);
     }
    return(
        <div>
            <div className="cmdsugg">
                <TextField 
                    variant="outlined"
                    placeholder="Search for restaurant or dish"
                    type="text"
                    id="in"
                    autoFocus
                    autoComplete="off"
                    onChange={(e)=>onChangeMethod(e)}
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: 1
                    }}
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search />
                          </InputAdornment>
                        ),
                      }}
                />
     
                {suggs.length != 0 ?
                    <SuggestionBox suggestions={suggs} />: null
                }
            </div>
        </div>
    );
}
export default SearchBox;