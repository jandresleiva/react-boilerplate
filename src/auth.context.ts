import { createContext } from 'react';

interface AuthContextState {
    isAuthenticated: boolean;
}

interface AuthContextProvider {
    children?: React.ReactNode;
    authState: AuthContextState;
    setAuthState: React.Dispatch<React.SetStateAction<AuthContextState>>;
}

const defaultAuthContextState: AuthContextProvider = {
    authState: {
        isAuthenticated: false
    },
    setAuthState: () => {}
};

export const AuthContext = createContext(defaultAuthContextState);
