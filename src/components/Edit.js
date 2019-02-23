import React from 'react'
import Store from '../Store'
import Range from './Range'

class Edit extends React.Component {
	static contextType = Store

	render() {
		return (
			<div className='range'>
				<Range
					title='brightness'
					min='0'
					max='200'
					value={this.context.filter.brightness}
					handler={this.context.edit}
				/>
				<Range
					title='blur'
					min='0'
					max='100'
					value={this.context.filter.blur}
					handler={this.context.edit}
				/>
				<Range
					title='contrast'
					min='0'
					max='200'
					value={this.context.filter.contrast}
					handler={this.context.edit}
				/>
				<Range
					title='grayscale'
					min='0'
					max='100'
					value={this.context.filter.grayscale}
					handler={this.context.edit}
				/>
				<Range
					title='hue'
					min='0'
					max='360'
					value={this.context.filter.hue}
					handler={this.context.edit}
				/>
				<Range
					title='invert'
					min='0'
					max='100'
					value={this.context.filter.invert}
					handler={this.context.edit}
				/>
				<Range
					title='opacity'
					min='0'
					max='100'
					value={this.context.filter.opacity}
					handler={this.context.edit}
				/>
				<Range
					title='saturate'
					min='1'
					max='100'
					value={this.context.filter.saturate}
					handler={this.context.edit}
				/>
				<Range
					title='sepia'
					min='0'
					max='100'
					value={this.context.filter.sepia}
					handler={this.context.edit}
				/>
			</div>
		)
	}
}

export default Edit
