import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/home/Landing'
import NotFound from './components/pages/NotFound'
import ExternalPage from './components/pages/ExternalPage'
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Landing />
            <Footer />
          </Route>
          <Route path='/ExternalPage'>
            <Header />
            <ExternalPage />
            <Footer />
          </Route>
          <Route path='*'>
            <Header />
            <NotFound />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
