import "./msgbox.css";

const MsgBox=(props)=>{
    return(
        <div className="MsgBox">
            {props.msg}
        </div>
    );
}
export default MsgBox;