import "./Card.css";
import { useNavigate } from "react-router-dom";

export const Card = ({ info, showDetail = true }) => {
  const navigate = useNavigate();
  const handleDetailCard = (id) => {
    if (showDetail) {
      navigate(`/character/${id}`);
    }
  };

  const handleStatus = (state) => state === "Alive" ? "bi bi-emoji-laughing-fill" : "bi bi-emoji-dizzy-fill";
  const handleColor = (state) => state === "Alive" ? "green" : "red";

  return (
    <div onClick={() => handleDetailCard(info.id)} className="card mx-2 my-2" style={{width: "14rem"}}>
      <img src={info?.image} className="card-img-top pt-3" alt={info.name}></img>
      <div className="card-body">
        <h5 className="card-title">{info.name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          <i className={`${handleStatus(info.status)} me-2`} style={{color: handleColor(info.status), width: "20rem"}}></i>
          {`${info.status}, ${info.species}`}
          </h6>
        <h6 className="card-subtitle mb-2 text-body">{info.gender}</h6>
      </div>
    </div>
  );
};
