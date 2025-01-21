import { getColor } from "../../utils/getColor";
import "./Progress.scss";

function ProgressBar({ fuel }) {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{
          width: `${fuel.perc}%`,
          backgroundColor: getColor(fuel.perc) || "blue", // Default color
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;
