import {Outlet, useLocation} from 'react-router-dom';
import Menu from '../menu/Menu';
import {useContext, useState} from 'react';
import {AuthContext} from '../contexts/AuthContext';
import SearchComponent from '../components/searces/SearchComponent.tsx';
import UserProfile from "../components/profiles/UserProfile.tsx";
import './MainLayout.css';

export const MainLayout = () => {
    const auth = useContext(AuthContext);
    const location = useLocation();
    const [searchResults, setSearchResults] = useState<any[]>([]);

    if (!auth) {
        return <div>Loading...</div>; // ДОДАНО ПЕРЕВІРКУ НА НАЯВНІСТЬ auth
    }

    const handleSearch = async (query: string) => {
        let url = '';
        if (location.pathname.includes('users')) {
            url = `https://dummyjson.com/users/search?q=${query}`;
        } else if (location.pathname.includes('recipes')) {
            url = `https://dummyjson.com/recipes/search?q=${query}`;
        }

        if (url) {
            const response = await fetch(url);
            const data = await response.json();
            setSearchResults(data.users || data.recipes || []);
        }
    };

    return (
        <div className="main-layout">
            {auth.isAuthenticated && (
                <>
                    <Menu />
                    <UserProfile />
                    <SearchComponent onSearch={handleSearch} />
                    <div className="search-results">
                        {searchResults.map(result => (
                            <div key={result.id} className="search-result-item">
                                {result.name || `${result.firstName} ${result.lastName}`}
                            </div>
                        ))}
                    </div>
                </>
            )}
            <Outlet />
        </div>
    );
};
