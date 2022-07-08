import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import  Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import MoviePage from './components/MoviePage/MoviePage';
import Person from "./components/Person/Person";

function App() {
  const [idFilm, setIdFilm] = useState();

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
          {/* <Route path={`/staff/${idPerson}`} element={<Person/>} exact/> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;