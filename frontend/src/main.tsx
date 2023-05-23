import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.sass'
import { AppRouter } from './router/app.router.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/app.provider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
)
