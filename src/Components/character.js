import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CharacterDetail() {
  const { characterName } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/?search=${characterName}`)
      .then((characterResponse) => {
        const characterData = characterResponse.data.results[0]; 
        setCharacter(characterData);
      })
      .catch((error) => {
        console.error('Error fetching character data:', error);
      });
  }, [characterName]);

  return (
    <div className="character-detail">
      {character && (
        <div>
            <div className="box-content">
            <div className="right-box">
            <img src="../img/logo_stw.jpg" alt="" />
            </div>
            <div className="left-box" >
            <h2 style={{ color:'red', fontSize:'50px' }}>Detail Character</h2>
                <div className="text">
                <p><strong>Name:</strong> {character.name}</p>
                <p><strong>Height:</strong> {character.height}</p>
                <p><strong>Mass:</strong> {character.mass}</p>
                <p><strong>Gender:</strong> {character.gender}</p>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CharacterDetail;
