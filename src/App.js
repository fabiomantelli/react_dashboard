import React from 'react';
/*import Routes from './Routes';*/
import { Switch, Route } from 'react-router-dom';

import MenuSuperior from './components/menu-superior/MenuSuperior';
import BarraLateral from './components/barra-lateral/BarraLateral';

import Conteudo from './components/conteudo/body-screen/ConteudoBody';
import Profile from './components/conteudo/profile/Profile';
import Company from './components/conteudo/company/Company';

function App()  {
    return (
      <div className="App">
        <MenuSuperior />
          <BarraLateral />
        <div className="Body">
          <Switch>
              <Route path="/profile"><Profile /></Route>
              <Route path="/company"><Company /></Route>
              <Route exact path="/">< Conteudo /></Route>
          </Switch>
        </div>
      </div>
    );
}

export default App;