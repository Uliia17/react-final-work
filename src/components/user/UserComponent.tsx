import {FC} from 'react';
import {IUser} from '../../models/IUser';
import {Link} from 'react-router-dom';
import './UserComponent.css';

interface UserComponentProps {
    item: IUser;
}

const UserComponent:FC<UserComponentProps> = ({item}) => {
    return (
        <li className="user-item">
            <div className="user-content">
                <h2 className="user-name">
                    <Link to={`/users/${item.id}`}>{item.firstName} {item.lastName}</Link>
                </h2>
                <p className="user-email">{item.email}</p>
            </div>
        </li>
    );
};

export default UserComponent;





