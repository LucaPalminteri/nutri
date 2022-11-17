import React from 'react'
import { calcRuleOfThree } from '../functions/ruleOfThree';
import { multipleConverter } from "../functions/multipleConverter"
import { Food, FoodMealInfo, Props } from "../types/types"

function MealInfo({ meal, foods }: Props) {

    let mealInfo:Array<any> = [];
    mealInfo = JSON.parse(meal.meal_info);

    let total_calories:number = 0;
    let total_carbohydrates:number = 0;
    let total_protein:number = 0;
    let total_fat:number = 0;

    return (
        <main className='text'>
            <p>{meal.description != null ? meal.description : "INFO BY NUTRIENTS"}</p>
            <table>
                <thead>
                    <th>Amount</th>
                    <th>Name</th>
                    <th>Calories</th>
                </thead>
                <tbody>
                    {mealInfo != null ? mealInfo.map((info: FoodMealInfo, index: number) => {
                        let foodInfo: Food = foods.find((food: Food) => food.name == info.name);

                        let food_calories:number = calcRuleOfThree(foodInfo?.portion, foodInfo?.calories, parseInt(info.amount))
                        let food_carbohydrates:number = calcRuleOfThree(foodInfo?.portion, foodInfo?.carbohydrates, parseInt(info.amount))
                        let food_protein:number = calcRuleOfThree(foodInfo?.portion, foodInfo?.protein, parseInt(info.amount))
                        let food_fat:number = calcRuleOfThree(foodInfo?.portion, foodInfo?.total_fat, parseInt(info.amount))

                        total_calories += food_calories
                        total_carbohydrates += food_carbohydrates
                        total_protein += food_protein
                        total_fat += food_fat

                        return (
                            <tr key={index}>
                                <td>{multipleConverter(parseFloat(info.amount),foodInfo.unit)}</td>
                                <td>{info.name}</td>
                                <td>{foodInfo?.portion != null ? food_calories.toFixed(2) + "kcal" : ""}</td>
                            </tr>
                        )
                    }) : ""}
                </tbody>
            </table>
            <p>TOTAL INFO</p>
            <table>
                <tr>
                    <th>Calories</th>
                    <td>{total_calories.toFixed(2)}kcal</td>
                </tr>
                <tr>
                    <th>Carbohydrates</th>
                    <td>{total_carbohydrates.toFixed(2)}g</td>
                </tr>
                <tr>
                    <th>Protein</th>
                    <td>{total_protein.toFixed(2)}g</td>
                </tr>
                <tr>
                    <th>Total Fat</th>
                    <td>{total_fat.toFixed(2)}g</td>
                </tr>
            </table>
        </main>
    )
}

export default MealInfo