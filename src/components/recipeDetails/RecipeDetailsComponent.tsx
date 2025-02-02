import {useParams} from "react-router";
import {FC, useEffect, useState} from "react";
import {recipeService} from "../../services/api.service";
import {IRecipe} from "../../models/IRecipe";
import {IRecipeResponse} from "../../models/IRecipeResponse";
import './RecipeDetailsComponent.css';

const RecipeDetailsComponent:FC = () => {
    const {id} = useParams<{id: string}>();
    const [recipe, setRecipe] = useState<IRecipe | null>(null);

    useEffect(() => {
        if (id) {
            recipeService.getAll().then((response: IRecipeResponse) => {
                const recipeData = response.recipes.find(recipe => recipe.id === Number(id));
                if (recipeData) {
                    setRecipe(recipeData);
                } else {
                    console.error(`Recipe with id ${id} is not found`);
                }
            });
        }
    }, [id]);

    if (!recipe) return <p>Loading...</p>;

    return (
        <div className="recipe-details">
            <h1 className="recipe-title">{recipe.name}</h1>
            <img className="recipe-image" src={recipe.image} alt={recipe.name} />
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
            <p><strong>Instructions:</strong> {recipe.instructions.join(' ')}</p>
            <p><strong>Cook Time Minutes:</strong> {recipe.cookTimeMinutes}</p>
            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
            <p><strong>Calories Per Serving:</strong> {recipe.caloriesPerServing}</p>
        </div>
    );
};

export default RecipeDetailsComponent;
