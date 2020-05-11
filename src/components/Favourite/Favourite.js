import React from 'react';
import heart from '../../assets/heart.png';
import message from '../../assets/message.png';
import like from '../../assets/like.png';
import './Favourite.css';

const Favourite = ({ handleLike, handleDate, storage }) => (
	    <div>
 				<h3 className="favourite-joke__header">Favourite</h3>
	  		{storage && storage[0] ? storage.map(val => 
	  			<div className="favourite-joke" key={val.id}>
						<div className="favourite-joke__inner">
							<img className="favourite-joke__message" src={message} alt="message" />
							<img className="favourite-joke__heart" src={storage.find(x => x.id === val.id) ? heart : like} id={val.id} onClick={handleLike} alt="like" />
							<p className="favourite-joke__paragraph-id">ID: <a href={`https://api.chucknorris.io/jokes/${val.id}`}>{val.id}</a></p>
							<p className="favourite-joke__paragraph-text">{val.value}</p>
						</div>
						<div className="favourite-joke__footer">
							<p className="favourite-joke__paragraph-update">Last update: {handleDate(val.updated_at)} hours ago</p>
							<p className="favourite-joke__paragraph-category">{val.categories[0] ? val.categories[0] : null}</p>
						</div>
	      	</div>) : <p className="favourite-joke__paragraph-null">No favourite jokes yet</p>}
	    </div>
  	);

export default Favourite;
