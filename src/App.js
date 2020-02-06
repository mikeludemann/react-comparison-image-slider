import React from 'react';
import logo from './logo.svg';
import './App.css';

import ComparisonImageSlider from './components/comparisonImageSlider';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<section className="content">
				<ComparisonImageSlider
					element="imageComparison"
					imageRight="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					imageLeft="https://www.themayor.eu/uploads/image/file/2490/medium_forest.jpg?1552485595"
				></ComparisonImageSlider>
			</section>
			<footer className="App-footer">
				(c) Copyright - Mike Ludemann
			</footer>
		</div>
	);
}

export default App;
