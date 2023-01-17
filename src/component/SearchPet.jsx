import React from 'react';
import { useState, useEffect } from 'react';
import './searchPet.css';
import useBreedList from './useBreedList';
import Results from './Results';

const SearchPet = () => {
    const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);

    useEffect(() => {
        requestPets();
    },[]);

    async function requestPets() {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
    
        const jsonn = await res.json();

        setPets(jsonn.pets)
    }

  return (
    <div className='search-params'>
        <form 
            onSubmit={e => {
                e.preventDefault();
                requestPets();
            }}
            className='petForm'>
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
                        setBreed('');
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
                    disabled={breeds.length === 0}
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
        <Results
            pets={pets}
        />
    </div>
  )
}

export default SearchPet