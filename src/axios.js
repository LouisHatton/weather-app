import axios from "axios";

const instance = axios.create({
  baseURL: "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/",
});

export default instance;
