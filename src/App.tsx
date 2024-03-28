import './App.css';
import Game from './components/Game';
import { Route, Routes } from 'react-router-dom';
import BoardsList from './components/BoardsList';

function App() {
  return <main>
    <div className="main-content">
      <Routes>
        <Route path="/" element={<BoardsList/>}/>
        <Route path="/game/:uuid" element={<Game/>}/>
      </Routes>
    </div>
  </main>;
}

export default App;
