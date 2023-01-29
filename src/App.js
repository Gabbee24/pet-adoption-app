import { useState, lazy , Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Title from './component/Title';
import SearchPet from './component/SearchPet';
import Details from './component/Details';
import AdoptedPetContext from './component/AdoptedPetContext';
import './style.css';
import './component/searchPet.css';
import {FaDog} from 'react-icons/fa'

// const Details = lazy(() => import('./component/Details'));
// const SearchPet = lazy(() => import('./component/SearchPet'));


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

    <AdoptedPetContext.Provider value={adoptedPet}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback= {
          <div className='loading-pane'>
            <h2 className='loader'><FaDog/></h2>
          </div>
        }>
          <header 
            className='w-full mb-10 text-center p-7 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500'>
            <Title/>
          </header>

          <Routes>
            <Route path='/details/:id' element={<Details/>}/>
            <Route path='/' element={<SearchPet/>}/>
          </Routes>
        </Suspense>
      </QueryClientProvider>
    </AdoptedPetContext.Provider>
    </div>
  );
}

export default App;
