import {
  BrowserRouter as Router,
  Switch,
  Route,
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
        {/* Header único compartido entre componentes */}
        <Header />
        {/* Renderizado por rutas */}
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
