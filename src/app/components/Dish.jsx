import React from 'react'
import styles from './dish.module.scss'

const Dish = (props) => {
  const { name, description, imgUrl } =  props;

  return (
    <div>
        <img className={styles.pic} src={imgUrl} />
        <div className={styles.card}>
          <div className={styles.text}>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
    </div>
  )
}

export default Dish