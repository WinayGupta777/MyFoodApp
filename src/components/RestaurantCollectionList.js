import Card1 from "./Card1";
import "./collectionlist.css";
import list from "./Restaurant.json"
const RestaurantCollectionList=()=>{
    const rlist = list;
    //console.log(rlist);
    return(
        <div className="collection-outer">
            <Card1 type={rlist[0].rest} name={rlist[0].name} />
            <Card1 type={rlist[2].rest} name={rlist[2].name} />
            <Card1 type={rlist[3].rest} name={rlist[3].name} />
            <Card1 type={rlist[4].rest} name={rlist[4].name} />
            <Card1 type={rlist[5].rest} name={rlist[5].name} />
            <Card1 type={rlist[6].rest} name={rlist[6].name} />
            <Card1 type={rlist[7].rest} name={rlist[7].name} />
        </div>
    );
}
export default RestaurantCollectionList;