import React, { useEffect, useState } from "react";
//import { products } from "../../../products";
import { useParams } from "react-router";
import "./itemDetail.css";
import Counter from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

export const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    let productCollection = collection(db, "products");
    let refDoc = doc(productCollection, id);
    const getProduct = getDoc(refDoc);
    getProduct.then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
  }, [id]);

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={item.imageUrl} alt="" />
      </div>
      <div className="product-details">
        <h1 className="product-title">{item.title}</h1>
        <p className="product-description">{item.description}</p>
        <span className="price">{item.price}</span>
        <Counter item={item} />
      </div>
    </div>
  );
};
