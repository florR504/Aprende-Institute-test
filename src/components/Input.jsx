import "../styles/Input.css";
const Input = ({ placeholder, type, value, onChange}) => {
  const inputClass = `text ${type === "number" ? "inputImage" : ""}`;
  return (
    <div className="inputText">
      <div className="input">
        <input placeholder={placeholder} type={type} className={inputClass} value={value} onChange={onChange}></input>
      </div>
    </div>
  );
};
export default Input;
