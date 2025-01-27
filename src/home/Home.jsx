import TitleComponent from "./ShopNow";
import "./home.css"

const  ItemListContainer = () => {
    return (
    <section className="banner-section">
        <div className="banner-text">
            <h1>Elevate your performance</h1>
            <h3>Real ballers club</h3>
            <TitleComponent texto={"Shop Now"}/>
        </div>
    </section>
      );
};

export default ItemListContainer;
