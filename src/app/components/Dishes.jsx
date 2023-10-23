'use client'

import React, { useEffect, useState } from 'react'
import Dish from './Dish'
import styles from './dishes.module.scss'
import { fetchDishes } from './fetchDishes'

const Dishes = () => {  
  const [dishes, setDishes] = useState([]);
  const [limit, setLimit] = useState(6);

  const showMore = () => {
    setLimit(limit + 6)
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDishes();
      setDishes(data);
    };
    fetchData();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {Object.entries(dishes).slice(0, limit).map(([key, dish]) =>
          <Dish
            key={key}
            name={dish.name}
            description={dish.description}
            imgUrl={`https://api.genshin.dev/consumables/food/${key}`}
          />
        )}
      </div>
      <div className={styles.buttons}>
        <button onClick={showMore}>Show more</button>
      </div>
    </section>
  ) 
}

export default Dishes