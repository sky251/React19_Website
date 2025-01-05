import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// HTTP method to get All countries detail.
export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

// HTTP method to get Individual country details.
export const getIndividualCountryData = (name)=>{
  return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
}
