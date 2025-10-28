"use client";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

const mapStyleDark = [
  { elementType: "geometry", stylers: [{ color: "#000000" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [{ color: "#757575" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#303030" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#383838" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#8a8a8a" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#000000" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#3d3d3d" }],
  },
];

type Props = {
  lat: number;
  lng: number;
};

export default function CustomMap({ lat, lng }: Props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const center = useMemo(() => ({ lat, lng }), [lat, lng]);

  if (!isLoaded) {
    return (
      <p className="w-full h-[350px] flex items-center justify-center bg-black text-black">
        Carregando mapa...
      </p>
    );
  }

  return (
    <GoogleMap
      mapContainerClassName="w-full h-[350px]"
      center={center}
      zoom={17}
      options={{
        styles: mapStyleDark,
        disableDefaultUI: true,
        zoomControl: false,
        gestureHandling: "greedy",
      }}
    >
      <Marker
        position={center}
        icon={{
          url: "/pin-map.svg",
          scaledSize: new window.google.maps.Size(50, 50),
        }}
        onClick={() => {
          window.open("https://maps.app.goo.gl/wmUZPEv8bMk8Mk2w5", "_blank");
        }}
      />
    </GoogleMap>
  );
}