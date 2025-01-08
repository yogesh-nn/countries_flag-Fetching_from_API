import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";

const Countries = () => {
  const [card, setCard] = useState([]);
//   const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const api = "https://xcountries-backend.azurewebsites.net/all";

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(api);
        const result = await response.json();
        setCard(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
      
    };
    fetchAPI();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        padding: "10px",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      {card.map((data) => (
        <CountryCard abbr={data.abbr} name={data.name} flag={data.flag} />
      ))}
    </div>
  );
};

export default Countries;
