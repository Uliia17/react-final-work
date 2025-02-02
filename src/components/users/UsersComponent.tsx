import {FC, useEffect} from 'react';
import UserComponent from '../user/UserComponent';
import PaginationComponent from '../pagination/PaginationComponent';
import {useAppSelector} from "../../redux/hooks/UseAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/UseAppDispatch.tsx";
import {loadUsers, setCurrentPage} from "../../redux/slices/userSlice/userSlice.ts";
import './UsersComponent.css';

const UsersComponent:FC = () => {
    const {users, currentPage, totalUsers, loading, error} = useAppSelector((state) => state.userSlice);
    const dispatch = useAppDispatch();
    const itemsPerPage = 30;

    useEffect(() => {
        dispatch(loadUsers(currentPage));
    }, [dispatch, currentPage]);

    const handlePageChange = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="users-container">
            {users.map((user) => (
                <UserComponent key={user.id} item={user} />
            ))}
            <PaginationComponent
                currentPage={currentPage}
                totalItems={totalUsers}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default UsersComponent;





