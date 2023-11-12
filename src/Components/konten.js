import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

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
     <div className="konten">
      
     <Link to={`/film/${film.title}`}>
    <img src="./img/logo_stw.jpg" alt="Card Image" />
    <div className="title">
    </div>
    </Link>
    <p style={{ textDecoration: 'none', textAlign:'center', fontSize:'18px' }}>{film.title}</p>
  </div>
  
  </div>
      ))}
    </>
  );
}

export default Konten;
