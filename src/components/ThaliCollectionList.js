import Card1 from "./Card1";
import "./collectionlist.css";
import thalis from "./ThaliTypes.json";

const CollectionList=()=>{
    const thali = thalis;
    return(
        <div className="collection-outer">
            <Card1 type={thali[0].thali} name={thali[0].name} />
            <Card1 type={thali[1].thali} name={thali[1].name} />
            <Card1 type={thali[2].thali} name={thali[2].name} />
            <Card1 type={thali[3].thali} name={thali[3].name} />
            <Card1 type={thali[4].thali} name={thali[4].name} />
            <Card1 type={thali[5].thali} name={thali[5].name} />
            <Card1 type={thali[6].thali} name={thali[6].name} />
            <Card1 type={thali[7].thali} name={thali[7].name} />
        </div>
    );
}
export default CollectionList;