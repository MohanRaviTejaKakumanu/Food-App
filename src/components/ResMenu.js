import useResMenu from "../utils/useResMenu";
import ShimmerUIMenu from "./ShimmerUIMenu";
import { useParams } from "react-router-dom";
import Rescategory from "./Rescategory";

const ResMenu = () => {
  const { resId } = useParams();

  const listOfResMenu = useResMenu(resId);

  if (listOfResMenu === null) {
    return <ShimmerUIMenu />;
  }

  const { name, cuisines, costForTwo } =
    listOfResMenu.cards[2]?.card?.card?.info;

  const categories =
    listOfResMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (x) => {
        return (
          x.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  console.log(categories);

  return (
    <div className="text-center">
      <div className="p-2 my-5">
        <h1 className="font-bold">{name}</h1>
        <h3 className="font-bold">
          {cuisines.join(", ")} - {"Rs."}
          {costForTwo / 100}
        </h3>
        {categories.map((category) => (
          <Rescategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default ResMenu;
