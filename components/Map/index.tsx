import React, { useCallback, useEffect, useRef, useState } from "react";

import useStyles from "./styles";
import { mapThemeTwo } from "./theme";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from "@react-google-maps/api";
import MapMarker from "./MapMarker";
import MyLocation from "../../public/MyLocation.svg";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

interface MapProps {
  currentLocation: { lat: number; lng: number } | null;
  saveDirectionByCar: (result: any) => void;
  saveDirectionByWalk: (result: any) => void;
  saveDirectionByBus: (result: any) => void;
  directionByCar: any;
  mainLocationProp: { lat: number; lng: number; country: string };
}

const containerStyle = {
  width: "100%",
  height: "100%",
};

const options = {
  fullscreenControl: false,
  keyboardShortcuts: false,
  streetViewControl: false,
  mapTypeControl: false,
  clickableIcons: false,
  styles: mapThemeTwo,
  disableDefaultUI: true,
  suppressMarkers: true,
};

function Map({
  currentLocation,
  setCurrentLocation,
  routeType,
  saveDirectionByCar,
  saveDirectionByWalk,
  saveDirectionByBus,
  directionByCar,
  mainLocationProp,
  setSelectedMarker,
  selectedMarker,
  setRouteType,
  setPlaces,
  places,
}: MapProps) {
  const classes = useStyles();
  const mapRef = useRef<google.maps.Map | undefined>(undefined);

  // const [places, setPlaces] = useState([]);

  // const [selectedMarker, setSelectedMarker] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const onLoad = useCallback(function callback(map: google.maps.Map) {
    mapRef.current = map;
    setMapLoaded(true);
  }, []);

  const onUnmount = useCallback(function callback() {
    mapRef.current = undefined;
  }, []);

  // useEffect(() => {
  //   if (mapLoaded && mapRef?.current) {
  //     // const bounds = mapRef.current.getBounds();
  //     const service = new window.google.maps.places.PlacesService(
  //       mapRef?.current
  //     );

  //     const request = {
  //       location: mainLocationProp,
  //       radius: "2000",
  //       // fields: ["name", "geometry, icon, types"],
  //       types: ["store", "restaurant", "fitness", "mall"],
  //     };

  //     service.nearbySearch(request, (results, status) => {
  //       if (status === window.google.maps.places.PlacesServiceStatus.OK) {
  //         console.log(results, "results");
  //         const transformedResults = results?.map((el, i) => ({
  //           lat: el?.geometry?.location?.lat(),
  //           lng: el?.geometry?.location?.lng(),
  //           i,
  //         }));
  //         setPlaces(transformedResults);
  //       }
  //     });
  //   }

  //   // return () => {
  //   //   setPlaces([]);
  //   // };
  // }, [mapRef.current, mainLocationProp]);

  // console.log(selectedMarker, "selectedMarker");

  // useEffect(() => {
  //   const fetchNearbyPlaces = async () => {
  //     if (mapLoaded && mapRef?.current) {
  //       const service = new window.google.maps.places.PlacesService(
  //         mapRef?.current
  //       );

  //       const types = [
  //         "store",
  //         "supermarket",
  //         "restaurant",
  //         // "hotel",
  //         "fitness",
  //         "mall",
  //       ];

  //       const promises = types.map(async (type, i) => {
  //         const request = {
  //           location: mainLocationProp,
  //           radius: "2000",
  //           types: [type],
  //         };

  //         return new Promise((resolve) => {
  //           service.nearbySearch(request, (results, status) => {
  //             if (status === window.google.maps.places.PlacesServiceStatus.OK) {
  //               const transformedResults = results?.map((el, j) => ({
  //                 lat: el?.geometry?.location?.lat(),
  //                 lng: el?.geometry?.location?.lng(),
  //                 index: j,
  //                 ...el,
  //               }));
  //               resolve(transformedResults);
  //             } else {
  //               resolve([]);
  //             }
  //           });
  //         });
  //       });

  //       const allResults = await Promise.all(promises);
  //       const mergedResults = allResults.flat(); // Combine results from all types
  //       console.log(mergedResults, "mergedResults");
  //       setPlaces(mergedResults);
  //     }
  //   };

  //   fetchNearbyPlaces();

  //   // Clean up function
  //   return () => {
  //     setPlaces([]);
  //   };
  // }, [mapLoaded, mapRef?.current, mainLocationProp]);

  useEffect(() => {
    const fetchNearbyPlaces = async () => {
      if (mapLoaded && mapRef?.current) {
        const service = new window.google.maps.places.PlacesService(
          mapRef?.current
        );

        const types = ["store", "restaurant", "fitness", "mall"];

        const promisesObject = {};

        types.forEach((type) => {
          const request = {
            location: mainLocationProp,
            radius: "2000",
            types: [type],
          };

          promisesObject[type] = new Promise((resolve) => {
            service.nearbySearch(request, (results, status) => {
              if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                const transformedResults = results?.map((el, j) => ({
                  lat: el?.geometry?.location?.lat(),
                  lng: el?.geometry?.location?.lng(),
                  index: j,
                  ...el,
                }));
                resolve(transformedResults);
              } else {
                resolve([]);
              }
            });
          });
        });

        const resolvedPromisesObject = await Promise.all(
          Object.values(promisesObject)
        );

        const mergedResults = Object.fromEntries(
          types.map((type, index) => [
            type,
            resolvedPromisesObject[index].flat(),
          ])
        );

        console.log(mergedResults, "mergedResults");
        setPlaces(mergedResults);
      }
    };

    fetchNearbyPlaces();
  }, [mapLoaded, mapRef?.current, mainLocationProp]);

  console.log(places, "places");
  useEffect(() => {
    const DRIVING = window.google.maps.TravelMode.DRIVING;
    const WALKING = window.google.maps.TravelMode.WALKING;
    const TRANSIT = window.google.maps.TravelMode.TRANSIT;

    if (selectedMarker) {
      fetchDirections(
        mainLocationProp,
        selectedMarker!,
        DRIVING,
        saveDirectionByCar
      );

      fetchDirections(
        mainLocationProp,
        selectedMarker!,
        WALKING,
        saveDirectionByWalk
      );

      fetchDirections(
        mainLocationProp,
        selectedMarker!,
        TRANSIT,
        saveDirectionByBus
      );
    }

    fetchDirections(
      mainLocationProp,
      currentLocation!,
      DRIVING,
      saveDirectionByCar
    );

    fetchDirections(
      mainLocationProp,
      currentLocation!,
      WALKING,
      saveDirectionByWalk
    );

    fetchDirections(
      mainLocationProp,
      currentLocation!,
      TRANSIT,
      saveDirectionByBus
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation, selectedMarker, mapLoaded]);
  console.log(directionByCar, "directionByCar");
  const fetchDirections = (
    startPoint: { lat: number; lng: number },
    endPoint: { lat: number; lng: number },
    travelMode: string,
    saveCb: (result: any) => void
  ) => {
    if (!startPoint || !endPoint) return;
    const service = new window.google.maps.DirectionsService();
    service.route(
      {
        origin: startPoint,
        destination: endPoint,
        travelMode: travelMode as any,
        region: mainLocationProp.country,
      },
      (result, status) => {
        if (status === "OK" && result) {
          saveCb(result);
        }
      }
    );
  };

  const mainLocation = { ...mainLocationProp };

  const defaultOptions = {
    strokeOpacity: 0.5,
    strokeWeight: 0,
    clickable: true,
    draggable: false,
    editable: false,
    visible: true,
    fillColor: "rgba(0, 122, 255, 1)",
    strokeColor:
      routeType === "walk"
        ? "#198754"
        : routeType === "airport"
        ? "#6f42c1"
        : "#1976D2",
  };

  const middleOptions = {
    ...defaultOptions,
  };
  console.log(Object.entries(places), "places");
  return (
    <div className={classes.container}>
      {
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mainLocation}
          zoom={13}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={options}
        >
          {currentLocation && directionByCar && (
            <Marker
              position={currentLocation}
              icon={{
                url: currentLocation ? "/MyLocation.svg" : "/LocationDest.svg",
                anchor: currentLocation
                  ? new window.google.maps.Point(10, 30)
                  : new window.google.maps.Point(10, 30),
              }}
            />
          )}
          {directionByCar && (
            <DirectionsRenderer
              directions={directionByCar}
              options={{
                polylineOptions: {
                  zIndex: 50,
                  strokeColor:
                    routeType === "walk"
                      ? "#198754"
                      : routeType === "airport"
                      ? "#6f42c1"
                      : "#1976D2",
                  strokeWeight: 5,
                },
              }}
            />
          )}
          <Marker
            position={mainLocation}
            icon={{
              url:
                !selectedMarker && !currentLocation
                  ? "/MyLocation.svg"
                  : "/LocationDest.svg",
              anchor:
                !selectedMarker && !currentLocation
                  ? new window.google.maps.Point(10, 30)
                  : new window.google.maps.Point(10, 30),
            }}
          />
          <Circle center={mainLocation} radius={600} options={defaultOptions} />
          <Circle center={mainLocation} radius={200} options={middleOptions} />

          {/* <MarkerClusterer>
            {(clusterer) =>
              places.map((house) => (
                <>
                  <Marker
                    key={house?.i}
                    position={house}
                    clusterer={clusterer}
                    onClick={() => {
                      setSelectedMarker(house);
                      setCurrentLocation(house);
                      setSelectedIndex(house?.i);
                    }}
                  />
                </>
              ))
            }
          </MarkerClusterer> */}

          {Object.entries(places).map(([type, results]) => (
            <div key={type}>
              <h2>{type}</h2>
              <ul>
                {results?.map((house: any) => (
                  <MapMarker
                    key={house?.i}
                    location={house}
                    // clusterer={clusterer}
                    currentLocation={currentLocation}
                    selected={selectedMarker}
                    icon={{
                      // url:
                      //   !currentLocation && selectedMarker
                      //     ? "/MyLocation.svg"
                      //     : `/circle.svg`,
                      // origin: new window.google.maps.Point(0, 0),
                      anchor:
                        !selectedMarker && !currentLocation
                          ? new window.google.maps.Point(10, 30)
                          : new window.google.maps.Point(10, 30),
                      //  scaledSize: new window.google.maps.Size(20, 20),
                    }}
                    onClickMarker={() => {
                      setSelectedMarker(house);
                      setCurrentLocation(house);
                      setSelectedIndex(house?.i);
                    }}
                    selectedIndex={selectedIndex}
                  />
                ))}
              </ul>
            </div>
          ))}
        </GoogleMap>
      }
    </div>
  );
}

export default Map;
