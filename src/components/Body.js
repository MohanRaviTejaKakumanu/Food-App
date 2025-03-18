import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
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
