import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';

import Home from './components/Home';
import About from './components/About';
import Media from './components/Media';
import News from './components/News';
import Projects from './components/Projects';
import Works from './components/Works';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <p>Este es un menu de prueba uwu</p>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/works">Works</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/media">Media</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/media">
            <Media />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
