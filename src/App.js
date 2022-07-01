import './App.css';
import  Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import MoviePage from './components/MoviePage/MoviePage';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Main />} exact/>
          <Route path={location.pathname} element={<MoviePage location={location}/>} exact/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;