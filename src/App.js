import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import { Homepage } from './Components/HomePage';
import { NewsPage } from './Components/NewsPage';
import { VaccinePage} from './Components/VaccinePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Homepage }/>
        <Route path="/covid19/news" component={ NewsPage }/>
        <Route path="/Covid-19/vaccineSlots" component={ VaccinePage }/>
      </Switch>
    </Router>
  );
}

export default App;