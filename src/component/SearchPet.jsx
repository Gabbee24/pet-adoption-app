import { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import AdoptedPetContext from './AdoptedPetContext';
import { useQuery } from '@tanstack/react-query';
import useBreedList from './useBreedList';
import Results from './Results';
import fetchSearch from './fetchSearch';
import {all} from './reduxSlice/searchParamsSlice';

const SearchPet = () => {
    const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

    const [animal, setAnimal] = useState("");
    const [breeds] = useBreedList(animal);
    const adoptedPet = useSelector(state  => state.adoptedPet.value);
    const searchParams = useSelector(state => state.searchParams.value);
    const dispatch = useDispatch();

    const results = useQuery(['search', searchParams], fetchSearch);
    const pets = results?.data?.pets ?? [];

    const style ={
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '8px',
    }

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
                dispatch(all(obj));
            }}
            className='p-10 mb-10 rounded-lg bg-gray-200 shadow-lg justify-center items-center flex-col flex'>

                {
                    adoptedPet ? (
                        <div style={style} className="carousel-smaller image-container pet">
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
                    className='search-input'
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
                    className='search-input grayed-out-disabled' 
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