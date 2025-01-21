import ReactDOM from "react-dom/client";
import "./Map.scss";
import "leaflet/dist/leaflet.css";
import ukGeoJSON from "../../assets/data.json";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { getColor } from "../../utils/getColor";
import Popup from "../Popup/Popup";

function Map({ carbonData }) {
  const centerPosition = [54.526, -3.308]; // Center of the UK

  const onEachFeature = (feature, layer) => {
    console.log(feature);
    const countryName = feature.properties.rgn19nm;

    const countryData = carbonData.filter(
      (region) => region.shortname === countryName
    );

    if (countryData.length > 0) {
      console.log({ countryData });
      const generationMix = countryData[0].generationmix;
      const gasPercentage = generationMix.filter(
        (genMix) => genMix.fuel === "gas"
      )[0].perc;

      const style = {
        fillColor: getColor(gasPercentage),
        fillOpacity: 0.5,
        color: "black",
        weight: 1,
      };

      layer.setStyle(style);

      // Create a div for the popup content
      const popupContent = document.createElement("div");
      popupContent.style.width = "400px";

      // Use ReactDOM.createRoot to render React component
      const root = ReactDOM.createRoot(popupContent);
      root.render(<Popup data={generationMix} />);
      // Attach the rendered component to the popup
      layer.bindPopup(popupContent, { maxWidth: 500 });
    }
  };

  return (
    <div className="map-container">
      <MapContainer center={centerPosition} zoom={6} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <GeoJSON data={ukGeoJSON} onEachFeature={onEachFeature} />
      </MapContainer>
    </div>
  );
}

export default Map;
