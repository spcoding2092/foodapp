import classes from "./MealItem.module.css"
import MealItemForm from './MealItemForm'
import react from "react";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem =(props)=>{
    const cartCtx =  useContext(CartContext)
    const price = `${ "$"+props.price}` ;

    const  addTOCartHandler  = amount =>{
        cartCtx.addItem({
            id:props.id,
            name:props.name, 
            amount: amount,
            price:props.name
        });
    }

    return (<li className={classes.meal}>

        <div>
        <h3>{props.name}</h3> 
        <div className={classes.description}>{props.description}</div>
        </div>
        <div className={classes.price}> {price}</div>
        <div>
            <MealItemForm onAddToCart={addTOCartHandler}></MealItemForm>
        </div>
    </li>
)
}
export default MealItem;

