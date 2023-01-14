import React from 'react';
import { useState, useEffect } from 'react';
import './searchPet.css';

const SearchPet = () => {
    const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const breeds = [];

  return (
    <div className='search-params'>
        <form className='petForm'>
            <label htmlFor="location">
                Location
            </label>
                <input
                    onChange={e => setLocation(e.target.value)}
                    id="location"
                    value={location}
                    placeholder="Location"
                />                
            
            <label htmlFor="animal">
                Animal
            </label>
                <select 
                    value={animal} 
                    id="animal"
                    onChange={e => {
                        setAnimal(e.target.value);
                    }}
                >
                    <option />
                    {ANIMALS.map(animal => (
                        <option key={animal}>{animal}</option>
                    ))}
                </select>
            
            <label htmlFor="breed">
                Breed
            </label>
                <select 
                    value={breed} 
                    id="breed"
                    onChange={e => {
                        setBreed(e.target.value);
                    }}
                >
                    <option />
                    {breeds.map(breed => (
                        <option key={breed}>{breed}</option>
                    ))}
                </select>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default SearchPet