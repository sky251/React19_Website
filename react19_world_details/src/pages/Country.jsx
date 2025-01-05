import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/PostApi";
import { Loader } from "../components/UI/Loader";
import { Countrycard } from "../components/Layout/Countrycard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  // search logic
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  //   if (isPending) return <h1>Loading...</h1>;
  if (isPending) return <Loader />;

  // console.log(search, filter);

  return (
    <>
      <section className="country-section">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countries={countries}
          setCountries={setCountries}
        />
        <ul className="grid grid-four-cols">
          {filterCountries.map((curCountry, index) => {
            return <Countrycard country={curCountry} key={index} />;
          })}
        </ul>
      </section>
    </>
  );
};
