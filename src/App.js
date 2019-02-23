import React from 'react'
import Store from './Store'
import logo from './img/logo.png'
import emoji from './img/emoji.svg'
const Filter = React.lazy(() => import('./components/Filter'))
const Edit = React.lazy(() => import('./components/Edit'))
const Image = React.lazy(() => import('./components/Image'))

class App extends React.Component {
	static contextType = Store
	render() {
		return (
			<React.Suspense fallback={<div>Loading...</div>}>
				<div className='container'>
					<img id='logo' src={logo} alt='logo' />
					<Image />
					<Edit />
					<Filter />
					<h1 className='footer'>
						Made by <img src={emoji} alt='emoji' />
					</h1>
				</div>
			</React.Suspense>
		)
	}
}

export default App
