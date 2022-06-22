import Header from "./components/Layout/Header";
import {Fragment,useState} from 'react' 
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartisShown,setcartisShown] = useState(false); 
  const showCartHandler =()=>{
    setcartisShown(true);

  }

  const hideCartHandler=()=>{
    setcartisShown(false);
  }

  return (
   <CartProvider>
     {cartisShown && <Cart onClose = {hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals/>
      </main>
   </CartProvider>
  );
}

export default App;
