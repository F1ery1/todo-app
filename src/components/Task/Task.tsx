import {useState} from 'react'
import styles from './Task.module.scss'

export const Task = () => {
	return (
		<div className={styles.task}>
 				<input type="checkbox" />
 				<div>Текст</div>
 				<button className={styles.deleteButton}>Удалить</button>
		</div>
	)
}