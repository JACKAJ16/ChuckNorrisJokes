import React from 'react';
import './Jokes.css';
import message from '../../assets/message.png';
import like from '../../assets/like.png';
import heart from '../../assets/heart.png';

const Jokes = ({ jokes, isClicked, search, handleLike, storage, handleDate }) => (
    <div>
      {jokes.value === undefined && isClicked ? jokes.map(val => 
	      	<div key={val.id} className="joke">						
						<div className="joke__inner">
							<img className="message" src={message} alt="message"/>
							<img className="like" src={storage && storage.find(x => x.id === val.id) ? heart : like} alt="like" id={val.id} onClick={handleLike}/>
							<p className="joke__paragraph-id">ID: <a href={`https://api.chucknorris.io/jokes/${val.id}`}>{val.id}</a></p>
							<p className="joke__paragraph-text">{val.value}</p>
						</div>	
						<div className="joke__footer">
							<p className="joke__paragraph-update">Last update: {handleDate(val.updated_at)} hours ago</p>
							{val.categories[0] ? <p className="joke__paragraph-category">{val.categories[0]}</p>: null}
						</div>
      		</div>) : isClicked ? 
      		<div className="joke">						
						<div className="joke__inner">
							<img className="message" src={message} alt="message" />
							<img className="like" src={ storage && storage.find(x => x.id === jokes.id) ? heart : like } alt="like" id={jokes.id} onClick={handleLike}/>
							<p className="joke__paragraph-id">ID: <a href={`https://api.chucknorris.io/jokes/${jokes.id}`}>{jokes.id}</a></p>
							<p className="joke__paragraph-text">{jokes.value}</p>
						</div>
						<div className="joke__footer">
							<p className="joke__paragraph-update">Last update: {handleDate(jokes.updated_at)} hours ago</p>
							{jokes.categories[0] ? <p className="joke__paragraph-category">{jokes.categories[0]}</p>: null}
						</div>
      	</div> : null}
    </div>
  );


export default Jokes;