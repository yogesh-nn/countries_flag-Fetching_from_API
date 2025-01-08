const CountryCard = ({ flag, name, abbr }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        border: "1px solid grey",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <img
        src={flag}
        alt={abbr}
        style={{ width: "100px", height: "100px" }}
      />
      <p>{name}</p>
    </div>
  );
};

export default CountryCard;
