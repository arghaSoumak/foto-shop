import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Provider from './Provider'
ReactDOM.render(
	<Provider>
		<App />
	</Provider>,
	document.getElementById('root')
)
 
serviceWorker.register()
 