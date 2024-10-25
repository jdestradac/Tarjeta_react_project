import './Card.css';

const Tarjeta = ({url}) => {
  return (
    <div className="img-div">
      <img className="img"
        src={url}
        alt="" />
    </div>
  );
}

export default Tarjeta;
