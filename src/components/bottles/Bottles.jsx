import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import './Bottles.css'



const Bottles = () => {

    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('Bottles.json')
        .then (res => res.json())
        .then(data => setBottles(data))
    },[])

    const handlePurchase = (bottle) =>{
      const  newCart = [...cart, bottle ]
        setCart(newCart)
    }




    return (
        <div>
            <h4>Bottles Available: {bottles.length}</h4>
            <h5>Cart: {cart.length}</h5>
            <div className="bottles-container">
                {
                    bottles.map(bottle => 
                        <Bottle
                         key={bottle.id} 
                         bottle={bottle}
                         handlePurchase={handlePurchase}
                        ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;