import "../styles/Form.css";
import Input from "./Input";
import { Icon } from "./Icon";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
const Form = () => {
  const [originalInputs, setOriginalInputs] = useState(true);
  const [newInputs, setNewInputs] = useState(false);
  const addInputs = () => {
    setOriginalInputs(false);
    setNewInputs(true);
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
        <form className="inputs" >
          {originalInputs && (
            <>
              <Input placeholder="Nombre" type="text"></Input>
              <Input placeholder="Apellido" type="text"></Input>
              <Input placeholder="Correo electrónico" type="text"></Input>
            </>
          )}

          {newInputs && (
            <>
              <Input placeholder="+54 11 1234 1234" type="text"></Input>
              <Input placeholder="Área de interés" type="text"></Input>
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
        </form>
        <div className="autorization">
          <button className="button" onClick={addInputs}>
            Continuar
          </button>
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
