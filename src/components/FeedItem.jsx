// Exercise 2: Set It Up
// import Likes, include it underneath img
// write a functional component
// make it a div with a class name of FeedItem
// make an img element inside
// export the component!


// Exercise 3: Prop It Up
// Need to pass in props as params to the component.
// Need to destructure what you need from the props.
// Hint: What do you need in order to get the image to display?
// Hint what do you need in order to get likes to display in the Likes component?

import React from 'react';
import Likes from './Likes';

const FeedItem = (props) => {
	const {title, url, likes, userLiked} = props.photo
	return (
	  	<div className="FeedItem">
	      <p>{title}</p>
	      <img src={url} style={{width:"100%"}}/>
	      <Likes quantity={likes} liked={userLiked}/>
	    </div>
  );
}

export default FeedItem






