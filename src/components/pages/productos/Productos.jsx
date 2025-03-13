import { useEffect, useState } from "react";
import ProductCard from "../../common/productCard/ProductCard";
import { useParams } from "react-router";
import SkeletonCard from "../../common/skeleton/SkeletonCard";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

const Productos = () => {
  let { name } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const coleccionDeProductos = collection(db, "products");
    let consulta = coleccionDeProductos;
    if (name) {
      const coleccionFiltrada = query(
        coleccionDeProductos,
        where("category", "==", name)
      );
      consulta = coleccionFiltrada;
    }
    const getProducts = getDocs(consulta);
    getProducts.then((res) => {
      let newArray = res.docs.map((element) => {
        return { id: element.id, ...element.data() };
      });
      setItems(newArray);
    });
  }, [name]);

  /*const rellenar = () => {
    let productsCollection = collection(db, "products");
    products.forEach((product) => {
      addDoc(productsCollection, product);
    });
  };*/

  return (
    <div>
      {/*<button onClick={rellenar}>rellenar db</button>*/}
      {items.length === 0 ? (
        <div>
          <SkeletonCard />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "5rem",
            height: "100%",
          }}
        >
          {items.map((item) => {
            return (
              <ProductCard
                key={item.id}
                id={item.id}
                price={item.price}
                title={item.title}
                description={item.description}
                stock={item.stock}
                imageUrl={item.imageUrl}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Productos;
