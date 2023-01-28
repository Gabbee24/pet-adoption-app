import { useState, useContext } from 'react';
import AdoptedPetContext from './AdoptedPetContext';
import { useQuery } from '@tanstack/react-query';
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
    const [adoptedPet, _] = useContext(AdoptedPetContext)

    const results = useQuery(['search', requestParams], fetchSearch);
    const pets = results?.data?.pets ?? [];

  return (
    <div className='search-params my-0 mx-auto w-11/12'>
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
            className='p-10 mb-10 rounded-lg bg-gray-200 shadow-lg justify-center items-center flex-col flex'>

                {
                    adoptedPet ? (
                        <div className="image-container pet">
                            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
                        </div>
                    ) : null
                }

            <label htmlFor="location">
                Location
                <input
                    type='text'
                    name='location'
                    id="location"
                    placeholder="Location"
                    className='mb-5 block w-60'
                />                
            </label>
            
            <label htmlFor="animal">
                Animal
                <select 
                    className='mb-5 block w-60'
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
            </label>
            
            <label htmlFor="breed">
                Breed
                <select
                    className='mb-5 block w-60 disabled:opacity-30' 
                    name='breed'
                    id="breed"
                    disabled={breeds.length === 0}
                    >
                    <option />
                    {breeds.map(breed => (
                        <option key={breed}>{breed}</option>
                        ))}
                </select>
            </label>

            <button
                className='rounded px-6 py-2 border-none bg-orange-500 text-white hover:opacity-50'
            >
                    Submit
            </button>
        </form>
        <Results
            pets={pets}
        />
    </div>
  )
}

export default SearchPet