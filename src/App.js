import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import SearchPet from './component/SearchPet';
import Title from './component/Title';
import Details from './component/Details';
import AdoptedPetContext from './component/AdoptedPetContext';
import './style.css';
import './component/searchPet.css'

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });

  const adoptedPet = useState(null);

  return (
    <div 
      className='p-0 m-0' 
      style={{background: "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)"}}>

    <QueryClientProvider client={queryClient}>
      <AdoptedPetContext.Provider value={adoptedPet}>
        <header 
          className='w-full mb-10 text-center p-7 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500'>
          <Title/>
        </header>

        <Routes>
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='/' element={<SearchPet/>}/>
        </Routes>
      </AdoptedPetContext.Provider>
    </QueryClientProvider>
    </div>
  );
}

export default App;
