import {createBrowserRouter} from 'react-router-dom';
import {MainLayout} from '../layouts/MainLayout';
import HomePage from '../pages/homePage/HomePage.tsx';
import LoginPage from '../pages/loginPage/LoginPage.tsx';
import UsersPage from '../pages/UsersPage';
import RecipesPage from '../pages/recipePage/RecipesPage.tsx';
import UserDetailsPage from '../pages/UserDetailsPage';
import RecipeDetailsPage from '../pages/RecipeDetailsPage';
import PrivateRoute from "./privateRoute.tsx";
import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx";


export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout />, children: [
            {index: true, element: <HomePage/>},
            {path: 'login', element: <LoginPage/>},
            {path: 'users', element: (
                    <PrivateRoute>
                        <UsersPage/>
                    </PrivateRoute>
                ),
            },
            {path: 'users/:id', element: (
                    <PrivateRoute>
                        <UserDetailsPage/>
                    </PrivateRoute>
                ),
            },
            {path: 'recipes', element: (
                    <PrivateRoute>
                        <RecipesPage/>
                    </PrivateRoute>
                ),
            },
            {path: 'recipes/:id', element: (
                    <PrivateRoute>
                        <RecipeDetailsPage/>
                    </PrivateRoute>
                ),
            },
            {path: 'auth/resources', element: (
                    <PrivateRoute>
                        <AuthResourcesPage/>
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

