import logo from './logo.svg';
import Main from './Components/main';
import Detail from './Components/detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/film/:filmTitle" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
