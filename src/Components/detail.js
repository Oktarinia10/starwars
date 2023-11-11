import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Detail() {
  const [film, setFilm] = useState(null);
  const { filmTitle } = useParams();

  useEffect(() => {
    // Lakukan permintaan API untuk mendapatkan detail film berdasarkan filmTitle
    axios.get(`https://swapi.dev/api/films/?search=${filmTitle}`)
      .then((response) => {
        const filmData = response.data.results[0]; // Mengambil film pertama dari hasil pencarian
        setFilm(filmData);
      })
      .catch((error) => {
        console.error('Error fetching film data:', error);
      });
  }, [filmTitle]);

  return (
    <div>      
    {film ? (
        <div className="body"> 
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
            <div className="container">
                <div className="actor-list">
                    <h3>ACTOR LIST!</h3>
                </div>
            </div>
            
          </div>
         
          
        
      ) : (
        <div></div>
      )}

          
    
    </div>
    
  );
}

export default Detail;
