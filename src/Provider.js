import React from 'react'
import Store from './Store'
import img from './img/img.jpg'

class Provider extends React.Component {
	state = {
		img,
		filters: [
			{
				name: 'Normal',
				filter: {
					brightness: 100,
					blur: 0,
					contrast: 100,
					grayscale: 0,
					hue: 0,
					invert: 0,
					opacity: 100,
					saturate: 100,
					sepia: 0
				}
			},
			{
				name: 'B & W',
				filter: {
					brightness: 105,
					blur: 0,
					contrast: 110,
					grayscale: 100,
					hue: 0,
					invert: 0,
					opacity: 100,
					saturate: 100,
					sepia: 0
				}
			},
			{
				name: 'Bright',
				filter: {
					brightness: 140,
					blur: 0,
					contrast: 130,
					grayscale: 0,
					hue: 0,
					invert: 0,
					opacity: 80,
					saturate: 100,
					sepia: 0
				}
			},
			{
				name: 'Faded',
				filter: {
					brightness: 110,
					blur: 0,
					contrast: 120,
					grayscale: 0,
					hue: 0,
					invert: 0,
					opacity: 75,
					saturate: 80,
					sepia: 0
				}
			},
			{
				name: 'Sharp',
				filter: {
					brightness: 160,
					blur: 0,
					contrast: 140,
					grayscale: 0,
					hue: 0,
					invert: 0,
					opacity: 100,
					saturate: 100,
					sepia: 0
				}
			},
			{
				name: 'Old',
				filter: {
					brightness: 110,
					blur: 0,
					contrast: 95,
					grayscale: 0,
					hue: 0,
					invert: 0,
					opacity: 90,
					saturate: 1,
					sepia: 100
				}
			},
			{
				name: 'Negetive',
				filter: {
					brightness: 115,
					blur: 0,
					contrast: 100,
					grayscale: 0,
					hue: 0,
					invert: 100,
					opacity: 100,
					saturate: 100,
					sepia: 0
				}
			}
		],
		filter: {
			brightness: 100,
			blur: 0,
			contrast: 100,
			grayscale: 0,
			hue: 0,
			invert: 0,
			opacity: 100,
			saturate: 100,
			sepia: 0
		}
	}
	changeFilter = filter => {
		this.setState({ filter })
	}
	edit = (name, value) => {
		this.setState({
			filter: {
				...this.state.filter,
				[name]: value
			}
		})
	}
	render() {
		const store = {
			...this.state,
			changeFilter: this.changeFilter,
			edit: this.edit
		}
		return (
			<Store.Provider value={store}>{this.props.children}</Store.Provider>
		)
	}
}

export default Provider
