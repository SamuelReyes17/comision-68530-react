import "./home.css";
import { Link } from "react-router";

export default function TitleComponent({texto}) {
    return (
        <Link to={'/shop'}>
            <button className="shop-button">{texto}</button>
        </Link>
    )
}