import React from 'react'
import LikeButton from './components/LikeButton'
import styles from './App.module.scss'

function App () {
	return (
		<div className={styles.app}>
			<header className={styles.header}>
				Hello, React!
				<a href="https://suzume.cc" className={styles.link}>Some Link</a>
				<LikeButton />
			</header>
		</div>
	)
}

export default App
