import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css"
const Cart=(props)=>{

    const Cartctx = useContext(CartContext)

    // const totalAmount= `${Cartctx.totalAmount.toFixed(2)}`;
    const hasItems = Cartctx.items.length>0
    const CartItems =( <ul className={classes['cart-items']}>{
    
        
    Cartctx.items.map((item)=><li>{item.name}</li>)}</ul>)
    return(
        <Modal onClose={props.onClose}>
            {CartItems}
            <div className={classes.total}>
              <span>Total Amount</span>
              <span>{Cartctx.totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick= {props.onClose} >Close</button>
                {hasItems && <  button className={classes.button}>Order</button >}
                
            </div>
        </Modal>
    )
}

export default Cart;