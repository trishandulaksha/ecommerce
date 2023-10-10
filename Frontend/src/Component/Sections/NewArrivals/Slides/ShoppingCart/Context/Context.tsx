import React, { createContext, useState } from 'react'

interface cartItemContextType {
    addcartitemData:any[];
    setCartItemData:React.Dispatch<React.SetStateAction<any>>;
    selectedItem:boolean;
    addselectedItem:(item:any) => void;
    
}



export const cartItemData = createContext<cartItemContextType>({
  addcartitemData:[],
  selectedItem:false,
  addselectedItem:()=>{},
   setCartItemData:()=>{}
  });



const Context :React.FC <{ children: React.ReactNode }> = ({children}) => {


    const [addcartitemData,setCartItemData] = useState([]);
    const [selectedItem,addselectedItem ]= useState(false);


  return (
    <cartItemData.Provider value = {{addcartitemData,selectedItem,addselectedItem,setCartItemData}} >
            {children}
    </cartItemData.Provider>
  )
}

export default Context