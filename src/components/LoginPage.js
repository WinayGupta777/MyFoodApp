import "./loginpage.css"
import { Close } from "@mui/icons-material";
import { Button, Input, TextField } from "@mui/material";
import GoogleButton from "react-google-button";
const LoginPage=()=>{
    return(
        <div className="loginpage">
            <div className="mainpart">
                {/* Half one caontains only bgimage */}
                <div className="half-one"></div>

                {/* Half two caontains other part */}
                <div className="half-two">
                    <div className="headUp">
                        <div className="title">
                            <p>Sign In</p>
                            <Close sx={{ height: 50, width: 50, cursor: 'pointer'}} />
                        </div>

                        <div className="content">
                            <p>Welcome back! Login with your data that you enetred during registration</p>

                            <TextField
                                required
                                id="filled-required"
                                type="email"
                                label="Email"
                                sx={{width: '100%', mt: 3, backgroundColor: 'white'}}
                            />

                            <TextField
                                required
                                label="Password"
                                type="password"
                                sx={{width: '100%', mt: 3, mb:2, backgroundColor: 'white'}}
                            />

                            <div>
                                <a href="#" id="fplink">Forgot password?</a>
                            </div>

                            <Button 
                                variant="contained" 
                                size="large" 
                                disableElevation
                                sx={{width: '100%', mt: 3}}
                            >LOGIN</Button>

                            {/* ---------------or--------------- */}
                            <div><h3 id="linebw">or</h3></div>

                            <div className="Googlebtn">
                                <GoogleButton />
                                <p>Don't have an account? 
                                    <a href="#" id="fplink">Register</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;