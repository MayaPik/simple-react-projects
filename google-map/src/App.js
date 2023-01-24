import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
const API_KEY = process.env.API_KEY;
const containerStyle = {
  width: "80vw",
  height: "60vh",
  display: "flex",
  margin: "auto",
};

const center = {
  lat: 32.0853,
  lng: 34.7818,
};

export default function App() {
  const onMapLoad = (map) => {
    new window.google.maps.Marker({
      position: center,
      map: map,
      draggable: true,
    });
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onMapLoad}
      ></GoogleMap>
    </LoadScript>
  );
}
