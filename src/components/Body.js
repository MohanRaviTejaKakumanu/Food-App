import ResCard from "./ResCard";
import { useState } from "react";
import ShimmerUI from "./ShimmerUI";

import { Link } from "react-router-dom";
import useBody from "../utils/useBody";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const {
    listOfRestaurants,
    filteredListOfRestaurants,
    setFilteredListOfRestaurants,
  } = useBody();

  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filter-items">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            onClick={() => {
              const filteredSearch = listOfRestaurants.filter((x) =>
                x.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(filteredSearch);
            }}
          >
            Submit
          </button>
        </div>
        <button
          className="filter"
          onClick={() => {
            filter = listOfRestaurants.filter((x) => x.info.avgRating > 4.2);
            setFilteredListOfRestaurants(filter);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurants.map((eachRes) => (
          <Link
            key={eachRes.info.id}
            to={"/restaurant/" + eachRes.info.id}
            className="link"
          >
            <ResCard resData={eachRes} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
