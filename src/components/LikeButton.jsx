import React from 'react'
import styles from './LikeButton.module.scss'

export default class LikeButton extends React.Component {
	constructor (props) {
		super(props)
		this.state = { liked: false }
	}

	render () {
		if (this.state.liked) {
			return 'You liked this.'
		}

		return (
			<button
				className={styles.btn}
				onClick={() => this.setState({ liked: true })}
			>
				Like
			</button>
		)
	}
}
