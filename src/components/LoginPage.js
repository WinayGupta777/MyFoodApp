import "./loginpage.css"
import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton, TextField } from "@mui/material";
import GoogleButton from "react-google-button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MsgBox from "./MsgBox";


const LoginPage=()=>{
    const [userEmail, setEmail] = useState('');
    const [userPasswd, setPasswd] = useState('');
    const [msg, setMsg] = useState(null);
    const [status, setStatus] = useState(false);
    const navigate = useNavigate();

    const onChangeHandler=(lbl, e)=>{
        if (lbl=="email") setEmail(e.target.value);
        else if (lbl=="pass") setPasswd(e.target.value);
    }
    console.log( userEmail + userPasswd);

    const onSubmited=(e)=>{
        e.preventDefault();
        console.log("LoginPage: Submit pressed.");
        axios.post("http://localhost:8080/signin",{
                email:userEmail,
                password:userPasswd
        }).then((r)=>{
                setStatus(r.data.status);
                setMsg(r.data.message);
                console.log(r.data);
        })
        .catch((e)=>{
            console.log(e.message)
            setMsg(e.message);
            putMsg();
        });
    }
    const putMsg=()=>{
        setTimeout(() => {
            setMsg(null)
        }, 4000);
        return(<MsgBox msg={msg} />);
    }

    const navigateToRegister=()=>{
        navigate("/register");
    }

    return(
        <div className="loginpage">
            <div className="mainpart">
                {/* Half one contains only bgimage */}
                <div className="half-one-signin"></div>

                {/* Half two contains other part */}
                <div className="half-two">
                    <div className="headUp">
                        <div className="title">
                            <p>Sign In</p>
                            <IconButton onClick={()=>navigate("/")}>
                                <CloseIcon sx={{ height: 50, width: 50}} />
                            </IconButton>
                        </div>

                        <div className="content">
                            <p>Welcome back! Login with your data that you enetred during registration</p>

                            <form onSubmit={onSubmited}>
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
                                    sx={{width: '100%', mt: 3, mb:2, backgroundColor: 'white'}}
                                    onChange={(e)=>onChangeHandler("pass",e)}
                                />

                                <div>
                                    <a href="#" id="fplink">Forgot password?</a>
                                </div>

                                <Button 
                                    type="submit"
                                    variant="contained" 
                                    size="large" 
                                    disableElevation
                                    sx={{width: '100%', mt: 3}}
                                >LOGIN</Button>
                            </form>
                            {/* ---------------or--------------- */}
                            <div><h3 id="linebw">or</h3></div>

                            <div className="Googlebtn">
                                <GoogleButton />
                                <p>Don't have an account? 
                                    <a  onClick={()=>navigateToRegister()} id="fplink">Register</a>
                                </p>
                            </div>
                            
                            {msg ? putMsg() : null}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;