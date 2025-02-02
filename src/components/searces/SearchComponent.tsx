import {FC, useState} from 'react';
import './SearchComponent.css';

interface SearchComponentProps {
    onSearch: (query: string) => void;
}

const SearchComponent:FC<SearchComponentProps> = ({onSearch}) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button">Search</button>
        </div>
    );
};

export default SearchComponent;
