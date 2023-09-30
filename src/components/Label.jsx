import '../styles/Label.css'
const Label = ({ name }) => {
  return (
    <label className="labelStyle">
      <p className="labelPStyle">{name}</p>
    </label>
  );
};
export default Label;
