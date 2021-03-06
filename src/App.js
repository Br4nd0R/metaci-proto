import React, { useContext } from 'react';
import { useTransition, animated } from 'react-spring';
import { Switch, Route, __RouterContext } from 'react-router-dom';

import { 
  Navbah,
  BuildsPage, 
  PlansPage, 
  RepositoriesPage, 
  AccountPage
} from './components';


const App = () => { 

  const { location } = useContext(__RouterContext);
  const transitions = useTransition( location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" } 
  });

  return ( 
    <>
      <Navbah />
      <main className="container-fluid">
        {transitions.map(({ item, props, key }) => (
            <animated.div key={key} style={props}>
              <Switch location={item}>
                <Route exact path='/' component={BuildsPage} />
                <Route exact path='/plans' component={PlansPage} />
                <Route exact path='/repositories' component={RepositoriesPage} />
                <Route exact path='/accountInfo' component={AccountPage} />
              </Switch>
            </animated.div>
        ))}
        </main>
    </>
  );
}

export default App;