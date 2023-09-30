import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer className="footerLayout">
    <div className="mainFooter">
      <div className="main_container">
        <section className="rowFooter">
          <p className="rowTitle">Acerca de Aprende</p>
          <div className="itemRowContainer">
            <section className="smallRow">
              <p className="paragraphRow">Sobre nosotros</p>
              <p className="paragraphRow">Empresas</p>
              <p className="paragraphRow"> Prensa</p>
            </section>
            <section className="smallRow">
              <p className="paragraphRow">Sé parte del equipo</p>
            </section>
          </div>
        </section>
        <section className="rowFooter">
          <p className="rowTitle">Explorar</p>
          <div className="itemContainerParagraphs">
            <p className="paragraphRow">Historias de exito</p>
            <p className="paragraphRow">Docentes</p>
            <p className="paragraphRow">Blog</p>
            <p className="paragraphRow">Pagos</p>
          </div>
        </section>
        <section className="rowFooter">
          <p className="rowTitle">Sedes</p>
          <div className="containerSedes">
            <p className="paragraphRow">
              US | 95 Merrick Way, Suite 300, Coral Gables
            </p>
            <p className="paragraphRow">MX | Río Sena 63, Piso 1, Cuauhtémoc</p>
            <p className="paragraphRow">
              CO | Calle 127a 53a 45 Torre 2 piso 7 OF 145-147
            </p>
          </div>
        </section>
        <section className="colFooter">
          <div className="colTitleContainer">
            <p className="rowTitle">Categorías</p>
            <div className="listContainer">
              <p className="paragraphRow">Gastronomía</p>
              <p className="paragraphRow">Emprendimiento</p>
              <p className="paragraphRow">Hospitalidad y eventos</p>
              <p className="paragraphRow">Bienestar</p>
              <p className="paragraphRow">Oficios</p>
              <p className="paragraphRow">Belleza</p>
            </div>
          </div>
        </section>
      </div>
      <div className="bottom_container">
        <section className="storesSection">
          <img src="/img/appstore.png" alt="" className="storesApp" />
          <img src="/img/googleplay.png" alt="" className="storesGoogle" />
        </section>
        <section className="colFooter">
          <section className="listContainer">
            <section className="brandsContainer">
              <div className="rrssItem">
                <img src="/img/ico_social_facebook.png" alt="" className="brandIcon" />
                <p className="paragraphRow">Facebook</p>
              </div>
              <div className="rrssItem">
                <img src="/img/ico_social_instagram.png" alt="" className="brandIcon" />
                <p className="paragraphRow">Instagram</p>
              </div>
              <div className="rrssItem">
                <img src="/img/ico_social_linkedin.png" alt="" className="brandIcon" />
                <p className="paragraphRow">LinkedIn</p>
              </div>
              <div className="rrssItem">
                <img src="/img/ico_social_tiktok.png" alt="" className="brandIcon" />
                <p className="paragraphRow">TikTok</p>
              </div>
            </section>
          </section>
        </section>
        <section className="tycOffices">
          <section className="tycOffices">
            <p className="paragraphRow">© 2022 Aprende Institute</p>
          </section>
        </section>
      </div>
    </div>
    </footer>
  );
};
export default Footer;
