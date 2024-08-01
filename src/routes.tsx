import { LogInPage, Main } from './pages';
import ProtectedRoutes from './ProtectedRoutes';

export const routesConfig = () => [
    {
        path: '/',
        element: (
            <ProtectedRoutes>
                <Main />
            </ProtectedRoutes>
        )
    },
    {
        path: '/login',
        element: <LogInPage />
    }
];
