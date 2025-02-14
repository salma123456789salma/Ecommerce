import axios from "axios";
import { createContext } from "react";


export let CartContext = createContext();

export default function CartContextProvider({children}){
    let headers ={
        token:localStorage.getItem("token")
    }

    function getCart(){
        return  axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
            headers
        }).then(({data})=>data)
        .catch(({error})=>error)
    }

        function addToCart(productId){
          return  axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
                productId
            }
            ,{
                headers
            }).then(({data})=>data)
            .catch(({error})=>error)
        }

    function removeFromCart(productId){
        return  axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`
        ,{
            headers
        }).then(({data})=>data)
        .catch(({error})=>error)
    }
    function updateCart(productId,count){
        return  axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
            count
        }
        ,{
            headers
        }).then(({data})=>data)
        .catch(({error})=>error)
    }
    function clearCart(){
        return  axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`
        ,{
            headers
        }).then(({data})=>data)
        .catch(({error})=>error)
    }
    
    return <CartContext.Provider value={{addToCart ,getCart ,removeFromCart,clearCart,updateCart}}>
        {children}
    </CartContext.Provider>

}