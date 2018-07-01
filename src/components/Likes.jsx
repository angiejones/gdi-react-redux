// Exercise 2: Set It Up
// write a functional component
// make it a div with a class name of Likes
// write a span and a button element inside
// export the component!

// Exercise 3: Prop It Up
// Likes should take in number of likes as a prop and display it.

import React from 'react';

const Likes = (props) => {
	const buttonText = props.liked ? "Unlike It" : "Like It"
	return (
	  	<div className="Likes">
	      <span><b>Likes:</b> {props.quantity}</span>
	      <span><button>{buttonText}</button></span>
	    </div>
  );
}

export default Likes



