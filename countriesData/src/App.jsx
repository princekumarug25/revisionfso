import { useEffect, useState } from "react";
import axios from "axios";
const SingleCountry = ({country}) => {
  const languages = Object.values(country.languages)
  return(
    <>
    <h1>{country.name.common}</h1>
    <ul>
      <li><strong>{country.capital[0]}</strong></li>
      <li><strong>{country.area}</strong></li>
    </ul>
    <h2>Languages</h2>
    <ul>
      {languages.map(language => {
        return <li key={language}>{language}</li>
      })}
    </ul>
    <div>
      <img src={country.flags.svg} width={200}/>
    </div>
    </>
  )
};
const RenderingComponent = ({ data, filter }) => {
  const filteredData = data.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(filteredData);
  let content = "";
  if (!filter) {
    content = <strong>Type the country you want to find</strong>;
  } else if (filteredData.length > 10) {
    content = <strong>Too many matching</strong>;
  } else if (filteredData.length <= 10 && filteredData.length > 1) {
    content = (
      <ul>
        {filteredData.map((country) => {
          return (
            <li key={country.name.common}>
              <strong>{country.name.common}</strong>
            </li>
          );
        })}
      </ul>
    );
  } else if (filteredData.length === 1) {
    content = <SingleCountry country={filteredData[0]}/>
  } else if (filteredData.length === 0) {
    content = <strong>No matching</strong>;
  }
  return <>{content}</>;
};
const App = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";
  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((result) => {
        setData(result.data);
      });
  }, []);
  const handleChange = (event) => {
    const value = event.target.value;
    setFilter(value);
  };
  return (
    <>
      <label htmlFor="find-countries">Find Countries</label>
      <div>
        <input id="find-countries" onChange={handleChange} value={filter} />
      </div>
      <RenderingComponent data={data} filter={filter} />
    </>
  );
};

export default App;
