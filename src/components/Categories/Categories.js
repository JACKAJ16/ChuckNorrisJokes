import React from 'react';
import './Categories.css';

const Categories = ({ categoriesList, chooseCategory }) => (   
	 		<div className="categories">
	   		{categoriesList ? categoriesList.map(val => <button className="category" key={val.toString()} value={val} onClick={chooseCategory}>{val}</button>) : null}
	   	</div>
	   )	  

export default Categories;
