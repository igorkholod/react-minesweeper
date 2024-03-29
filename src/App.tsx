import './App.css';
import Game from './components/Game';
import { Route, Routes } from 'react-router-dom';
import BoardsList from './components/BoardsList';
import Layout from './components/Layout';
import BoardEditor from './components/BoardEditor';

function App() {
  return <main>
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<BoardsList />}/>
          <Route path="game/:uuid" element={<Game />}/>
          <Route path="create" element={<BoardEditor />}/>
        </Route>
      </Routes>
    </div>
  </main>;
}

export default App;
