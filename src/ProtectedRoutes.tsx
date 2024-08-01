import { Navigate } from 'react-router-dom';
import useAuth from './contexts/AuthContext/useAuth';

import { ReactNode } from 'react';

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
    const { authState } = useAuth();
    console.log('authState:', authState);
    return authState.isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
