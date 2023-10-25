import React from 'react'
import styles from './recipebutton.module.scss'

const RecipeButton = ({ onClick }) => {
  return (
    <section className={styles.buttons}>
      <button className={styles.btn} onClick={onClick}>
        Ingredients
      </button>
    </section>
  )
}

export default RecipeButton