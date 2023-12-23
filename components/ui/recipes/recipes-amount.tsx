
import React from "react";

const RecipesAmount = ({
  recipes
                       }:{
  recipes: any
}) => {
  if (!recipes){
    return null;
  }
  return (
    <div className='mb-2.5 text-gray-400 flex '>
      <p>Results: {recipes.count} | From {recipes.from} To {recipes.to} </p>

    </div>
  )
}

export default RecipesAmount;