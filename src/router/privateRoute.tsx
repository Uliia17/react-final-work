import {useContext, ReactNode, FC} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthContext} from '../contexts/AuthContext';

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute:FC<PrivateRouteProps> = ({children}) => {
    const auth = useContext(AuthContext);

    if (!auth || !auth.isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};

export default PrivateRoute;

