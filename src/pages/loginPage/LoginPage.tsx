import {useEffect, useState, useContext, FC, FormEvent} from "react";
import {IUser} from "../../models/IUser.ts";
import {userService} from "../../services/api.service.ts";
import {login} from "../../services/api.service.login.ts";
import {AuthContext} from '../../contexts/AuthContext.tsx';
import './LoginPage.css';

const LoginPage: FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState<IUser[]>([]);
    const auth = useContext(AuthContext);

    useEffect(() => {
        userService.getAll().then(response => {
            setUsers(response.users);
        });
    }, []);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            console.log('Auth successful');
            const userWithTokens = await login({ username, password, expiresInMins: 60 });
            auth?.login(userWithTokens);
        } else {
            console.log('Invalid login or password');
        }
    };

    if (auth?.isAuthenticated) {
        return <div>Welcome, {auth.user?.username}!</div>;
    }

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <div className="input-container">
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete="username"
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <div className="input-container">
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                </div>
            </div>

            <div className="button-container">
                <button type="submit" className="login-button">Login</button>
            </div>
        </form>
    );
};

export default LoginPage;




