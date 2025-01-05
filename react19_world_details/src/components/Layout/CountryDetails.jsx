import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getIndividualCountryData } from "../../api/PostApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getIndividualCountryData(params.id);
      console.log(res);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, []);

  //   if (isPending) return <h1>Loading...</h1>;
  if (isPending) return <Loader />;
  return <section className="card country-details-card container">
    <div className="container-card bg-white-box">
      {country && (<div className="country-image grid grid-two-cols">
            <img src={country.flags.svg} />
        </div>)}
          
    </div>

  </section>;
};
