import React from 'react'
import Store from '../Store'

class Image extends React.Component {
	static contextType = Store
	render() {
		return (
			<>
				<div className='image'>
					<img
						src={this.context.img}
						style={{
							filter: `brightness(${
								this.context.filter.brightness
							}%) blur(${this.context.filter.blur}px) contrast(${
								this.context.filter.contrast
							}%) grayscale(${
								this.context.filter.grayscale
							}%) invert(${
								this.context.filter.invert
							}%) opacity(${
								this.context.filter.opacity
							}%) saturate(${
								this.context.filter.saturate
							}%) hue-rotate(${
								this.context.filter.hue
							}deg) sepia(${this.context.filter.sepia}%)`
						}}
						alt=''
						id='image'
					/>
				</div>
			</>
		)
	}
}

export default Image
