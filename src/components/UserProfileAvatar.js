import { Avatar, IconButton, Menu,MenuItem } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { useState } from "react";

const UserProfileAvatar=(props)=>{
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };

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
                            onClose={handleClose}            
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
    );
}
export default UserProfileAvatar;