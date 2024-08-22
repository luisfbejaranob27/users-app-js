import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LoginProvider } from './context/LoginContext.jsx';
import { App } from './App.jsx';
import './Index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<LoginProvider>
				<App />
			</LoginProvider>
		</BrowserRouter>
	</React.StrictMode>
);
