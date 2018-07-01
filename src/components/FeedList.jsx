// Exercise 2: Set It Up
// import FeedItem and include it inside the div
// write a functional component
// make it a div with a class name of FeedList
// export the component!


// Exercise 3: Prop It Up
// FeedList should accept props as params
// Destructure photos from props
// Iterate over the data and map each photo data to a FeedItem


import React from 'react';
import FeedItem from './FeedItem';

const FeedList = (props) => {
	const picArray = props.pics
	const pics = picArray.map( (pic, index) => <FeedItem photo={pic} key={index}/> )
	
	return (
	  	<div className="FeedList">
	      <p>Feed List</p>
	      {pics}
	    </div>
  );
}

export default FeedList



