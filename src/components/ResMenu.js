import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const ResMenu = () => {
  const [listOfResMenu, setListOfResMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);

    const json = await data.json();

    setListOfResMenu(json.data);
  };

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
