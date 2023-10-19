import React from 'react'
import Dish from './Dish'
import styles from './dishes.module.scss'

const Dishes = async () => {
    let dishes = [];
    const res = await fetch('https://api.genshin.dev/consumables/food');
    const data = await res.json();

    dishes = data;

  return (
    <div className={styles.container}>
        {Object.entries(dishes).map(([key, dish]) =>
          <Dish
            key={key}
            name={dish.name}
            description={dish.description}
            imgUrl={`https://api.genshin.dev/consumables/food/${key}`}
          />
        )}
    </div>
  )
}

export default Dishes