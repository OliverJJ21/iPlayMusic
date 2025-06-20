import { Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';
import Index from './pages/index';
import LoginPage from './pages/login';
import Walkthrough from './pages/walkthrough';
import Featured from './pages/featured';
import Categories from './pages/categories';
import Albums from './pages/albums';
import AlbumDetails from './pages/albumdetails';
import Playlists from './pages/playlists';
import Player from './pages/player';
import './style/reset.scss';
import './style/darkmode.scss';

function App() {

  return (
    <DarkModeProvider>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/walkthrough" element={<Walkthrough />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/albumdetails" element={<AlbumDetails />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </DarkModeProvider>
  );
}

export default App;
