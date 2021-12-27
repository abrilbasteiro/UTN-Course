import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import RecetasPage from './pages/RecetasPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Nav/>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/nosotros" exact component={NosotrosPage} />
          <Route path="/recetas" exact component={RecetasPage} />
          <Route path="/contacto" exact component={ContactoPage} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
