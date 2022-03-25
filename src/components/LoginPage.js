import "./loginpage.css"
import BGImage from "../assets/onSignup.jpg"
import { Close } from "@mui/icons-material";
import { Button, Input, TextField } from "@mui/material";
const LoginPage=()=>{
    return(
        <div className="loginpage">
            <div className="mainpart">
                <div className="half-one"></div>
                <div className="half-two">
                    <div className="headUp">
                        <div className="title">
                            <p>Sign In</p>
                            <Close sx={{ height: 50, width: 50, cursor: 'pointer'}} />
                        </div>
                        <div className="content">
                            <p>Welcome back! Login with your data that you enetred during registration</p>

                            {/* Login with Google */}

                            <div><h3 id="linebw">or</h3></div>
                            <TextField
                                required
                                id="filled-required"
                                type="email"
                                label="Email"
                                sx={{width: '100%', mt: 3}}
                            />

                            <TextField
                                required
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                sx={{width: '100%', mt: 3, mb:2}}
                            />

                            <div>
                                <a>Forgot password?</a>
                            </div>
                            <Button 
                                variant="contained" 
                                size="large" 
                                disableElevation
                                sx={{width: '100%', mt: 3}}
                            >LOGIN</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;