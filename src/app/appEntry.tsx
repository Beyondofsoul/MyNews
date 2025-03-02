import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../shared/index.css';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './appRouter';
import { AuthProvider } from './providers/AuthProvide';
import { Provider } from 'react-redux';
import { store } from './appStore';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </AuthProvider>
  </StrictMode>,
);
