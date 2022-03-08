import { useState, useEffect } from 'react';
import Breed from "../components/Breed";
import { useFetch } from '../hooks/useFetch';

const DogBreedsContainer = () => {
    
//the line 9 below replaces  lines 10 to 23. 

    let {data, error} = useFetch("https://api.thedogapi.com/v1/breeds")

    // const [data, setData] = useState(null);
    // const [error, setError] = useState(null);

    // const handleFetch = () => {
    //     fetch("https://api.thedogapi.com/v1/breeds")
    //     .then(res => res.json())
    //     .then(data => setData(data))
    //     .catch((err) => setError(err));
    // }

    // useEffect(() => {
    //     handleFetch();
    // }, []);

    if (error) {
        console.log("error:", error)
    }

    if (!data) {
        return "Loading"
    }
    
    const dogBreeds = data.map(dog => { 
        return <Breed name={dog.name} temp={dog.temperament} key={`dog-${dog.id}`} />
    })

    return (
        <>
            <h2>Dog Breeds</h2>
            <ul>
                { dogBreeds }
            </ul>
        </>
    )
}

export default DogBreedsContainer;
