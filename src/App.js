import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/home/Landing'
import NotFound from './components/pages/NotFound'
import ExternalPage from './components/pages/ExternalPage'
import HeaderWrapper from './components/header/HeaderWrapper';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/mobile-header.css';
import './assets/css/responsive.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <HeaderWrapper />
            <Landing />
            <Footer />
          </Route>
          <Route path='/ExternalPage'>
            <HeaderWrapper />
            <ExternalPage />
            <Footer />
          </Route>
          <Route path='*'>
            <HeaderWrapper />
            <NotFound />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
