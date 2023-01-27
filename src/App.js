import {Routes, Route} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import SearchPet from './component/SearchPet';
import Title from './component/Title';
import Details from './component/Details';
import './style.css';

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });

  return (
    <div className='container'>

    <QueryClientProvider client={queryClient}>

      <Title/>

      <Routes>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/' element={<SearchPet/>}/>
      </Routes>
    </QueryClientProvider>
    </div>
  );
}

export default App;
