/* eslint-disable react/no-array-index-key */
import React, { useState, Suspense } from 'react';
import { Loader } from 'rsuite';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '@components/Layout/Navbar';
import routes from '@shared/data/routes';

import 'rsuite/dist/styles/rsuite-default.css';

function App() {
  const [activeKey, setActiveKey] = useState(1);

  const handleSelect = eventKey => setActiveKey(eventKey);

  return (
    <>
      <Navbar
        appearance="inverse"
        activeKey={activeKey}
        onSelect={handleSelect}
      />
      <BrowserRouter>
        <Suspense
          fallback={<Loader backdrop content="carregando..." vertical />}
        >
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
