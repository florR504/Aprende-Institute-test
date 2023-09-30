import "../styles/CardImage.css";
const CardImage = ({ image, title, students, stars }) => {
  const backgroundImageStyle = {
    background: `url(${image}), lightgray 50% / cover no-repeat`,
  };
  return (
    <div className="imgContainer" style={backgroundImageStyle}>
      <div className="bottomElements">
        <div className="text_container">
          <div className="heading">
            <div className="frameText">
              <h4 className="frameTitle">{title}</h4>
              <div className="extras">
                <div className="descripcionImage">
                  <div className="frameOfDescripcion">
                    <div className="iconUsers">
                        <img src="/img/users.png"/>
                    </div>
                    <div className="students">
                      <p className="pStudents">{students} estudiantes</p>
                    </div>
                  </div>
                  <div className="ranking">
                    <div className="containerRanting"></div>
                    <p className="ratingText">{stars}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardImage;
