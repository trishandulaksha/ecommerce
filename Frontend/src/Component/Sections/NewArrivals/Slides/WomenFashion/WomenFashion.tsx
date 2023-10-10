import React,{useState} from "react";
import { arrivals } from "./WomenFashionData";
import Cartstyle from "../CartStyle/Cartstyle";
import StarIcon from '@mui/icons-material/Star';
import './WomenFashion.css'


const WomenFashion = () => {
  const initialItemstoShow  = 6 ;
  const [itemsToShow,setItemtoShow] = useState(initialItemstoShow);


  const toggleItems =()=>{
      setItemtoShow(preItemtoShow => preItemtoShow === initialItemstoShow ? arrivals.length : initialItemstoShow);
  }
  return (
   <>
   <div className="p-0 m-0 cartItem bg-slate-100">
    <div className="grid grid-cols-1 gap-4 p-3 WomenFashionCartStyle sm:grid-cols-2 xl:grid-cols-3 sm:p-3 ">
      {arrivals.slice(0, itemsToShow).map(
        (
          {
            imageUrl,
            title,
            brand,
            review,
            customerReviews,
            price,
            availability,
          },
          index
        ) => {
            const reviews = [];
            for(let i = 0; i<review; i++){
              reviews.push(<StarIcon key={i} sx={{
                color: 'gold'
              }} className="w-2 h-2"/>)
               

            }
            


          return (
 
            <Cartstyle
              key={index}
              cartItemId={index}
              imageUrl={imageUrl}
              title={title}
              brand={brand}
              review={reviews}
              customerReviews={customerReviews}
              price={price}
              availability={availability}
              toggleCartItem={()=>{}}
              
            />
       
          );
        }
      )}
     
    </div>
    <div className="justify-center text-center viewMoreBtn sm:justify-center">
      <button className="p-2 mb-6 text-white bg-black rounded-md cursor-pointer hover:bg-opacity-70" onClick={toggleItems}>{ itemsToShow === initialItemstoShow ? "View More" : "View Less"}</button>
    </div>
    
    
</div>

   
   
   
   
   </>
  );
};

export default WomenFashion;
