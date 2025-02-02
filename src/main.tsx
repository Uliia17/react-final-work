import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { routes } from './router/routes';
import { AuthProvider } from './contexts/AuthContext';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <AuthProvider>
                <RouterProvider router={routes} />
            </AuthProvider>
        </Provider>
    </React.StrictMode>
);




