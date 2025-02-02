import {FC} from 'react';
import {Link} from 'react-router-dom';

const HomePage: FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f7fafc' }}>
            <h1>Welcome to the Home Page</h1>
            <p>
                <Link to="/login">Enter</Link>
            </p>
        </div>
    );
};

export default HomePage;




