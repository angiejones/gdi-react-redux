// Exercise 2: Set It Up
// write a functional component
// make it a form element with class name ImageUploaderForm
// write one input element and button element inside.
// export the component!


// Exercise 6: Let's Get InFormation
// Rewrite your <ImageUploaderForm/> component so that the user inputs a url and the component logs the url to the console (for now). 
//You’ll need:
// Internal state, to hold the user inputted value
// A <form/> element containing the following:
// An input element with a corresponding onChange attribute
// A button with a type of submit 
// An onSubmit() attribute on the form
// handleChange() function/ class method
// handleSubmit() function/ class method



import React from 'react';

class ImageUploaderForm extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			url: "/"
		}
	}

	handleChange = (e) => {
		this.setState( {url: e.target.value})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log(this.state.url)
	}

	render() {
		return (
		  	<form className="ImageUploaderForm" onSubmit={this.handleSubmit}>
		      <input onChange={this.handleChange}/>
		      <button type="submit">Log URL</button>
		    </form>
	  );
	}
}

export default ImageUploaderForm
