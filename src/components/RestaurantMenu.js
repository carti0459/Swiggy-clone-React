import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory"; 
import { useState } from "react";


const RestaurantMenu = () => {

    const {resId} = useParams();

   const resInfo = useRestaurantMenu(resId);
   
   const [showIndex, setShowIndex] = useState(0);

    if (resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} =
    data.cards[2].card.card.info;

    const {itemCards} = 
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;


  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg ">{cuisines.join(",")}
      {costForTwoMessage} </p>
      {categories.map((category) => (
        <RestaurantCategory
         key={category?.card?.card.title}
         data={category?.card?.card}
         showItems={index === showIndex ? true : false}
         setShowIndex={() => setShowIndex(index)} /> 
      ))}
    </div>
  );
};

export default RestaurantMenu;