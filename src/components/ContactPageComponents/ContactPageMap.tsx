import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const center = { lat: 48.8584, lng: 2.2945 };

const ContactPageMap = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCsxOsCOGq6wrf_kXXc4rPVylxjxKkrlNk",
  });
  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const containerStyle = {
    width: "100%",
    height: "100vh",
  };

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    console.log("unmounting map", map);
    // setMap(null);
  }, []);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: 518, lng: 352 }}
      onLoad={onLoad}
      onUnmount={onUnmount}
      zoom={10}
      options={{
        zoomControl: false,
      }}
    >
      <Marker position={{ lat: 518, lng: 352 }} />
      <></>
    </GoogleMap>
  ) : (
    <p>Loading...</p>
  );
};

export default ContactPageMap;
