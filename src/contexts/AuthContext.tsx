import {createContext, useState, useEffect, ReactNode} from 'react';
import {IUserWithTokens} from '../models/IUserWithTokens';

interface AuthContextType {
    isAuthenticated: boolean;
    user: IUserWithTokens | null;
    login: (user: IUserWithTokens) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<IUserWithTokens | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (user: IUserWithTokens) => {
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

