import React, { useState, useContext, useEffect } from "react";
import "./CartStyle.css";
import { cartItemData } from "../ShoppingCart/Context/Context";

interface CartStyleProps {
  cartItemId: number;
  imageUrl: string;
  title: string;
  brand: string;
  review: any;
  customerReviews: string;
  price: string;
  availability: string;
  toggleCartItem: () => void; 
}

const Cartstyle: React.FC<CartStyleProps> = ({
  imageUrl,
  title,
  brand,
  review,
  customerReviews,
  price,
  availability,
  toggleCartItem
}) => {
  const isAddtoCart = availability === "Add to Cart";
  const isAlmostSlodOut = availability === "Almost Sold Out";
 

  const { addcartitemData, setCartItemData, selectedItem, addselectedItem } =
    useContext(cartItemData);

  const setCartData = () => {
    addselectedItem(false);
    if (isAddtoCart && !selectedItem) {
      const cartItem = {
        imageUrl,
        title,
        brand,
        review,
        customerReviews,
        price,
        availability,
      };

      setCartItemData((prevCartData: any[]) => [...prevCartData, cartItem]);
      console.log(addcartitemData);
    }else {
      toggleCartItem();
    }
  };

  return (
    <>
      <div className="xl:p-8 cartStyleContainer font-popins">
        <div className="cartContainner bg-[white] xl:p-6 sm:p-3 p-2 rounded-2xl">
          <div className="cartImage">
            <img src={imageUrl} alt="cartImage" />
          </div>
          <div className="flex justify-between cartDetails">
            <div className="imageAbout">
              <p className="text-lg font-extrabold">{title}</p>
              <p className="text-sm">{brand}</p>
            </div>
            <div className="starReview">
              <p>{review}</p>
            </div>
          </div>
          <div className="customerReview">
            <p className="text-[13px] mt-3 mb-3">{customerReviews}</p>
          </div>
          <div className="flex items-center justify-between priceDetails">
            <p className="text-lg font-extrabold text-black-600">{price}</p>
            <p
              className={
                isAddtoCart
                  ? "textBase addtoCart font-medium"
                  : isAlmostSlodOut
                  ? "textBase almostSoldout"
                  : "text-red-800 font-semibold cursor-pointer"
              }
              onClick={setCartData}
            >
              {isAddtoCart
                ? " Add to Cart"
                : isAlmostSlodOut
                ? "Almost Sold Out"
                : "Remove Cart"
               }
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartstyle;
