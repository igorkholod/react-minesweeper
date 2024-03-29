import './App.css';
import Game from './components/Game';
import { Route, Routes } from 'react-router-dom';
import BoardsList from './components/BoardsList';
import Layout from './components/Layout';

function App() {
  return <main>
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<BoardsList />}/>
          <Route path="game/:uuid" element={<Game />}/>
        </Route>
      </Routes>
    </div>
  </main>;
}

export default App;
