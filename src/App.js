import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form/Form';
import axios from 'axios';
import Jokes from './components/Jokes/Jokes';
import Favourite from './components/Favourite/Favourite';
import Header from './components/Header/Header';
import Hamburger from './components/Hamburger/Hamburger';

const App = () => { 

  const [showCategories, setShowCategories] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showRandom, setShowRandom] = useState(false);
  const [jokes, setJokes] = useState('');
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [isLiked, setIsLiked] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [isFavouriteHidden, setIsFavouriteHidden] = useState('favourite');
  const [isHamburgerClicked, setIsHamburgerClicked] = useState('line');
  
  // declaring local storage as a constant 
  const storage = JSON.parse(localStorage.getItem('isLiked'));
  
  //fetching categories list
  useEffect(() => {
    axios.get('https://api.chucknorris.io/jokes/categories')
      .then(res => setCategoriesList(res.data))   
  }, [])

  //fetching joke data depending on the chosen type of joke search
  const handleJoke = (e) => {
    let url = showCategories ? `https://api.chucknorris.io/jokes/random?category=${category}` : 
              showInput ? `https://api.chucknorris.io/jokes/search?query=${search}` :
              showRandom ? 'https://api.chucknorris.io/jokes/random' :
                            null

    e.preventDefault()
    if(showRandom || (showCategories && category) || (showInput && search)) {
      axios.get(url)
      .then((res) => {
        setJokes(showInput ? res.data.result : res.data);
        setIsClicked(true)
    })
  }
}
  
  //handling radio buttons selection
  const handleRadio = (e) => {
    if (e.target.id === 'random') {
      setShowCategories(false)
      setShowInput(false)
      setShowRandom(true)
    } else if (e.target.id === 'category') {
      setShowCategories(true)
      setShowInput(false)
      setShowRandom(false)
    } else if (e.target.id === 'search') {
      setShowCategories(false) 
      setShowInput(true)
      setShowRandom(false)     
    }
  }
  
  //handling category selection
  const chooseCategory = (e) => {
    e.preventDefault()
    setCategory(e.target.value) 
  }

  //handling search input
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  
  //handling like button, wether it's clicked or clicked more than one time 
  const handleLike = (e) => {
    let arr = [...isLiked];
    let currentIndex = jokes[1] ? jokes.findIndex(x => x.id === e.target.id) : null;
    let storageIndex = storage ? storage.findIndex(a => a.id === e.target.id) : 
                                 arr.findIndex(y => y.id === e.target.id)

    if(storageIndex !== -1) {
      arr = storage 
      arr.splice(storageIndex, 1);
      setIsLiked(arr)
      localStorage.setItem('isLiked', JSON.stringify(arr))
    } else {
        arr = storage ? storage : isLiked
        localStorage.setItem('isLiked', 
          JSON.stringify([...arr, jokes[1] ? jokes.slice(currentIndex, currentIndex + 1)[0] : jokes]))
          setIsLiked([...arr, jokes[1] ? jokes.slice(currentIndex, currentIndex + 1)[0] : jokes])
    }   
  }
  
  //getting and formating date for a single joke 
  const handleDate = (date) => {
    return Math.round((Date.now() - Date.parse(date)) / 3600000)
  }

  //returning current window width
  const useWindowWidth = () => {

    const isClient = typeof window === 'object';

    const getSize = () => {
      return {
        width: isClient ? window.innerWidth : undefined
      };
    }

    const [windowWidth, setWindowWidth] = useState(getSize);

    useEffect(() => {
      if(!isClient) {
        return false;
      }

      const handleResize = () => {
        setWindowWidth(getSize());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    })

    return windowWidth;
}
 
  //handling window resizing so favourite section desappears or appears depending on screen width
  const size = useWindowWidth();
  if(size.width > 834 && isFavouriteHidden !== 'favourite') {
    setIsFavouriteHidden('favourite');
    setIsHamburgerClicked('line')
  }

  //handling hamburger button click
  const handleHamburger = () => {
    setIsFavouriteHidden(isFavouriteHidden === 'favourite' ? 'hidden' : 'favourite');
    setIsHamburgerClicked(isHamburgerClicked === 'line' ? 'clicked' : 'line')
  }

  return (
    <div className="app">
      <Hamburger isHamburgerClicked={isHamburgerClicked} handleHamburger={handleHamburger} />
      <div className="form">
        <div className="container">
          <Header />
          <Form categoriesList={categoriesList} showCategories={showCategories} showInput={showInput} 
          handleSearch={handleSearch} handleRadio={handleRadio} chooseCategory={chooseCategory} handleJoke={handleJoke} />
          <Jokes handleDate={handleDate} storage={storage} handleLike={handleLike} jokes={jokes} isClicked={isClicked} search={search} />
        </div>
      </div>
      <div className={isFavouriteHidden}>
        <Favourite handleLike={handleLike} handleDate={handleDate} storage={storage} />
      </div>
    </div>
    );
  }

export default App;
