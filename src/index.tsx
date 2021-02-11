import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { render } from 'react-dom';
import './assets/scss/main.scss';
import './i18n';
import App from './views/app';

const queryClient = new QueryClient();
const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  rootElement
);
