import React, { useEffect, useState } from 'react';
import FoodShow from './FoodShow';

const Example = () => {
    const [food, setFood] = useState('')
    const [meals, setMeal] = useState([])
    useEffect(()=>{
     
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
        .then(res => res.json())
        .then(data => setMeal(data.meals))

    },[food])
    const search = e => {
        setFood(e.target.value);
    }
    return (
        <div>
           <input onChange={search} type="text" />
           {
               meals.map(meal => <FoodShow food={meal}></FoodShow>)
           }


           <h1>{ meals.length}</h1>
        </div>
    );
};

export default Example;