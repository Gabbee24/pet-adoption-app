import {Routes, Route} from 'react-router-dom';
import SearchPet from './component/SearchPet';
import Title from './component/Title';
import Details from './component/Details';

function App() {
  return (
    <div className="App">
      <Title/>

      <Routes>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/' element={<SearchPet/>}/>
      </Routes>
    </div>
  );
}

export default App;
