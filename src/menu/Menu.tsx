import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../contexts/AuthContext';
import './Menu.css';

const Menu = () => {
    const auth = useContext(AuthContext);

    if (!auth) {
        return null;
    }

    return (
        <div className="menu">
            <ul className="menu-list">
                <li className="menu-item"><Link to="/">Home</Link></li>
                {auth.isAuthenticated ? (
                    <>
                        <li className="menu-item"><Link to="/users">Users</Link></li>
                        <li className="menu-item"><Link to="/recipes">Recipes</Link></li>
                        <li className="menu-item"><button onClick={auth.logout}>Logout</button></li> {/* КНОПКА Logout */}
                    </>
                ) : (
                    <li className="menu-item"><Link to="/login">Login</Link></li>
                )}
            </ul>
        </div>
    );
};

export default Menu;
