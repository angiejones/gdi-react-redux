import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';

// Exercise 2: Set It Up
// write a functional component
// import Header and Hompage
// make it a div with a class name of App
// include Header and HomePage inside of App
// export the App component!

const App = () => {
	return (
	  	<div className="App">
	      <p>App</p>
	      <Header/>
	      <HomePage/>
	    </div>
  );
}

export default App

