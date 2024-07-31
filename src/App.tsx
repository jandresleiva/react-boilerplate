import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './themes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routesConfig } from './routes';

function App() {
    const getCurrentTheme = () =>
        window.matchMedia('(prefers-color-scheme: dark)').matches;

    const router = createBrowserRouter(routesConfig);

    return (
        <>
            <ThemeProvider theme={getCurrentTheme() ? darkTheme : lightTheme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </>
    );
}

export default App;
