import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path="/about">
                <About></About>
            </Route>
            <Route path="/projects">
                <Projects></Projects>
            </Route>
            <Route path="/contact">
                <Contact></Contact>
            </Route>
            <Route path="*">
              {/* <Error404></Error404> */}
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
