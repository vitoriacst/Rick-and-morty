import { Route, Switch } from 'react-router-dom';
import Character from '../pages/Character/Character';
import Episode from '../pages/Episodes.js';
import HomePage from '../pages/HomePage';
import Location from '../pages/Location';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/personagens" component={Character} />
      <Route exact path="/episode" component={Episode} />
      <Route exact path="/location" component={Location} />
    </Switch>
  );
};

export default Routes;
