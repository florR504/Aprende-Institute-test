import "../styles/Form.css";
import Input from "./Input";
import { Icon } from "./Icon";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Form = () => {
  const [originalInputs, setOriginalInputs] = useState(true);
  const [newInputs, setNewInputs] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [areaInput, setAreaInput] = useState("");

  const addInputs = () => {
    setOriginalInputs(false);
    setNewInputs(true);
  };
  const handleSubmitForm = (event) => {
    event.preventDefault()
    const info = {
      nombre: nameInput,
      apellido: lastNameInput,
      email: emailInput,
      numero: numberInput,
      area: areaInput,
    };
    console.log(info);
  };
  const handleInputName = (event) => {
    setNameInput(event.target.value);
  };
  const handleInputLastName = (event) => {
    setLastNameInput(event.target.value);
  };
  const handleInputEmailName = (event) => {
    setEmailInput(event.target.value);
  };
  const handleInputNumberName = (event) => {
    setNumberInput(event.target.value);
  };
  const handleInputAreaName = (event) => {
    setAreaInput(event.target.value);
  };
  return (
    <div className="form_body">
      <div className="header-container">
        <h4 className="form_title">¡Recibe información de precios y becas!</h4>
        <p className="form_text">
          Al recibir tu información, uno de nuestros asesores académicos se
          comunicará contigo
        </p>
      </div>
      <div className="form-container">
        <form className="inputs" onSubmit={handleSubmitForm}>
          {originalInputs && (
            <>
              <Input
                placeholder="Nombre"
                type="text"
                value={nameInput}
                onChange={handleInputName}
              ></Input>
              <Input
                placeholder="Apellido"
                type="text"
                value={lastNameInput}
                onChange={handleInputLastName}
              ></Input>
              <Input
                placeholder="Correo electrónico"
                type="text"
                value={emailInput}
                onChange={handleInputEmailName}
              ></Input>
            </>
          )}

          {newInputs && (
            <>
              <Input
                placeholder="+54 11 1234 1234"
                type="number"
                value={numberInput}
                onChange={handleInputNumberName}
              ></Input>
              <Input
                placeholder="Área de interés"
                type="text"
                value={areaInput}
                onChange={handleInputAreaName}
              ></Input>
            </>
          )}
          <div className="checkbox">
            <div className="check">
              <img src="img/icon.png" />
            </div>
            <label htmlFor="wppCheckbox" className="wppCheckBoxStyle">
              Recibe mensajes vía{" "}
              <Icon icon={faWhatsapp} css={"wppIcon"}></Icon> WhatsApp y Sms
              sobre nuestros diplomados
            </label>
          </div>
          {newInputs && (
            <button className="button" type="submit">
              Quiero hablar con un asesor
            </button>
          )}
        </form>
        <div className="autorization">
          {originalInputs && (
            <button className="button" onClick={addInputs}>
              Continuar
            </button>
          )}

          <p className="autorizationTypography">
            Al hacer click arriba, nos autoriza a contactarlo/a mediante un
            sistema automatizado de llamadas al telefono indicado arriba con el
            fin de recibir informacion relevante sobre Aprende Intitute, y usted
            acepta nuestros Términos de servicio y política de privacidad. Su
            consentimiento no constituye una condición de compra
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
