"use client";
import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

export default function GoogleMapComponent() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const center = {
    lat: 42.28479446705715,
    lng: -71.6300165165469,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey as string,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(
    function callback(map: any) {
      map.setCenter(center);
      map.setZoom(17);
      setMap(map);
    },
    [center]
  );

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 w-full max-w-lg mx-auto h-64 sm:h-72 md:h-96 lg:h-[500px]">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <></>
      </GoogleMap>
    </div>
  ) : (
    <div className="flex justify-center items-center h-96">
      <p>Loading...</p>
    </div>
  );
}
