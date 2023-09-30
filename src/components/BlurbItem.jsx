import "../styles/BlurbItem.css";
const BlurbItem = ({ icon, title, text }) => {
  return (
    <div className="item">
      <div className="itemIcon">
        <div className="imgBox"></div>
        <img src={icon} alt="Iconos" className="imgIcon" />
      </div>
      <div className="itemContainer">
        <h4 className="itemTitle">{title}</h4>
        <p className="itemParag">{text}</p>
      </div>
    </div>
  );
};
export default BlurbItem;
