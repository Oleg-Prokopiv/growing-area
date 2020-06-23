import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import SignUp from './components/SignUp';
import SelectGrid from './components/SelectGrid';
import Example from './containers/example';
import Message from './components/Message';

function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component={SignUp} />
      <Route path="/select-grid" exact={true} component={SelectGrid} />
      <Route path="/message" exact={true} component={Message} />
      <DndProvider backend={HTML5Backend}>
        <Route path="/main" exact={true} component={Example} />
      </DndProvider>
    </Switch>
  );
}

export default App;
