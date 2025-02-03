import {FC, useEffect} from 'react';
import RecipeComponent from '../recipe/RecipeComponent';
import PaginationComponent from '../pagination/PaginationComponent';
import {useAppSelector} from "../../redux/hooks/UseAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/UseAppDispatch.tsx";
import {loadRecipes, setCurrentPage} from "../../redux/slices/recipeSlice/recipeSlice.ts";
import './RecipesComponent.css';

const RecipesComponent: FC = () => {
    const {recipes, currentPage, totalRecipes, loading, error} = useAppSelector((state) => state.recipeSlice);
    const dispatch = useAppDispatch();
    const itemsPerPage = 30;

    useEffect(() => {
        dispatch(loadRecipes(currentPage));
    }, [dispatch, currentPage]);

    const handlePageChange = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="recipes-container">
            {recipes.map((recipe) => (
                <RecipeComponent key={recipe.id} item={recipe} />
            ))}
            <PaginationComponent
                currentPage={currentPage}
                totalItems={totalRecipes}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default RecipesComponent;



