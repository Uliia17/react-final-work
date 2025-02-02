const baseURL = import.meta.env.VITE_API_URL;

export const urls = {
    users: {
        all: `${baseURL}/users`,
        byId: (id: number) => `${baseURL}/users/${id}`
    },
    recipes: {
        all: `${baseURL}/recipes`,
        byId: (id: number) => `${baseURL}/recipes/${id}`
    }
};




