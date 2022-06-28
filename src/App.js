import './App.css';
import  Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import MoviePage from './components/MoviePage/MoviePage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Main />} exact/>
          <Route path='/films/id' element={<MoviePage />} exact/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
