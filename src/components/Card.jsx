export const Card = ({ info }) => {
  return (
    <div className="card mx-2 my-2" style={{ width: "16rem" }}>
      <img src={info?.image} className="card-img-top pt-3" alt={info.name}></img>
      <div className="card-body">
        <h5 className="card-title">{info.name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{`${info.species}, ${info.status}`}</h6>
        <h6 className="card-subtitle mb-2 text-body">{info.gender}</h6>
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
};
