import {FC} from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css'; // Імпорт CSS файлу

const HomePage: FC = () => {
    return (
        <div className="home-container">
            <img src="https://images.unsplash.com/photo-1495461199391-8c39ab674295?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Beautiful landscape" className="background-image"/>
            <div className="content">
                <h1>Recipes</h1>
                <p>
                    <Link to="/login">Enter</Link>
                </p>
            </div>
        </div>
    );
};

export default HomePage;







