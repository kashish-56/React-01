import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h3>Hare Krishna</h3>
      <button className={styles.btn}>Join us</button>
    </div>
  )
}

export default Header
