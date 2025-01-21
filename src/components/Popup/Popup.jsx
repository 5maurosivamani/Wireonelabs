import "./Popup.scss";
import ProgressBar from "../ProgressBar/ProgressBar";

function Popup({ data: fuels, country }) {
  return (
    <div className="fuel-data">
      <h2>
        Fuel Data
        <span> ({country}</span>)
      </h2>
      <ul className="fuel-data__list">
        {fuels.map((fuel, index) => (
          <li key={index} className="fuel-data__item">
            <span className="fuel-data__label">{fuel.fuel}</span>
            <ProgressBar fuel={fuel} />
            <span className="fuel-data__percentage">{fuel.perc}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Popup;
