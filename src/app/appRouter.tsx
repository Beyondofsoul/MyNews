import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import { HomePage } from '../pages/Home';
import LoginPage from '../pages/Login/ui/Page';
import ProtectedRoute from './ProtectedRoute';
import ProfilePage from '../pages/Profile/ui/Page';
import PostsPage from '@/pages/Posts/ui/Page';
import { WeatherPage } from '@/pages/Weather';
import { CurrencyPage } from '@/pages/Currency';

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/auth', element: <LoginPage /> },
      { path: '/posts', element: <PostsPage /> },
      { path: '/weather', element: <WeatherPage /> },
      { path: '/currency', element: <CurrencyPage /> },
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
