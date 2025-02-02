import {urls} from "../constants/urls.ts";
import {IUserResponse} from "../models/IUserResponse.ts";
import {IRecipeResponse} from "../models/IRecipeResponse.ts";

const createService = <T>(url: { all: string; byId: (id: number) => string }) => ({
    getAll: async (pg: number = 0, limit: number = 30): Promise<T> => {
        const response = await fetch(`${url.all}?skip=${pg * limit}&limit=${limit}`);
        return await response.json();
    },
    getById: async (id: number): Promise<T> => {
        const response = await fetch(url.byId(id));
        return await response.json();
    }
});

export const userService = createService<IUserResponse>(urls.users);
export const recipeService = createService<IRecipeResponse>(urls.recipes);

