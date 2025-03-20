import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { DATA_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(DATA_URL);
    const json = await data.json();
    setListOfRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filter-items">
        <div className="search">SEARCH</div>
        <button
          className="filter"
          onClick={() => {
            setListOfRestaurants(
              (filter = resList.filter((x) => x.info.avgRating > 4.2))
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((eachRes) => (
          <ResCard key={eachRes.info.id} resData={eachRes} />
        ))}
      </div>
    </div>
  );
};

export default Body;
