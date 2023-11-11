import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Detail from './detail';

const Konten = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/films/')
      .then((response) => {
        setFilms(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching film data:', error);
      });
  }, []);

  return (
    <>
     {films.map((film) => (
  <div key={film.title} className="card">
    <img src="./img/logo_stw.jpg" alt="Card Image" />
    <div className="title">
      <Link to={`/film/${film.title}`}>{film.title}</Link>
    </div>
  </div>
      ))}
    </>
  );
}

export default Konten;
