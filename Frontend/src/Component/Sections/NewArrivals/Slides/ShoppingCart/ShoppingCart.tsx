import React, { useContext, useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import { Link } from "react-router-dom";
import { cartItemData } from "./Context/Context";


export const ShoppingCart = () => {
  const [scrollDirection, setScrollDirection] = useState("down");
  const {addcartitemData} = useContext(cartItemData);
 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollDirection("up");
      } else {
        setScrollDirection("down");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = ()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth",
    })

  }
  const scrollToBottom = ()=>{
    window.scrollTo({
      top:document.body.scrollHeight,
      behavior:"smooth",
    })

  }

  return (
    <div className="absolute flex ShoppingCartConatiner">
      <div className="CartIcon" >
        <Link to="/shoppingCartDetail">
        <ShoppingCartIcon
          sx={{
            "@media (min-width:640px)": {
              width: 40,
              height: 40,
            },
            width: 30,
            height: 30,
          }}
        />
        </Link>
      {addcartitemData.length > 0 ? (
          <div className=" absolute top-8 left-[-15px] count block justify-center text-center items-center">
          <p className=" text-white bg-black rounded-[50%] justify-center text-center items-center text-xs w-6 h-6 pt-1 itemCount">{addcartitemData.length}</p>
        </div>

): null
      }
      </div>
      <div className="flex arrowIcon">
        {scrollDirection === "up" && (
          <div className="absolute arrowUp" onClick={scrollToTop}>
            <ArrowUpwardRoundedIcon
              sx={{
                "@media (min-width:640px)": {
                  width: 40,
                  height: 40,
                },
                width: 30,
                height: 30,
              }}
            />
          </div>
        )}
        {scrollDirection === "down" && (
          <div className="arrowDown" onClick={scrollToBottom}>
            <ArrowDownwardRoundedIcon
              sx={{
                "@media (min-width:640px)": {
                  width: 40,
                  height: 40,
                },
                width: 30,
                height: 30,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
