import {useEffect, useState, useContext, FC, FormEvent} from "react";
import {IUser} from "../models/IUser.ts";
import {userService} from "../services/api.service.ts";
import {login} from "../services/api.service.login.ts";
import {AuthContext} from '../contexts/AuthContext';

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

    const handleSubmit = async (event:FormEvent) => {
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

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="username"
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginPage;


