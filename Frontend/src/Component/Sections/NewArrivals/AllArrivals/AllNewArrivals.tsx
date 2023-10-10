import React, { useState } from "react";
import WomenFashion from "../Slides/WomenFashion/WomenFashion";
import "./AllArrivals.css";
import MensFashion from "../Slides/MenFashion/MensFashion";
import WomenAccessories from "../Slides/WomenAccessories/WomenAccessories";
import MenAccessories from "../Slides/MenAccerssories/MenAccessories";
import DiscountDeals from "../Slides/DiscountDeals/DiscountDeals";
import { ShoppingCart } from "../Slides/ShoppingCart/ShoppingCart";




const listItem = [
  {
    id: 1,
    title: "Men's Fashion",
    component: <MensFashion />,
  },
  {
    id: 2,
    title: "Womens Fashion",
    component: <WomenFashion />,
  },
  {
    id: 3,
    title: "Women Accessories",
    component: <WomenAccessories />,
  },
  {
    id: 4,
    title: "Men Accessories",
    component: <MenAccessories />,
  },
  {
    id: 5,
    title: "Discount Deals",
    component: <DiscountDeals />,
  },
];

const AllNewArrivals = () => {
  const [clickstate, clickHandle] = useState(0);

  return (
    <>
    
    <div>
      <div className="Arrivalheader font-popins">
        <h2 className="font-extrabold center arrivalTitle">New Arrivals</h2>
        <p className="font-semibold center arrivalContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>
      </div>
      <div className="flex flexmenu">
        <ul className="flex listItems font-popins">
          {listItem.map(({ title }, index) => (
            <li
              key={index}
              className={clickstate === index ? "activeList" : ""}
              onClick={() => clickHandle(index)}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
      {listItem.map(({ component }, index) => (
        clickstate === index && <div key={index}>{component}</div>
      ))}
    </div>
    
   
    <div className="fixed z-50 sm:right-28 sm:top-80 top-44 right-16 shoppingCart">
    <ShoppingCart />
     </div>
   
    
    
    </>
  );
};

export default AllNewArrivals;
