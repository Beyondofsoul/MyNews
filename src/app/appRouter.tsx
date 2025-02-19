import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import { HomePage } from '../pages/Home';
import LoginPage from '../pages/Login/ui/Page';
import ProtectedRoute from './ProtectedRoute';
import ProfilePage from '../pages/Profile/ui/Page';
import NewsPage from '../pages/News/ui/Page';

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/auth', element: <LoginPage /> },
      { path: '/news', element: <NewsPage /> },
      {
        path: '/profile/:userId',
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
