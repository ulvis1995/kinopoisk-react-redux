import token  from '../../apiData/token';
import urlFilms from '../../apiData/urlFilms';
import axios from 'axios';

const searchHeader = async (search) => {
  const response = await axios.get(
    `${urlFilms}/films?keyword=${search ? search : ''}`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}}
  )
  return response.data;
};

export default searchHeader;