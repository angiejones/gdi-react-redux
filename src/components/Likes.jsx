// Exercise 2: Set It Up
// write a functional component
// make it a div with a class name of Likes
// write a span and a button element inside
// export the component!

// Exercise 3: Prop It Up
// Likes should take in number of likes as a prop and display it.

// Exercise 4: Class It Up
// Turn Likes from a functional to a class component.
	 // handle import/inheritance
	 // add a render method
	 // change props from function argument to object attribute

// Exercise 5: Make a State(ment)
// Create a button that toggles between two states: "Liked" and "Not liked (yet)"
// Add a constructor with initial state
// Add a button to the rendered JSX with an onClick attribute
// Add a method to handle the click (= change the state)
// Hook up the button text to the state
// BONUS:  Create a likes counter!
// Take in a prop for the number of likes
// Increase/ decrease the likes when button click is like/ unlike
// Hint: take the total likes as an immutable prop, and convert it to state so you can accept user input to change it


import React from 'react';

class Likes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			liked: false,
			quantity: this.props.quantity
		}
	}

	handleLikeClick = (e) => {
		if(this.state.liked) {
			this.setState( {liked: false, quantity: this.state.quantity - 1} )
		}
		else{
			this.setState( {liked: true, quantity: this.state.quantity + 1} )
		}
	}

	render(){
		const buttonText = this.state.liked ? "Unlike It" : "Like It"
		return (
		  	<div className="Likes">
		      <span><b>Likes:</b> {this.state.quantity}</span>
		      <span><button onClick={this.handleLikeClick}>{buttonText}</button></span>
		    </div>
	  );
	}
}

export default Likes



