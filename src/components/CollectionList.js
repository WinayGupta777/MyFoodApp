import Card1 from "./Card1";
import "./collectionlist.css";

const CollectionList=()=>{
    const guj = "https://b.zmtcdn.com/data/collections/633e9a523bc441acf1dc13a7899b1c90_1618312187.jpg";
    const pun = "https://st2.depositphotos.com/5653638/11520/i/450/depositphotos_115208152-stock-photo-indian-thali-indian-food-thali.jpg";
    const south = "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
    const pizza = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80";
    const biryani = "https://media.istockphoto.com/photos/semiya-upma-or-vermicelli-uppuma-or-uppittu-is-a-popular-breakfast-picture-id1093039634?k=20&m=1093039634&s=170667a&w=0&h=jlz1iWKd_1VrWak_xN3L8VnlYv79RxiZgqcbSgtDcWc=";
    const speci = "https://images.unsplash.com/photo-1559561724-732dbca7be1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
    const dessert = "https://pikwizard.com/photos/d7f88aeb085a66012fd6043bbab2e746-s.jpg";
    const burger = "https://images.unsplash.com/photo-1599836175539-bfe66e042737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
    return(
        <div className="collection-outer">
            <Card1 type={guj} name="Gujarati Thali"/>
            <Card1 type={pun} name="Punjabi" />
            <Card1 type={south} name="South Indian" />
            <Card1 type={pizza} name="Pizza party" />
            <Card1 type={biryani} name="Brillient Biryani" />
            <Card1 type={speci} name="Special" />
            <Card1 type={dessert} name="Dessert night" />
            <Card1 type={burger} name="Food and Drink" />
        </div>
    );
}
export default CollectionList;