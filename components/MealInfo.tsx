import React from 'react'
import { calcRuleOfThree } from '../functions/ruleOfThree';
import {multipleConverter} from "../functions/multipleConverter"

type Props = {
    meal: {
        id:number,
        created_at:Date,
        description:string,
        type:string,
        meal_info:string
    },
    foods:any 
    }

type Food = {
    id:number,
    name:string,
    calories:number,
    carbohydrates:number,
    protein:number,
    total_fat:number,
    sugars:number,
    dietary_fiber:number,
    sodium:number,
    potassium:number,
    calcium:number,
    iron:number,
    vitamin_A:number,
    vitamin_B2:number,
    vitamin_B3:number,
    vitamin_C:number,
    vitamin_D:number,
    cholesterol:number,
    portion:number,
    company:string,
    magnesium:number,
    vitamin_E:number,
    vitamin_K:number,
    unit:string,
}

type FoodInfo = {
    name:string,
    amount:string
}

function MealInfo({meal,foods}: Props) {

    let mealInfo = [];
  mealInfo = JSON.parse(meal.meal_info);

  let total_calories = 0;
            let total_carbohydrates = 0;
            let total_protein = 0;
            let total_fat = 0;

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
                {mealInfo != null ? mealInfo.map((info:FoodInfo,index:number) => {
                    let foodInfo:Food = foods.find((food:Food) => food.name == info.name);
                    
                    let food_calories = calcRuleOfThree(foodInfo?.portion,foodInfo?.calories,parseInt(info.amount))
                    let food_carbohydrates = calcRuleOfThree(foodInfo?.portion,foodInfo?.carbohydrates,parseInt(info.amount))
                    let food_protein = calcRuleOfThree(foodInfo?.portion,foodInfo?.protein,parseInt(info.amount))
                    let food_fat = calcRuleOfThree(foodInfo?.portion,foodInfo?.total_fat,parseInt(info.amount))
                    
                    total_calories += food_calories
                    total_carbohydrates += food_carbohydrates
                    total_protein += food_protein
                    total_fat += food_fat
                    
                    
                    return (
                        <tr key={index}>
                            <td>{multipleConverter(parseFloat(info.amount))}{foodInfo?.unit == 'L' ? 'mL' : foodInfo?.unit}</td>
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