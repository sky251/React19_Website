import countryFact from "../api/CountryData.json";

export const About = () => {
  return (
    <>
      <section className="section-about container">
        <h2 className="container-title">
          Here are intresting facts <br />
          We are proud of
        </h2>

        <div className="gradient-cards">
          {countryFact.map((country) => {
            return (
              <div className="card" key={country.id}>
                <div className="container-card bg-blue-box">
                  <p className="card-title">{country.countryName}</p>
                  <p>
                    <span className="card-description">Capital: </span>
                    {country.capital}
                  </p>
                  <p>
                    <span className="card-description">Population: </span>
                    {country.population}
                  </p>
                  <p>
                    <span className="card-description">Intresting Fact: </span>
                    {country.interestingFact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
