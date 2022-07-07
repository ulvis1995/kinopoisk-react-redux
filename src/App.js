import './App.css';
import  Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import MoviePage from './components/MoviePage/MoviePage';
import { useState } from 'react';

function App() {
  const [idFilm, setIdFilm] = useState();
  const location = useLocation ()

  const handleId = (id) => {
    setIdFilm(id)
  }

  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Main handleId={handleId}/>} exact/>
          <Route path={`/films/${idFilm}`} element={<MoviePage idFilm={idFilm} handleId={handleId}/>} exact/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;