import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './themes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthContext } from './auth.context';
import { useState } from 'react';
import { routesConfig } from './routes';

function App() {
    const getCurrentTheme = () =>
        window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [authState, setAuthState] = useState({
        isAuthenticated: false
    });

    const router = createBrowserRouter(routesConfig(authState));
    return (
        <>
            <AuthContext.Provider value={{ authState, setAuthState }}>
                <ThemeProvider
                    theme={getCurrentTheme() ? darkTheme : lightTheme}
                >
                    <RouterProvider router={router} />
                </ThemeProvider>
            </AuthContext.Provider>
        </>
    );
}

export default App;
