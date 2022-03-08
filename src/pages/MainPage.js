import { useState } from 'react';
import '../App.css';
import CatBreedsContainer from '../containers/CatBreedsContainer';
import DogBreedsContainer from '../containers/DogBreedsContainer';

const MainPage = () => {
    
    const [catsClicked, setCatsClicked] = useState(false);
    const [dogsClicked, setDogsClicked] = useState(false);

    const handleCatClick = () => {
        setDogsClicked(false)
        setCatsClicked(true)
    }

    const handleDogClick = () => {
        setCatsClicked(false)
        setDogsClicked(true)
    }

    return (
        <div className='app'>
            <h1>Cats and Dogs!</h1>
            <button onClick={handleCatClick}>Show Me The Cats</button>
            <button onClick={handleDogClick}>Show Me The Dogs</button>
            <div className='breeds-container'>
                <div className='cats' style={{ display: catsClicked ? "block" : "none" }}>
                    <CatBreedsContainer  />
                </div>
                <div className='dogs' style={{ display: dogsClicked ? "block" : "none" }}>
                    <DogBreedsContainer  />
                </div>
            </div>
            <footer>
                <a href="https://t4.ftcdn.net/jpg/00/26/80/33/360_F_26803377_fFNCrwUbzm7Ye6b3UP15VHwzWqU0Xcs3.jpg">Link to background image</a>
            </footer>
        </div>
    );
}

export default MainPage;
