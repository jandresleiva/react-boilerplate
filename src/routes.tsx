import { LogInPage, Main } from './pages';
import { Navigate } from 'react-router-dom';

const loggedIn = false;

export const routesConfig = [
    {
        path: '/',
        element: loggedIn ? <Main /> : <Navigate to="/login" />
    },
    {
        path: '/login',
        element: <LogInPage />
    }
];
