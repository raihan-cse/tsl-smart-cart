import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/home/Landing'
import NotFound from './components/pages/NotFound'
import ExternalPage from './components/pages/ExternalPage'
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Landing />
          </Route>
          <Route path='/ExternalPage' component={ExternalPage}>
            <Header />
            <ExternalPage />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
