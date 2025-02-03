import {FC} from "react";
import './RecipesPage.css';
import RecipesComponent from "../../components/recipes/RecipesComponent.tsx";

const RecipesPage: FC = () => {
    return (
        <div className="recipes-page">
            <RecipesComponent/>
        </div>
    );
};

export default RecipesPage;




