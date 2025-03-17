import ResCard from "./ResCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((eachRes) => (
          <ResCard key={eachRes.info.id} resData={eachRes} />
        ))}
      </div>
    </div>
  );
};

export default Body;
