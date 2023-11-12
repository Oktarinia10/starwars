import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Detail() {
  const { filmTitle } = useParams();
  const [film, setFilm] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/films/?search=${filmTitle}`)
      .then((filmResponse) => {
        const filmData = filmResponse.data.results[0];
        setFilm(filmData);

        const characterRequests = filmData.characters.map((characterUrl) => axios.get(characterUrl));
        Promise.all(characterRequests)
          .then((characterResponses) => {
            const characterData = characterResponses.map((response) => response.data);
            setCharacters(characterData);
          })
          .catch((error) => {
            console.error('Error fetching character data:', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching film data:', error);
      });
  }, [filmTitle]);

  return (
    <div className="body">
      {film && (
        <div className="box-content">
        <div className="right-box">
           <img src="../img/logo_stw.jpg" alt="" />
        </div>
        <div className="left-box" >
              <div className="text">
                  <h1><b>{film.title}</b></h1>
                  <p><b>Director:</b> {film.director}</p>
                  <p><b>Release Date: </b>{film.release_date}</p>
                  <p><b>Opening Crawl:</b> {film.opening_crawl}</p>
              </div>
          </div>
          
    </div>
      )}

      {characters.length > 0 && (
        <div className="container">
         <div className="actor-list pt-5">
          <h2>Daftar Karakter dalam Film</h2>
          <ul>
            {characters.map((character, index) => (
              <ul key={index}>
                <li><strong>Nama:</strong> {character.name}</li>
               
               
              </ul>
            ))}
          </ul>
        </div>
        </div>
        
      )}
    </div>
  );
}

export default Detail;
