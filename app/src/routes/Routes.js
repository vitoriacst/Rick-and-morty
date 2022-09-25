import { Route, Switch } from 'react-router-dom';
import Character from '../pages/Character/Character';

const Routes = () => {
  return (
    <Switch>
      <Route path="/personagens" component={Character} />
    </Switch>
  );
};

export default Routes;
