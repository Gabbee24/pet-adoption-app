import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import useBreedList from './useBreedList';
import Results from './Results';
import fetchSearch from './fetchSearch';

const SearchPet = () => {
    const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

    const [requestParams, setRequestParams] = useState({
        location : '',
        animal : '',
        breed : '',
    });
    const [animal, setAnimal] = useState("");
    const [breeds] = useBreedList(animal);

    const results = useQuery(['search', requestParams], fetchSearch);
    const pets = results?.data?.pets ?? [];

  return (
    <div className='search-params'>
        <form 
            onSubmit={e => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const obj = {
                    animal: formData.get('animal') ?? '',
                    breed: formData.get('breed') ?? '',
                    location: formData.get('location') ?? '',
                };
                setRequestParams(obj);
            }}
            className='petForm'>


            <label htmlFor="location">
                Location
            </label>
                <input
                    name='location'
                    id="location"
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
                        // setBreed('');
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
                    name='breed'
                    id="breed"
                    disabled={breeds.length === 0}
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