import React, { useEffect } from "react";
import { Marker, InfoWindow, Circle } from "@react-google-maps/api";
import useStyles from "./styles";
import LocationDestination from "../../public/LocationDest.svg";
import { SecurityRounded } from "@mui/icons-material";

interface MapMarkerProps {
  key: string;
  location: { lat: number; lng: number; name: string };
  currentLocation: any;
  selected: boolean;
  icon: any;
  onClickMarker: () => void;
  selectedIndex: any;
  clusterer: any;
}

function MapMarker({
  key,
  location,
  currentLocation,
  selected,
  icon,
  clusterer,
  onClickMarker,
  selectedIndex,
}: MapMarkerProps) {
  const classes = useStyles();

  const defaultOptions = {
    strokeOpacity: 0.5,
    strokeWeight: 0,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    fillColor: "rgba(0, 122, 255, 1)",
    strokeColor: "007AFF",
  };
  // useEffect(() => {
  //   // Your useEffect logic here
  // }, [selected, currentLocation]);
  console.log(location, "location");
  let condition =
    currentLocation && !selected && currentLocation.i
      ? "/MyLocation.svg"
      : currentLocation?.i == selected?.i &&
        currentLocation &&
        selectedIndex == undefined &&
        currentLocation.i
      ? "/MyLocation.svg"
      : `/circle.svg`;

  return (
    <div>
      <Marker
        key={key}
        title={location?.name}
        position={{
          lat: location.lat,
          lng: location.lng,
        }}
        clusterer={clusterer}
        icon={{
          url: condition,
          //currentLocation && selected ? "/MyLocation.svg" : `/circle.svg`,

          //!currentLocation  && selected ? "/MyLocation.svg" : `/circle.svg`,
          anchor: icon?.anchor,

          origin: new window.google.maps.Point(0, 0),
        }}
        onClick={onClickMarker}
      ></Marker>
      {/* {currentLocation ? (
        selected
      ) : selected?.lat === location.lat ? (
        <Circle center={location} radius={200} options={defaultOptions} />
      ) : undefined} */}
    </div>
  );
}

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};

export default MapMarker;
