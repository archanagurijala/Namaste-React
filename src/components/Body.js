import restroObj from "./../utils/mockData.js";
import { useState, useEffect } from "react";
import RestroCard from "./RestroCard.js";
import ShimmerUi from "./ShimmerUI.js";

const Body = () => {
  const [listOfRestros, setListOfRestros] = useState([]);

  const [filteredRestros, setFilteredRestros] = useState([]);

  // After the body component is rendered
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    let cards = json.data.cards;
    console.log(cards);
    cards = cards.filter(
      (card) => card.card.card.id === "restaurant_grid_listing"
    );
    console.log(cards);
    const restros =
      cards[0].card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestros(restros);
    setFilteredRestros(restros);
  };

  const [inputValue, setInputValue] = useState("");

  return listOfRestros.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <div className="filter-bar">
        <div className="search">
          <input
            type="text"
            name="Searcbox"
            className="search-box"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={() => {
              console.log(listOfRestros);
              const filteredItems = listOfRestros.filter((res) =>
                res.info.name.toLowerCase().includes(inputValue.toLowerCase())
              );
              setFilteredRestros(filteredItems);
            }}>
            Search
          </button>
        </div>
        <div className="filter-btn">
          <button
            className="filter"
            onClick={() => {
              const filteredList = listOfRestros.filter(
                (restro) => restro?.info?.avgRating > 4.1
              );
              setListOfRestros(filteredList);
            }}>
            Filter by Top Rating
          </button>
        </div>
      </div>
      <div className="restrocontainer">
        {filteredRestros.map((restaurent) => (
          <RestroCard key={restaurent.info.id} restroData={restaurent.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
