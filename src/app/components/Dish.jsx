'use client'

import React, { useState } from 'react'
import styles from './dish.module.scss'
import RecipeButton from './RecipeButton'

const Dish = (props) => {
  const { name, description, recipe, imgUrl } = props;
  const [showRecipe, setShowRecipe] = useState(false);
  
  const toggleRecipe = () => {
    setShowRecipe(!showRecipe)
  }

  return (
    <div>
      <img className={styles.pic} src={imgUrl} />
      <div className={styles.card}>
        <div className={styles.text}>
          <h3>{name}</h3>
          {showRecipe ? (
            recipe && recipe.map((item, index) => (
              <p key={index}>
                {item.quantity} ⋅ {item.item}
              </p>
            ))
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
      {recipe ? (
        <RecipeButton onClick={toggleRecipe} />
      ) : null}
    </div>
  )
}

export default Dish