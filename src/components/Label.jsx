import '../styles/Label.css'
const Label = ({ name }) => {
  return (
    <button className="labelStyle">
      <p className="labelPStyle">{name}</p>
    </button>
  );
};
export default Label;
