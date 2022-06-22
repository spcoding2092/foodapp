import classes from "./AvailableMeal.module.css"
import Card from '../UI/Card';
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Burger',
      description: 'Paneer With Extra fillings',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'French Fries',
      description: 'With Peri Peri and Sauce',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Softy Ice-Cream',
      description: 'Vanialla & Chocolate',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Berry Cooler',
      description: 'Berry Berry Mojito',
      price: 18.99,
    },
  ];
const AvailableMeals = () =>{

    const mealsList = DUMMY_MEALS.map((meal)=><MealItem key={meal.id} 
     name = {meal.name} description = {meal.description} 
     id = {meal.id}
    price = {meal.price}
        >
        
    </MealItem>)
    return(

         
        <section className={classes.meals}>
            <Card>
            <ul>
                {mealsList}
            </ul>
            </Card>
            
        </section>

     )


}

export default AvailableMeals;