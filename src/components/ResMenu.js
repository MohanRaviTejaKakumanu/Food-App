import useResMenu from "../utils/useResMenu";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";

const ResMenu = () => {
  const { resId } = useParams();

  const listOfResMenu = useResMenu(resId);

  if (listOfResMenu === null) {
    return <ShimmerUI />;
  }

  const { name, cuisines, costForTwo } =
    listOfResMenu.cards[2]?.card?.card?.info;

  const itemCards =
    listOfResMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards ||
    listOfResMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards ||
    listOfResMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card?.itemCards ||
    [];

  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {"Rs."}
        {costForTwo / 100}
      </h3>
      <h2>Menu</h2>
      <ol>
        {itemCards.map((x) => {
          return (
            <li key={x.card.info.id} className="link">
              {x.card.info.name} - {"Rs."}
              {x.card.info.defaultPrice / 100 || x.card.info.price / 100}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ResMenu;
