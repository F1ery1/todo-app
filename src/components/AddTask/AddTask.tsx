import { useState } from 'react'
import styles from './AddTask.module.scss'

export const AddTask = () => {
	return (
		<form className={styles.form}>
        <input className={styles.input} type="text" />
        <button className={styles.button} type="submit" >Добавить</button>
    </form>
	)
}