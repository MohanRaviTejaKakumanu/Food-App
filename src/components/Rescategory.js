import Rescategoryitem from "./Rescategoryitem";
import { useState } from "react";

const ResCategory = (props) => {
  const { title, itemCards } = props.data;

  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      {/* {accordian head} */}
      <div className=" w-6/12 m-auto my-3 p-3 bg-gray-50 shadow-xl flex flex-col rounded-xl">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {title} ({itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* {accordian body} */}
        <div className="flex">
          <span>
            {showItems && <Rescategoryitem items={props.data.itemCards} />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResCategory;
