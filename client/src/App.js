import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Partner from './pages/Partner';
import SingleMovie from './pages/Home/SingleMovie.jsx';
import BookShow from './pages/Home/BookShow.js';
//import Profile from "./pages/Profile";

import "./index.css";
import "./App.css";

import ProtectedRoute from "./components/ProtectedRoute.js";


function App() {
  const { loading } = useSelector((state) => state.loaders); 
  return (
    <div>
      <div>
            {loading && ( <div className="spinner"/>) }
        </div>
      <Router>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/admin" element={<ProtectedRoute> <Admin /></ProtectedRoute>}/>
          <Route path="/partner" element={<ProtectedRoute> <Partner/> </ProtectedRoute>}/>
          <Route path="/movie/:id" element={ <ProtectedRoute> <SingleMovie /> </ProtectedRoute> }/>
          <Route path="/book-show/:id" element={<ProtectedRoute> <BookShow/> </ProtectedRoute>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
