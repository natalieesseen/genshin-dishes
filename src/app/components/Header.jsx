import React from 'react'
import styles from './header.module.scss'
import Image from 'next/image'
import heroImg from '../../../public/header.jpeg'

const Header = () => {
  return (
    <header className={styles.header}>
        <Image className={styles.bgImage} src={heroImg} />
        <div className={styles.content}>
            <h1>Genshin Dishes</h1>
            <p>
                Explore Genshin Impact's culinary delights! Dive into the wide range of delicious food items,
                each with its own unique flavor and effects. Find the perfect dish to enhance your gameplay and enjoy the journey!
            </p>
        </div>
    </header>
  )
}

export default Header