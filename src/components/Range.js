import React from 'react'

const Range = props => (
	<div className='control'>
		<div className='flex'>
			<h1>{props.title}</h1>
			<h1>{props.value}</h1>
		</div>

		<input
			type='range'
			min={props.min}
			max={props.max}
			value={props.value}
			className='slider'
			id='myRange'
			onChange={e => props.handler(props.title, e.target.value)}
		/>
	</div>
)

export default Range
