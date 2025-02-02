import {FC} from 'react';
import {IRecipe} from '../../models/IRecipe';
import {Link} from 'react-router-dom';
import './RecipeComponent.css';

interface RecipeComponentProps {
    item: IRecipe;
}

const RecipeComponent:FC<RecipeComponentProps> = ({item}) => {
    return (
        <li className="recipe-item">
            <div className="recipe-content">
                <h2 className="recipe-title">
                    <Link to={`/recipes/${item.id}`}>{item.name}</Link>
                </h2>
                <p className="recipe-tags">Tags: {item.tags.join(', ')}</p>
            </div>
        </li>
    );
};

export default RecipeComponent;

