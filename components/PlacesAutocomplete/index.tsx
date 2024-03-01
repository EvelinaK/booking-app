import React, { useEffect } from "react";

import useStyles from "./styles";

import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

const PlacesAutocomplete = ({
  saveSearchLocation,
  currentLocation,
  setDirectionsByCar,
  directionsByCar,
  setSelectedMarker,
  selectedMarker,
  clearType,
}) => {
  const classes = useStyles();

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });

  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method

    //saveSearchLocation(null);
    clearSuggestions();
  });

  useEffect(() => {
    // Your useEffect logic here

    setValue("");
  }, [selectedMarker]);

  const handleClose = () => {
    setValue("");
    clearSuggestions();
    saveSearchLocation(null);
    setDirectionsByCar(null);
    setSelectedMarker(null);
    clearType();
  };

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        console.log(results, "results");
        const { lat, lng } = getLatLng(results[0]);
        saveSearchLocation({ lat, lng });
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <>
      <div ref={ref} className={classes.container}>
        <input
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search a destination"
        />
        {/* <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton> */}
        <Button
          variant="outlined"
          onClick={handleClose}
          // className={cnCancelButton}
          // disabled={disableCancel}
        >
          <CloseIcon />
        </Button>
        {status === "OK" && <ul>{renderSuggestions()}</ul>}
      </div>
    </>
  );
};

export default PlacesAutocomplete;
