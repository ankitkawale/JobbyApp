import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Jobs from './components/Jobs';
import JobsItemsDetails from './components/JobsItemsDetails';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {

  

  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<ProtectedRoute Component={Home}/>}/>
      <Route path='/jobs' element={<ProtectedRoute Component={Jobs}/>}/>
      <Route path='/jobs/:id' element={<ProtectedRoute Component={JobsItemsDetails}/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
