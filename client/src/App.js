import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import RecipeCreate from './components/RecipeCreate/RecipeCreate';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/detail/:id' component={Detail} />
        <Route exact path='/recipe' component={RecipeCreate} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
