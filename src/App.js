import {
  Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import Home from './views/Home';
import HoroscopeChinois from './views/HoroscopeChinois';
import './App.css';
import Header from './views/Header';

const App = () => (
  <div>
    <Router>
      <Header />
      <Switch>
        <Route path="/horoscope_chinois">
          <HoroscopeChinois />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </div>

);

export default App;
