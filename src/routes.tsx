import { AuthContextState } from './auth.context';
import { LogInPage, Main } from './pages';
import { Navigate } from 'react-router-dom';

export const routesConfig = (auth: AuthContextState) => [
    {
        path: '/',
        element: auth.isAuthenticated ? <Main /> : <Navigate to="/login" />
    },
    {
        path: '/login',
        element: <LogInPage />
    }
];
