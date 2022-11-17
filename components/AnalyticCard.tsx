import React from 'react'
import { Food, FoodMealInfo } from "../types/types"
import { multipleConverter } from '../functions/multipleConverter'

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
                <td>{foodInfo.potassium.toFixed(4)}g</td>
            </tr>
            <tr>
                <th>Calcium</th>
                <td>{multipleConverter(parseFloat(foodInfo.calcium.toFixed(8)),'g')}</td>
            </tr>
            <tr>
                <th>Iron</th>
                <td>{multipleConverter(parseFloat(foodInfo.iron.toFixed(8)),'g')}</td>
            </tr>
            <tr>
                <th>Cholesteron</th>
                <td>{multipleConverter(parseFloat(foodInfo.cholesterol.toFixed(8)),'g')}</td>
            </tr>
            <tr>
                <th>Magnesium</th>
                <td>{multipleConverter(parseFloat(foodInfo.magnesium.toFixed(8)),'g')}</td>
            </tr>
            <tr>
                <th>Vitamin A</th>
                <td>{multipleConverter(parseFloat(foodInfo.vitamin_A.toFixed(8)),'g')}</td>
            </tr>
            <tr>
                <th>Vitamin B2</th>
                <td>{multipleConverter(parseFloat(foodInfo.vitamin_B2.toFixed(8)),'g')}</td>
            </tr>
            <tr>
                <th>Vitamin B3</th>
                <td>{multipleConverter(parseFloat(foodInfo.vitamin_B3.toFixed(8)),'g')}</td>
            </tr>
            <tr>
                <th>Vitamin C</th>
                <td>{multipleConverter(parseFloat(foodInfo.vitamin_C.toFixed(8)),'g')}</td>
            </tr>
            <tr>
                <th>Vitamin D</th>
                <td>{multipleConverter(parseFloat(foodInfo.vitamin_D.toFixed(8)),'g')}</td>
            </tr>
            <tr>
                <th>Vitamin E</th>
                <td>{multipleConverter(parseFloat(foodInfo.vitamin_E.toFixed(8)),'g')}</td>
            </tr>
            <tr>
                <th>Vitamin K</th>
                <td>{multipleConverter(parseFloat(foodInfo.vitamin_K.toFixed(8)),'g')}</td>
            </tr>
            {/* <tr>
                <th>Water</th>
                <td>{foodInfo.water.toFixed(2)}g</td>
            </tr> */}
        </table>
    </div>
  )
}

export default AnalyticCard