import {loadAuthUsers, refresh} from "../services/api.service.login.ts";
import {useEffect} from "react";

export const AuthResourcesPage = () => {

    useEffect(() => {
        loadAuthUsers().then(users => {
            console.log(users);
        }).catch(reason => {
            console.log(reason);
            refresh()
                .then(() => loadAuthUsers())
                .then(value => console.log(value));
        });
    }, []);

    return (
        <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '0.25rem', boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)' }}>
            AuthResources Page
        </div>
    );
};

