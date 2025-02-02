import {FC, useEffect, useState} from 'react';
import {IUserWithTokens} from "../../models/IUserWithTokens.ts";
import {retriveLocalStorage} from "../../services/helpers.ts";
import './UserProfile.css';


const UserProfile:FC = () => {
    const [user, setUser] = useState<IUserWithTokens | null>(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            const storedUser = retriveLocalStorage<IUserWithTokens>('user');
            if (storedUser) {
                const response = await fetch('/auth/me', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${storedUser.accessToken}`,
                    },
                    credentials: 'include',
                });
                const data = await response.json();
                setUser(data);
            }
        };
        fetchUserProfile();
    }, []);

    if (!user) return <p>Loading...</p>;

    return (
        <div className="user-profile">
            <img className="user-profile-image" src={user.image} alt={user.username} />
            <p className="user-profile-name">{user.firstName} {user.lastName}</p>
        </div>
    );
};

export default UserProfile;
