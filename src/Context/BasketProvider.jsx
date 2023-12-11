// import React, { createContext, useContext } from 'react'


//     export const BasketContext =  createContext();

// function BasketProvider({children}) {
//     const [basket,setBasket] = useContext([])

//     function HandleBasket(item) {
//       const index = basket.findIndex((x)=> x.id === item.id)
//       if (index == -1) {
//         setBasket([...basket,item])
//       }
//     }


//     const basketValue = {basket,setBasket,HandleBasket}
//   return (
//     <BasketContext.Provider value={basketValue}>
//       {children}
//     </BasketContext.Provider>
//   )
// }

// export default BasketProvider