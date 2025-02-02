import RecipeDetailsComponent from "../components/recipeDetails/RecipeDetailsComponent.tsx"; // ВИПРАВЛЕНО ІМПОРТ КОМПОНЕНТА
import {FC} from "react";

const RecipeDetailsPage: FC = () => {
    return (
        <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '0.25rem', boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)' }}>
            <RecipeDetailsComponent />
        </div>
    );
};

export default RecipeDetailsPage;


