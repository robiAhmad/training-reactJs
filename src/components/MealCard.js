import React from "react";
const Card = (props) => {
    let { title, imgSource } = props;
    return (
        <>
            <div className="cardWrapper">
                <img className="cardImg" src={imgSource} alt={title} />
                <p className="cardText">{title}</p>
            </div>
        </>
    );
};

const MealCard = (props) => {
    let { meals } = props;

    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {meals.map((meal) => (
                    <Card
                        title={meal.strMeal}
                        imgSource={meal.strMealThumb}
                        key={meal.idMeal}
                    />
                ))}
            </div>
            ;
        </>
    );
};

export default MealCard;
