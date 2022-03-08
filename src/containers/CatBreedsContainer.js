import { useState, useEffect } from 'react';
import Breed from "../components/Breed";
import { useFetch } from '../hooks/useFetch';

const CatBreedsContainer = () => {

    let {data, error} = useFetch("https://api.thecatapi.com/v1/breeds")

    if (error) {
        console.log("error:", error)
    }

    if (!data) {
        return "Loading"
    }

    const catBreeds = data.map(cat => { 
        return <Breed name={cat.name} temp={cat.temperament} key={`cat-${cat.id}`} />
    })

    return (
        <>
            <h2>Cat Breeds</h2>
            <ul>
                { catBreeds }
            </ul>
        </>
    )
}

export default CatBreedsContainer;
