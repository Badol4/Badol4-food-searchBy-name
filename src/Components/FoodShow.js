import React from 'react';

const FoodShow = ({food}) => {
    const {strMealThumb, strMeal} = food
    return (
        <div>
            <img src={strMealThumb} alt="" />
            <h1>
                {strMeal}
            </h1>
        </div>
    );
};

export default FoodShow;