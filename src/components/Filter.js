import React from 'react'
import Store from '../Store'

class Filter extends React.Component {
	static contextType = Store
	render() {
		return (
			<ul className='filters'>
				{this.context.filters.map((filter, i) => (
					<li key={i}>
						<img
							className='filter'
							style={{
								filter: `brightness(${
									filter.filter.brightness
								}%) blur(${filter.filter.blur}px) contrast(${
									filter.filter.contrast
								}%) grayscale(${
									filter.filter.grayscale
								}%) invert(${filter.filter.invert}%) opacity(${
									filter.filter.opacity
								}%) saturate(${
									filter.filter.saturate
								}%) hue-rotate(${filter.filter.hue}deg) sepia(${
									filter.filter.sepia
								}%)`
							}}
							src={this.context.img}
							onClick={() =>
								this.context.changeFilter(filter.filter)
							}
							alt=''
						/>
						<h1>{filter.name}</h1>
					</li>
				))}
			</ul>
		)
	}
}

export default Filter
