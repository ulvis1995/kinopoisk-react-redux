import token  from '../../../apiData/token';
import urlFilms from '../../../apiData/urlFilms';
import axios from 'axios';

const seasons = async (idFilm) => {
  const response = await axios.get(
    `${urlFilms}/films/${idFilm}/seasons`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}}
  )
  return response.data.items;
};

export default seasons;