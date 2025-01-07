export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const handleSortButton = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleInputChange}
      />

      <div>
        <button onClick={handleSortButton("asc")}>Asc</button>
      </div>
      <div>
        <button onClick={handleSortButton("des")}>Des</button>
      </div>

      <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="african">African</option>
          <option value="Americans">Americans</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="oceania">oceania</option>
        </select>
      </div>
    </section>
  );
};
