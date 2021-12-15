import React from "react";
import GoogleMapReact from "google-map-react";

export const Map = () => {
  const coordinates = { lat: 0, lng: 0 };
  return (
    <>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB__SA8tbRiB7KuT8yMrRx_rpP3maAzuuE" }}
        center={coordinates}
        defaultCenter={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
      ></GoogleMapReact>
    </>
  );
};
