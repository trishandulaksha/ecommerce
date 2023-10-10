import Colortfulldress from "../../../../../Assets/Images/NewArrivals/Colourfulldress.png";
import FullSweater from '../../../../../Assets/Images/NewArrivals/FullSweater.png'
import Long_Dress from '../../../../../Assets/Images/NewArrivals/Long Dress.png'
import ShinyDress from '../../../../../Assets/Images/NewArrivals/ShinyDress.png'
import whiteDress from '../../../../../Assets/Images/NewArrivals/whiteDress.png'
import WhiteShirt from '../../../../../Assets/Images/NewArrivals/WhiteShirt.png'
import "./WomenFashion.css";



export interface FashionItem {
  imageUrl: string;
  title: string;
  brand: string;
  review: number;
  customerReviews: string;
  price: string;
  availability: string;
}



export const arrivals: FashionItem[] = [
  {
    imageUrl: Colortfulldress,
    title: "Color full dress",
    brand: "AI KARAM",
    review: 5,
    customerReviews: "(4.1k)Customer Reviews",
    price: "$95.59",
    availability: "Almost Sold Out",
  },
      {
        imageUrl:FullSweater,
        title:"FullSweater",
        brand:"AI KARAM",
        review:5,
        customerReviews:"(4.1k)Customer Reviews",
        price:"$95.59",
        availability: "Almost Sold Out",

    },
    {
      imageUrl:Long_Dress,
      title:"Long Dress",
      brand:"AI KARAM",
      review:5,
      customerReviews:"(4.1k)Customer Reviews",
      price:"$95.59",
      availability: "Almost Sold Out",

  },
  {
    imageUrl:ShinyDress,
    title:"Shiny Dress",
    brand:"AI KARAM",
    review:5,
    customerReviews:"(4.1k)Customer Reviews",
    price:"$95.59",
    availability: "Almost Sold Out",

  },
  {
    imageUrl:whiteDress,
    title:"whiteDress",
    brand:"AI KARAM",
    review:5,
    customerReviews:"(4.1k)Customer Reviews",
    price:"$95.59",
    availability: "Add to Cart",

  },
  {
    imageUrl:WhiteShirt,
    title:"White Shirt",
    brand:"AI KARAM",
    review:5,
    customerReviews:"(4.1k)Customer Reviews",
    price:"$95.59",
    availability: "Add to Cart",

  },
      {
        imageUrl:FullSweater,
        title:"FullSweater",
        brand:"AI KARAM",
        review:5,
        customerReviews:"(4.1k)Customer Reviews",
        price:"$95.59",
        availability: "Add to Cart",

    },
    {
      imageUrl:Long_Dress,
      title:"Long Dress",
      brand:"AI KARAM",
      review:5,
      customerReviews:"(4.1k)Customer Reviews",
      price:"$95.59",
      availability: "Add to Cart",

  },
  {
    imageUrl:ShinyDress,
    title:"Shiny Dress",
    brand:"AI KARAM",
    review:5,
    customerReviews:"(4.1k)Customer Reviews",
    price:"$95.59",
    availability: "Almost Sold Out",

  },
  {
    imageUrl:whiteDress,
    title:"whiteDress",
    brand:"AI KARAM",
    review:4,
    customerReviews:"(4.1k)Customer Reviews",
    price:"$95.59",
    availability: "Add to Cart",

  },
  {
    imageUrl:WhiteShirt,
    title:"White Shirt",
    brand:"AI KARAM",
    review:5,
    customerReviews:"(4.1k)Customer Reviews",
    price:"$95.59",
    availability: "Add to Cart",

  },
];