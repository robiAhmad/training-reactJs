import * as React from "react";
import { useParams } from "react-router-dom";

import MealCard from "../../components/MealCard";

const Detail = () => {
    const { cat } = useParams();
    const [meals, setMeals] = React.useState([]);

    const fetchData = async (category) => {
        await setMeals([]);
        let data = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        let results = await data.json();

        setMeals(results.meals);
    };

    React.useEffect(() => {
        fetchData(cat);
    }, [cat]);

    return (
        <div>
            <h1>{cat.toUpperCase()}</h1>
            {meals && meals.length > 0 ? <MealCard meals={meals} /> : <p>Loading...</p>}
        </div>
    );
};

export default Detail;
