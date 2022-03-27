import "./homepagetitle.css";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const TitleTag=()=>{
    const navigate = useNavigate();
    const onOrderPressed=()=>{
        console.log("Order pressed");
        navigate("/login");
    }
    return(
        <div className="tcontainer">
            <div className="tmain">
                <div className="titleM">
                    <p>
                        The Fastest<br/>
                        Delivery<br/>
                        in <b>Your City</b><br/>
                    </p>
                </div>
                <div className="subtitle">
                    <p>"Enjoy food to your family without getting out in this pandemic. Feel It - Food! "</p>
                </div>
                <div className="buttons">
                    <Button 
                        variant="contained"
                        disableElevation
                        endIcon={<DeliveryDiningIcon sx={{height: 35, width: 35}}/>}
                        sx={{backgroundColor: 'orange', width: 250,height: 70, fontSize: 23,'&:hover':{ backgroundColor: '#FF8C27'} }}
                        onClick={()=>onOrderPressed()}
                    >Oerder Now</Button>
                </div>
                <div className="tagline">
                    <p>"Good Food for Good Moments"</p>
                </div>
            </div>
        </div>
    );
}
export default TitleTag;