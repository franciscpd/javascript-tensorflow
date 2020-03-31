import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'rsuite';
import ptBR from 'rsuite/lib/IntlProvider/locales/pt_BR';
import App from '@components/App';

ReactDOM.render(
  <IntlProvider locale={ptBR}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
