import React from 'react';
import Categories from '../Categories/Categories';
import Input from '../Input/Input';
import './Form.css';

const Form = ({ showCategories, showInput, handleSearch, handleRadio, chooseCategory, handleJoke, categoriesList }) => (
				<div>
					<form className="form__inner" onSubmit={handleJoke}>
					<div>
						<input onClick={handleRadio} name="joke" id="random" type="radio" className="radio-btn"/>
						<label htmlFor="random">Random</label>
					</div>
					<div>
						<input onClick={handleRadio} name="joke" id="category" type="radio" className="radio-btn"/>
						<label htmlFor="category">From categories</label>
					</div>
					<div>
						{showCategories ? <Categories categoriesList={categoriesList} chooseCategory={chooseCategory} /> : null}
						<input onClick={handleRadio} name="joke" id="search" type="radio" className="radio-btn"/>
						<label htmlFor="search">Search</label>
					</div>
						{showInput ? <Input handleSearch={handleSearch}/> : null}
						
						<button className="submit-btn" type="submit">Get a joke</button>
					</form>
				</div>
		)

export default Form;
