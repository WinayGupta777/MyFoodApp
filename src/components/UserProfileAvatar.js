import { Avatar, IconButton, Menu,MenuItem } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const UserProfileAvatar=(props)=>{
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate=useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
        navigate("/");
      };
      const handleJustClose = () => {setAnchorEl(null);};


    return(
        <div id="profile">
                        <Avatar sx={{  bgcolor: 'skyblue' ,width: 44, height: 44,mr:2 }}/>
                        {props.name}
                        <IconButton onClick={handleClick}>
                            <ArrowDropDown sx={{color: 'white' }} />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleJustClose}            
                        >
                            <MenuItem >Profile</MenuItem>
                            <MenuItem >My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
    );
}
export default UserProfileAvatar;