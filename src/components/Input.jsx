import "../styles/Input.css";
const Input = ({ placeholder, type }) => {
  return (
    <div className="inputText">
      <div className="input">
        <input placeholder={placeholder} type={type} className="text"></input>
      </div>
    </div>
  );
};
export default Input;
