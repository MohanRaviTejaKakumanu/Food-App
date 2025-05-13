import { CDN_LOGO } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, id } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="h-full">
      <h3 className="absolute bg-[#d53f1a] text-white rounded-xl p-2 mr-1">
        one Free delivery
      </h3>
      <div className=" w-80 p-2 h-full rounded-lg hover:bg-amber-50 ">
        <img
          className="h-[200] w-full rounded-xl"
          src={CDN_LOGO + cloudinaryImageId}
        ></img>
        <h3 className="m-0.5 text-xl font-bold ">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} Minutes</h4>
      </div>
    </div>
  );
};

export default ResCard;
