import React, { useContext, useEffect } from 'react'
import { cartItemData } from './Context/Context';
import Cartstyle from '../CartStyle/Cartstyle';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const ShoppingCartDetails = () => {
  const {addcartitemData,selectedItem,setCartItemData} = useContext(cartItemData);
  console.log("Shopping Cart Details Page " + addcartitemData);

  const toggleCartItem = (cartItemId:number) => {
    if (!selectedItem) {
      setCartItemData((prevCartData:any[]) => prevCartData.filter((item:any, index) => index !== cartItemId));
    }
  };


  const totalPrice  = addcartitemData.reduce((total,item)=>{
    return total + parseFloat(item.price.replace('$' , ''));
  },0)


  return (
    <div>
      <div className="ml-12  header mt-7 mr-7" >
        <KeyboardBackspaceIcon sx={{
            backgroundColor:'white',
            borderRadius:'50%',
            cursor:'pointer',
            width:'30px',
            height:'30px',
            boxShadow: '5px 2px 8px #888888'


        }}/>
      </div>
      <div className="flex justify-between mb-10 ml-10 mr-10 text-xl font-extrabold md:text-3xl TExtContent center font-popins md:ml-52 md:mr-52">
      <div className="count">Count : {addcartitemData.length}</div>
      <div className="total">Total : ${totalPrice.toFixed(2)}</div>
      </div>
    { ! selectedItem && (
         <div className="p-0 m-0 cartItem bg-slate-100">
         <div className="grid grid-cols-1 gap-4 p-3 WomenFashionCartStyle sm:grid-cols-2 xl:grid-cols-3 sm:p-3 ">

        { addcartitemData.length >  0 ? (
          addcartitemData.map(({ imageUrl,
        title,
        brand,
        review,
        customerReviews,
        price,
        }, index) => {

          const isRemoveText = "Remove Cart" 
          
          return(
              <Cartstyle
                key={index}
                cartItemId={index}
                imageUrl={imageUrl}
                title={title}
                brand={brand}
                review={review}
                customerReviews={customerReviews}
                price={price}
                availability={isRemoveText}
                toggleCartItem={() => toggleCartItem(index)} 
              />
              )
})) : (<div className='justify-center font-extrabold text-center font-popins'> No item found</div>)}
        
        </div>
        </div>
  )
   }
  </div>
  )
}

export default ShoppingCartDetails