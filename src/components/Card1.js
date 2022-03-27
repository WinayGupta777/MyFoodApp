import "./card1.css"

const Card1=(props)=>{
    return(
        <div className="card-block">
            <img  src={props.type}  />
            <div className="bottomTxt">{props.name}</div>
        </div>
    );
}
export default Card1;