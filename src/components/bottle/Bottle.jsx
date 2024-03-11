import './Bottle.css'
const Bottle = ({bottle, handlePurchase}) => {

 console.log(bottle);
 const {img, name, price} = bottle

    return (
        <div className="box">
            <p>Model Name : {name}</p>
         <img src={img} alt="" />
         <p>Price: {price}</p>
         <button onClick={()=>handlePurchase(bottle)}>Purchase</button>
            
        </div>
    );
};

export default Bottle;