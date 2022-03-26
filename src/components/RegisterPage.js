import "./registerpage.css"
import { Close } from "@mui/icons-material";
import { Button,TextField, Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";

const RegisterPage=()=>{
    const [userName, setUserName] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userPasswd, setPasswd] = useState('');
    const [userCPasswd, setCPasswd] = useState('');

    const onChangeHandler=(lbl, e)=>{
        if (lbl=="name") setUserName(e.target.value);
        else if (lbl=="email") setEmail(e.target.value);
        else if (lbl=="pass") setPasswd(e.target.value);
        else if (lbl=="cpass") setCPasswd(e.target.value);
    }
    // console.log(userName + userEmail + userPasswd + userCPasswd);

    const onSubmited=()=>{
        console.log(userCPasswd + userPasswd);
        if (userCPasswd == userPasswd){
            console.log("Password are matching");
        }
    }
    

    const label = "I agree to all the Term, Privacy Policy and Fees";
    return(
        <div className="registerpage">
            <div className="mainpart">
                {/* Half one contains only bgimage */}
                <div className="half-one-signup"></div>
                {/* Half two contains other part */}
                <div className="half-two">
                    <div className="headUp">

                        <div className="title">
                            <p>Sign Up</p>
                            <Close sx={{ height: 50, width: 50, cursor: 'pointer'}} />
                        </div>

                        <div className="content">
                            <p>Let's get you all set up so you can verify your personal account and begin setting up your profile.</p>

                            <form onSubmit={onSubmited}>
                                <TextField
                                    required
                                    type="text"
                                    label="Username"
                                    sx={{width: '100%', mt: 3, backgroundColor: 'white'}}
                                    onChange={(e)=>onChangeHandler("name",e)}
                                />

                                <TextField
                                    required
                                    type="email"
                                    label="Email"
                                    sx={{width: '100%', mt: 3, backgroundColor: 'white'}}
                                    onChange={(e)=>onChangeHandler("email",e)}
                                />

                                <TextField
                                    required
                                    label="Password"
                                    type="password"
                                    sx={{width: '100%', mt: 3, backgroundColor: 'white'}}
                                    onChange={(e)=>onChangeHandler("pass",e)}
                                />

                                <TextField
                                    required
                                    label="Confirm Password"
                                    type="password"
                                    sx={{width: '100%', mt: 3,mb:1, backgroundColor: 'white'}}
                                    onChange={(e)=>onChangeHandler("cpass",e)}
                                />
                                
                                <FormControlLabel control={<Checkbox defaultChecked size="small"/>} sx={{color: 'gray'}} label={label} />
            
                                <Button
                                    type="submit"
                                    variant="contained" 
                                    size="large"
                                    disableElevation
                                    sx={{width: '100%', mt: 3}}
                                >Register</Button>
                            </form>

                            <div className="bottomTxt">
                                <p>Already have an account? 
                                    <a href="#" id="fplink">Sign in</a>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RegisterPage;