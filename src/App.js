import logo from './logo.svg';
import Main from './Components/main';
import Detail from './Components/detail';
import CharacterDetail from './Components/character';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/film/:filmTitle" element={<Detail />} />
        <Route path="/character/:characterName" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
