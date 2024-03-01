import useStyles from "./styles";
import { useState, useEffect, useMemo } from "react";
import moment from "moment";

import Grid from "@mui/material/Grid";
// import Autocomplete from "@mui/material/Autocomplete";
// import FormInput from "../FormInput";

import { useJsApiLoader } from "@react-google-maps/api";
import { Button } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";

import Map from "../Map";
import PlacesAutocomplete from "../PlacesAutocomplete";

// import bigMap from "../../assets/images/big-map.png";

const API_KEY = process.env.REACT_APP_API_KEY;

function MapModal({ center, onClose }) {
  const classes = useStyles();

  // const locationsProp = useMemo(() => generateHouses(center), [center]);

  // const newLocationsProp = locationsProp.map((item) => item.title);
  const [places, setPlaces] = useState([]);
  const [libraries] = useState(["places"]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });

  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const [routeType, setRouteType] = useState("car");
  const [directionsByCar, setDirectionsByCar] = useState(null);
  const [directionsByWalk, setDirectionsByWalk] = useState(null);
  const [directionsByPublicTransport, setDirectionsByPublicTransport] =
    useState(null);

  const showResult = (collection) => {
    if (
      !collection ||
      !collection.routes[0] ||
      !collection.routes[0].legs[0].duration.text
    ) {
      return;
    }

    const seconds = collection.routes[0].legs[0].duration.value;
    const durationObject = moment.duration(seconds, "seconds");

    let format = "D [ d ] H [ h ] m[ min]";

    if (durationObject.days() === 0) {
      format = "H[ h ]m[ min]";
    }

    if (durationObject.hours() === 0) {
      format = "m[ min]";
    }

    const myDuration = moment
      .utc(durationObject.asMilliseconds())
      .format(format);

    return myDuration;
  };

  useEffect(() => {
    setRouteType("car");
  }, [currentLocation]);

  console.log(routeType, "routeType");
  const handleSelect = (type: string) => {
    setRouteType(type);
  };

  let type = null;
  let setType = setDirectionsByCar;
  switch (routeType) {
    case "walk":
      type = directionsByWalk;
      setType = setDirectionsByWalk;
      break;
    case "airport":
      type = directionsByPublicTransport;
      setType = setDirectionsByPublicTransport;
      break;
    default:
      type = directionsByCar;
      setType = setDirectionsByCar;
  }

  const clearType = () => {
    setDirectionsByWalk(null);
    setDirectionsByPublicTransport(null);
    setDirectionsByCar(null);
  };

  return (
    <div className={classes.container}>
      <div className={classes.inputWrapper}>
        {isLoaded ? (
          <PlacesAutocomplete
            currentLocation={currentLocation}
            saveSearchLocation={setCurrentLocation}
            setDirectionsByCar={setType}
            directionsByCar={type}
            setSelectedMarker={setSelectedMarker}
            selectedMarker={selectedMarker}
            clearType={clearType}
          />
        ) : null}

        <div className="list-container">
          {
            <ul className="list-wrapper">
              <li>
                <Button
                  variant="outlined"
                  onClick={() => handleSelect("car")}
                  className={classes.iconButton}
                  disabled={!showResult(directionsByCar)}
                >
                  <DirectionsCarIcon />
                </Button>

                <span className="label">
                  {!!showResult(directionsByCar)
                    ? showResult(directionsByCar)
                    : "No result"}
                  {" away"}
                </span>
              </li>
              <li>
                <Button
                  variant="outlined"
                  onClick={() => handleSelect("walk")}
                  className={classes.iconButton}
                  disabled={!showResult(directionsByWalk)}
                >
                  <DirectionsWalkIcon />
                </Button>

                <span className="label">
                  {!!showResult(directionsByWalk)
                    ? showResult(directionsByWalk)
                    : "No result"}
                  {" away"}
                </span>
              </li>
              <li>
                <Button
                  variant="outlined"
                  onClick={() => handleSelect("airport")}
                  className={classes.iconButton}
                  disabled={!showResult(directionsByPublicTransport)}
                >
                  <AirportShuttleIcon />
                </Button>

                <span className="label">
                  {!!showResult(directionsByPublicTransport)
                    ? showResult(directionsByPublicTransport)
                    : "No result"}
                  {" away"}
                </span>
              </li>
            </ul>
          }
        </div>
      </div>
      <div className="location-map">
        {isLoaded ? (
          <Map
            currentLocation={currentLocation}
            routeType={routeType}
            setCurrentLocation={setCurrentLocation}
            saveDirectionByCar={setDirectionsByCar}
            saveDirectionByWalk={setDirectionsByWalk}
            saveDirectionByBus={setDirectionsByPublicTransport}
            directionByCar={type}
            mainLocationProp={center}
            setSelectedMarker={setSelectedMarker}
            selectedMarker={selectedMarker}
            setRouteType={setRouteType}
            setPlaces={setPlaces}
            places={places}
          />
        ) : (
          <p>Map</p>
          // <img src={bigMap} alt="Logo" />
        )}
      </div>

      <Grid container spacing={{ xs: 0, md: 11 }} alignItems="stretch">
        {Object.entries(places)?.map(([type, results]) => (
          <Grid item md={6} xs={12}>
            <div className="info-title">{type}</div>
            <div className="info-title__box">
              <ul className="info-title__list">
                {results
                  ?.slice(0, Math.floor(results?.length / 2))
                  ?.map((result, index) => (
                    <li key={index}>{result.name}</li>
                  ))}
              </ul>
            </div>
          </Grid>
        ))}
        {/* <Grid item md={6} xs={12}>
          <div className="info-title"> Nearby Stores</div>
          <div className="info-title__box">
            <ul className="info-title__list">
              <li>Jarir Bookstore </li>
              <li> Saco world</li>
              <li> Home Centre</li>
              <li> EXtra</li>
              <li>Panda Market</li>
            </ul>
          </div>
          <div className="info-title"> Restaurants</div>
          <div className="info-title__box">
            <ul className="info-title__list">
              <li> Tokyo </li>
              <li> Armin </li>
              <li> Le Chateau</li>
              <li> Mama Noura</li>
            </ul>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className="info-title"> Malls</div>
          <div className="info-title__box">
            <ul className="info-title__list">
              <li> Royal Riyadh Mall </li>
              <li> Andalus Mall</li>
              <li> Olaya Mall</li>
            </ul>
          </div>
          <div className="info-title"> Fitness Center</div>
          <div className="info-title__box">
            <ul className="info-title__list">
              <li> Shoaa Medical Complex </li>
              <li> Al Warood Medical Center</li>
              <li> Alshablan Medical Center</li>
            </ul>
          </div>
        </Grid> */}
      </Grid>
    </div>
  );
}

export default MapModal;
