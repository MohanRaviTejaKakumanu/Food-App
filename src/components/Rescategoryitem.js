import { CDN_LOGO } from "../utils/constants";

const Rescategoryitem = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b border-gray-300 p-2 m-2 text-left flex justify-between"
        >
          <div className="flex flex-col ">
            <span>{item.card.info.isVeg ? "🟢" : "🔴"}</span>
            <span className="font-medium">{item.card.info.name}</span>
            <span className="font-medium">
              ₹
              {item.card.info.defaultPrice
                ? item.card.info.defaultPrice / 100
                : item.card.info.price / 100}
            </span>
            <span className="text-xs py-2">{item.card.info.description}</span>
          </div>
          <div>
            <div className="absolute">
              <button className=" bg-black text-white px-2 py-0.5 mx-8 rounded-lg">
                Add +
              </button>
            </div>
            <div className="w-36 h-auto">
              <img
                className=" rounded-3xl p-2"
                src={CDN_LOGO + item.card.info.imageId}
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rescategoryitem;
