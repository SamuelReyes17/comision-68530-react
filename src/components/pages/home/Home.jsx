import TitleComponent from "./ShopNow";
import "./home.css";

const Home = () => {
  return (
    <div>
      <section className="banner-section">
        <div className="banner-text">
          <h1>Elevate your performance</h1>
          <h3>Real ballers club</h3>
          <TitleComponent texto={"Shop Now"} />
        </div>
      </section>
    </div>
  );
};

export default Home;
