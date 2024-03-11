import './Bottle.css'
const Bottle = ({bottle}) => {

 console.log(bottle);
 const {img} = bottle

    return (
        <div className="box">
         <img src={img} alt="" />
            
        </div>
    );
};

export default Bottle;