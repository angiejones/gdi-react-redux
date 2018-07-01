// Exercise 2: Set It Up
// import ImageUploaderForm and FeedList
// write a functional component
// make it a div with a class name of HomePage
// include ImageUploaderForm and FeedList inside of App
// export the Homepage component!


// Exercise 3: Prop It Up
// Need to extract photos from data and then pass it into HomePage


import React from 'react';
import ImageUploaderForm from '../components/ImageUploaderForm';
import FeedList from '../components/FeedList';
import data from '../../data.json';

const HomePage = () => {
	return (
	  	<div className="HomePage">
	      <p>HomePage</p>	      
	      <ImageUploaderForm/>
	      <FeedList pics={data.photos}/>
	    </div>
  );
}

export default HomePage





