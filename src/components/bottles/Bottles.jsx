import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";




const Bottles = () => {

    const [bottles, setBottles] = useState([])

    useEffect(()=>{
        fetch('Bottles.json')
        .then (res => res.json())
        .then(data => setBottles(data))
    },[])


    return (
        <div>
            <h4>Bottles Available: {bottles.length}</h4>

            {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
        </div>
    );
};

export default Bottles;