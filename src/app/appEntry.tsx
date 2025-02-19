import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../shared/index.css';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './appRouter';
import { AuthProvider } from './providers/AuthProvide';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={appRouter} />
    </AuthProvider>
  </StrictMode>,
);
