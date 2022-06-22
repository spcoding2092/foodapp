import Input from '../../UI/Input'
import { useRef ,useState} from 'react/cjs/react.development'
import classes from "./MealItemForm.module.css"
const ModelItemForm = (props)=>{
    const[amountIsValid, setAmountIsValid] = useState(true);
    const amountInutRef = useRef();
    const submitHandler = event=>{
        event.preventDefault();

        const enteredAmount = amountInutRef.current.value;
        const enteredAmountNumber =  +enteredAmount ; 

        if (enteredAmount.trim()===0 || enteredAmount<1 || enteredAmount>5 ){
            setAmountIsValid(false)
            return ; 
        }
        props.onAddToCart(enteredAmountNumber)
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input ref = {amountInutRef} label= "Amount"  input={{
                
                id:'amount',
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }}></Input>
            <button>+ Add</button>
            {!amountIsValid && <p>Please Enter a valid amount (1-5)</p>}
        </form>
    )
}

export default ModelItemForm;
