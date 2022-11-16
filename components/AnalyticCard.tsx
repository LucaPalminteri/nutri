import React from 'react'
import { Food, FoodMealInfo } from "../types/types"

type Props = {
    foodInfo:Food
}

function AnalyticCard({foodInfo}:Props) {

  return (
    <div>
        <h2>AnalyticCard</h2>
        <table>
            <tr>
                <th>Calories</th>
                <td>{foodInfo.calories.toFixed(2)}kcal</td>
            </tr>
            <tr>
                <th>Carbohydrates</th>
                <td>{foodInfo.carbohydrates.toFixed(2)}g</td>
            </tr>
            <tr>
                <th>Protein</th>
                <td>{foodInfo.protein.toFixed(2)}g</td>
            </tr>
            <tr>
                <th>Total Fat</th>
                <td>{foodInfo.total_fat.toFixed(2)}g</td>
            </tr>
            <tr>
                <th>Dietary Fiber</th>
                <td>{foodInfo.dietary_fiber.toFixed(2)}g</td>
            </tr>
            <tr>
                <th>Sodium</th>
                <td>{foodInfo.sodium.toFixed(2)}g</td>
            </tr>
            <tr>
                <th>Potassium</th>
                <td>{foodInfo.potassium.toFixed(2)}g</td>
            </tr>
            <tr>
                <th>Calcium</th>
                <td>{foodInfo.calcium.toFixed(2)}g</td>
            </tr>
            <tr>
                <th>Iron</th>
                <td>{foodInfo.iron.toFixed(2)}g</td>
            </tr>
            <tr>
                <th>Cholesteron</th>
                <td>{foodInfo.cholesterol.toFixed(2)}g</td>
            </tr>
            <tr>
                <th>Magnesium</th>
                <td>{foodInfo.magnesium.toFixed(2)}g</td>
            </tr>
            <tr>
                <th>Vitamin A</th>
                <td>{foodInfo.vitamin_A.toFixed(2)}g</td>
            </tr>
        </table>
    </div>
  )
}

export default AnalyticCard