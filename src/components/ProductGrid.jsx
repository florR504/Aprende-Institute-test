import "../styles/ProductGrid.css";
import Label from "./Label";
import CardImage from "../components/CardImage";
import { useState, useEffect } from "react";

const ProductGrid = () => {
  const [cards, setCards] = useState([]);
  const [cartsNumber, setCartsNumber] = useState(4);
  const [uniqueSchools, setUniqueSchools] = useState([]);

  const setNewNumber = () => {
    setCartsNumber(8);
  };

  useEffect(() => {
    fetch(
      "https://staging.aprende.dev/wp-json/aprende/v2/content/product-pages?posts_per_page=-1"
    )
      .then((response) => response.json())
      .then((data) => {
        const productData = Object.values(data.results);
        const filteredData = productData.filter((product) => {
          return product.post_meta && product.post_meta.school_name;
        });
        const uniqueSchoolNames = Array.from(
          new Set(filteredData.map((product) => product.post_meta.school_name))
        );

        setCards(filteredData);
        setUniqueSchools(uniqueSchoolNames);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);

  return (
    <div className="productsContainer">
      <h2 className="productTitle">Nuestros diplomados</h2>
      <p className="productsText">
        Usamos la tecnología a tu favor para que avances fácilmente en todos los
        contenidos de nuestros diplomados, siempre con el acompañamiento de un
        docente experto. ¿A cuál escuela quieres unirte?
      </p>
      <div className="labelsContainer">
        {uniqueSchools.map((schoolName, index) => (
          <Label key={index} name={schoolName}></Label>
        ))}
      </div>
      <div className="carouselCards">
        {cards.slice(0, cartsNumber).map((product, index) => (
          <CardImage
            key={index}
            title={product.post_title}
            stars={product.post_meta.product_rating}
            students={product.post_meta.product_reviews_amount}
            image={product.post_meta.featured_image.thumbnail.src}
          />
        ))}
      </div>
      <div className="buttonDiv">
        <button className="buttonCarousel" onClick={setNewNumber}>
          <p className="buttonCarouselText">Cargar más</p>
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
