import { Search, VisibilityOff } from "@mui/icons-material";
import { IconButton, OutlinedInput, InputAdornment, TextField} from "@mui/material";
import { useState } from "react";
import "./searchbox.css"

const SearchBox=()=>{
    const [value, setValue] = useState(''); 
    const onChangeMethod=(e)=>{
        // props.func(e.target.value);
        setValue(e.target.value);
        // var searchWord = e.target.value.toLowerCase();
        // var displayCmd = AllCmds.filter(
        //     (i)=>{
        //         return i.cmd.indexOf(searchWord) !== -1;
        //     }
        //);
        // if(searchWord){setData(displayCmd);}
        // else {setData([]);}
        //setData(displayCmd);
    }
    return(
        <div>
            <div className="cmdsugg">
                {/* <input
                    autoFocus
                    autoComplete="off"
                    type="text"
                    id="in"
                    name="cmd"
                    value={value}
                    onChange={(e)=>onChangeMethod(e)}
                ></input> */}
                <TextField 
                    variant="outlined"
                    placeholder="Search for restaurant or dish"
                    type="text"
                    id="in"
                    autoFocus="true"
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
                {/* <OutlinedInput
                    id="in"
                    sx={{
                        borderColor: 'white',
                        color: 'white', 
                        width: '40vw',
                    }}
                    type='text'
                    // onChange={handleChange('password')}
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton>
                                <Search sx={{color: 'white'}}/>
                            </IconButton>
                        </InputAdornment>
                    }
                /> */}
                {/* {filteredData.length != 0 ?
                    <div className='suggestionBox'>
                        {filteredData.map(
                            (value,key)=>{
                            return <div className='suggetion' onClick={()=>onSuggClick(value.cmd)}>{value.cmd}</div>
                        })}
                    </div> : null
                } */}
            </div>
        </div>
    );
}
export default SearchBox;