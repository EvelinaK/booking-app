import NodeGeocoder from "node-geocoder";
// import NodeGeocoder from "node-geocoder";
import fetch from "cross-fetch";
const options = {
  provider: process.env.GEOCODER_PROVIDER,
  apiKey: process.env.GEOCODER_API_KEY,
  fetch: fetch,
  formatter: null,
};

const geoCoder = NodeGeocoder(options);

export default geoCoder;
