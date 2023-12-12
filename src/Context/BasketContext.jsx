import React, { createContext, useState } from 'react'
import useLocalStorage from '../hook/useLocalStorage';


    export const BasketContext =  createContext();

function BasketProvider({children}) {
    const [basket,setBasket] = useLocalStorage("basket", [])

    function AddToBasket(item) {
      const index = basket.findIndex((x)=> x.id === item.id)
      if (index === -1) {
        setBasket([...basket,{...item, count: 1}]);
      }else{
        const updatedBasket = [...basket];
      updatedBasket[index].count++;
      setBasket(updatedBasket); 
    }
      
    }

    function DeleteItem(item) {
      setBasket(basket.filter((x) => x.id !== item.id));

    }

    const basketValue = {basket,setBasket,AddToBasket, DeleteItem}
  return (
    <BasketContext.Provider value={basketValue}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider