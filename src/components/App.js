/* eslint-disable react/no-array-index-key */
import React, { Suspense } from 'react';
import { Loader, FlexboxGrid } from 'rsuite';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '@components/Layout/Navbar';
import routes from '@shared/data/routes';

import 'rsuite/dist/styles/rsuite-default.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar appearance="inverse" />
        <FlexboxGrid
          style={{ maxWidth: 1366, margin: '25px auto', padding: 25 }}
        >
          <FlexboxGrid.Item colspan={24}>
            <Suspense
              fallback={<Loader backdrop content="carregando..." vertical />}
            >
              <Switch>
                {routes.map((route, idx) => {
                  if (route.children) {
                    return route.children.map((r, i) => (
                      <Route key={i} {...r} path={`${route.path}${r.path}`} />
                    ));
                  }
                  // @ts-ignore
                  return <Route key={idx} {...route} />;
                })}
              </Switch>
            </Suspense>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </BrowserRouter>
    </>
  );
}

export default App;
