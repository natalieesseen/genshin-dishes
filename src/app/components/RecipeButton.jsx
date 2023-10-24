import React from 'react'
import styles from './recipebutton.module.scss'

const RecipeButton = () => {
  return (
    <section className={styles.buttons}>
    <button className={styles.btn}>
      Ingredients
    </button>
    </section>
  )
}

export default RecipeButton