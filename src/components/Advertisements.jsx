import BlurbItem from "./BlurbItem";
import "../styles/Advertisements.css";

let items = [
  {
    icon: "/img/alarm.png",
    title: "Estudia a tu Ritmo",
    text: "Tú decides cuándo y dónde. Estudia desde tu casa como si estuvieras en el salón de clases sin perderte de nada.",
  },
  {
    icon: "/img/support_agent.png",
    title: "Crece junto a los mejores expertos",
    text: "Aprende de nuestros expertos disponibles en todo momento para asesorarte y resolver tus dudas.",
  },
  {
    icon: "/img/history_edu.png",
    title: "Obtén tu certificado",
    text: "Al finalizar tus estudios, recibirás un certificado digital que avala tus habilidades y te destaca en el mercado laboral.",
  },
  {
    icon: "/img/groups.png",
    title: "Forma parte de nuestra comunidad",
    text: "Conéctate con otros estudiantes y comparte ideas y conocimientos en nuestros exclusivos grupos de Facebook.",
  },
  {
    icon: "/img/edit_square.png",
    title: "Practica lo aprendido",
    text: "Refuerza tus habilidades con proyectos prácticos aplicados a casos reales en cada curso.",
  },
  {
    icon: "/img/smart_display.png",
    title: "Acceso ilimitado a clases en vivo",
    text: "Complementa tu aprendizaje con clases interactivas dirigidas por expertos cualquier día de la semana.",
  },
];
const Advertisements = () => {
  return (
    <div className="itemsFrame">
      <h2 className="typography">Alcanza tus objetivos en un mercado en crecimiento</h2>
      <div className="frame186">
        {items.map((item, index) => (
          <BlurbItem
            key={index}
            icon={item.icon}
            title={item.title}
            text={item.text}
          ></BlurbItem>
        ))}
      </div>
    </div>
  );
};
export default Advertisements;
