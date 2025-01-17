import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Map</h1>
      <h1>
        Position:{lat} {lng}
      </h1>
      <button
        onClick={() => {
          setSearchParams({ lat: 40.7128, lng: -74.006 });
        }}
      >
        Change pos
      </button>
    </div>
  );
}

export default Map;
