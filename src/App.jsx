import "./styles/App.css";
import Nav from "./components/Nav.jsx";
import Form from "./components/Form.jsx";
import Advertisements from "./components/Advertisements";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="landing">
      <Nav></Nav>
      <div className="highlight">
        <img src="img/Images.png" className="background"></img>
        <section className="containerImgForm">
          <section className="containerTitles">
            <h1 className="welcomeText">
              Diplomado en{" "}
              <strong className="frame327">Reposteria Profesional</strong>{" "}
            </h1>
            <h4 className="article">
              Aprende todo sobre este maravilloso mundo, desde el uso adecuado
              de harinas, hasta la preparación de cremas y natillas.
            </h4>
          </section>

          <Form />
        </section>
      </div>
      <Advertisements />
      <ProductGrid/>
      <Footer />
    </div>
  );
}

export default App;
