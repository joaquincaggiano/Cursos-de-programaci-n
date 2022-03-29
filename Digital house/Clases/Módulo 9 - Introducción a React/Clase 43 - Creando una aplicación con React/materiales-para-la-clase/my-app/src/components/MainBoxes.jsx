import MainBox from "./MainBox";

function MoviesInDatabase() {
  const dataBoxes = [
    {
      title: "Movies in Data Base",
      amount: 21,
      iconName: "fa-film",
      styles: ["border-left-primary", "text-primary"]
    },
    {
      title: "Total awards",
      amount: 79,
      iconName: "fa-award",
      styles: ["border-left-success", "text-success"]
    },
    {
      title: "Actors quantity",
      amount: 49,
      iconName: "fa-user",
      styles: ["border-left-warning", "text-warning"]
    }
  ]

  return (
    // <!-- Content Row Movies-->
    <div className="row">
      {
        dataBoxes.map((dataBox, i) => <MainBox key= {i} dataBox= {dataBox} />)
      }
    </div>
  );
}

export default MoviesInDatabase;
