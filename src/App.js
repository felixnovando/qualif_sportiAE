import './App.css';
import ArtistPage from './pages/ArtistPage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AlbumDetail from './pages/AlbumDetail';
import FavoritePage from './pages/FavoritePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/favorites">
            <FavoritePage />
        </Route>
        <Route path="/album/:id">
            <AlbumDetail/>
        </Route>
        <Route path="/">
            <ArtistPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
