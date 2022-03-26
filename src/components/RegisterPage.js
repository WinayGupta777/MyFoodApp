import "./registerpage.css"
import { Close } from "@mui/icons-material";
import { Button,TextField, Checkbox, FormControlLabel } from "@mui/material";

const RegisterPage=()=>{
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

                            <TextField
                                required
                                id="filled-required"
                                type="text"
                                label="Username"
                                sx={{width: '100%', mt: 3, backgroundColor: 'white'}}
                            />

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
                                sx={{width: '100%', mt: 3, backgroundColor: 'white'}}
                            />

                            <TextField
                                required
                                label="Confirm Password"
                                type="password"
                                sx={{width: '100%', mt: 3,mb:1, backgroundColor: 'white'}}
                            />
                            
                            <FormControlLabel control={<Checkbox defaultChecked size="small"/>} sx={{color: 'gray'}} label={label} />
          
                            <Button 
                                variant="contained" 
                                size="large" 
                                disableElevation
                                sx={{width: '100%', mt: 3}}
                            >Register</Button>

                            <div className="Googlebtn">
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