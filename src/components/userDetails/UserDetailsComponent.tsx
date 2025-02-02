import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser";
import {userService} from "../../services/api.service";
import {IUserResponse} from "../../models/IUserResponse";
import './UserDetailsComponent.css';

const UserDetailsComponent = () => {
    const {id} = useParams<{ id: string }>();
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        if (id) {
            userService.getAll().then((response: IUserResponse) => {
                const userData = response.users.find(user => user.id === Number(id));
                if (userData) {
                    setUser(userData);
                } else {
                    // Обработка случая, когда пользователь не найден
                    console.error(`User with id ${id} is not found`);
                }
            });
        }
    }, [id]);

    if (!user) return <p>Loading...</p>;

    return (
        <div className="user-details">
            <h1 className="user-name">{user.firstName} {user.lastName}</h1>
            <img className="user-image" src={user.image} alt={user.firstName} />
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Address:</strong> {user.address.city}, {user.address.address}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>Bank:</strong> {user.bank.cardType}</p>
        </div>
    );
};

export default UserDetailsComponent;




