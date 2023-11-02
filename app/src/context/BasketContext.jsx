import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext([])



const BasketProvider = ({children}) => {

    let storage = localStorage.getItem("basket-product")
    console.log(JSON.parse(storage));

    const [store,setStore] = useState(JSON.parse(storage) || [])

    const setBasket = (data) => {
        setStore([...store,data])
    }

    useEffect(() => {
        localStorage.setItem("basket-product",JSON.stringify(store))
    },[store])

    return(
        <BasketContext.Provider value={{setBasket,store,setStore}}>
        {children}
    </BasketContext.Provider>
)
}
export default BasketProvider