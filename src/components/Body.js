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
      <div className="flex items-center justify-around">
        <div className="p-2 m-2">
          <input
            className="border cursor-pointer"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="px-2 m-2 border rounded-sm cursor-pointer hover:border-2"
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
        <div className="px-2 m-2">
          <button
            className="border px-5 py-0.5 rounded-sm cursor-pointer hover:border-2"
            onClick={() => {
              filter = listOfRestaurants.filter((x) => x.info.avgRating > 4.2);
              setFilteredListOfRestaurants(filter);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly">
        {filteredListOfRestaurants.map((eachRes) => (
          <Link
            key={eachRes.info.id}
            to={"/restaurant/" + eachRes.info.id}
            className="p-2 m-2"
          >
            <ResCard resData={eachRes} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
