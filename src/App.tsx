import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {useTypedSelector} from './hooks/useTypedSelector';
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import MoviePage from './components/MoviePage/MoviePage';
import Person from './components/Person/Person';
import Top from './components/Top/Top';
import Premieres from './components/Premieres/Premieres';

const App: React.FC = () => {
  const {id} = useTypedSelector(({movieId}) => movieId);
  const {staffId} = useTypedSelector(({movieId}) => movieId);
  const {activeLink} = useTypedSelector(({header}) => header);

  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path={`/films/${id}`} element={<MoviePage />} />
          <Route path={`/staff/${staffId}`} element={<Person staffId={staffId}/>} />
          <Route path={activeLink} element={activeLink !== `/premieres` 
            ? <Top activeLink={activeLink}/>
            : <Premieres activeLink={activeLink}/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;