/* eslint-disable react/no-array-index-key */
import React, { useState, Suspense } from 'react';
import { Loader, FlexboxGrid } from 'rsuite';
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
      <FlexboxGrid style={{ maxWidth: 1366, margin: '25px auto', padding: 25 }}>
        <FlexboxGrid.Item colspan={24}>
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
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
}

export default App;
