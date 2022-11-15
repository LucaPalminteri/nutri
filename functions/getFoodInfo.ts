import { PostgrestResponse } from "@supabase/supabase-js";
import { supabase } from "../supabaseClient";
import { sortArrayByName } from "./sortArrayByName"

type FoodMealInfo = {
    name:string,
    amount:string
}

type FoodInfoOut = {
    calcium:number,
    calories:number,
    carbohydrates:number,
    cholesterol:number,
    dietary_fiber:number,
    iron:number,
    magnesium:number,
    potassium:number,
    protein:number,
    sodium:number,
    sugars:number,
    total_fat:number,
    vitamin_A:number,
    vitamin_B2:number,
    vitamin_B3:number,
    vitamin_C:number,
    vitamin_D:number,
    vitamin_E:number,
    vitamin_K:number,
    water:number
}

const TABLE = 'foods';

export async function getFoodInfo(arrayInfo:string) {

    let aux:Array<FoodMealInfo> = JSON.parse(arrayInfo)
    let query:string = ''
    let outArr:Array<FoodInfoOut> = []
    let sumObject:FoodInfoOut ={
            calcium:0,
            calories:0,
            carbohydrates:0,
            cholesterol:0,
            dietary_fiber:0,
            iron:0,
            magnesium:0,
            potassium:0,
            protein:0,
            sodium:0,
            sugars:0,
            total_fat:0,
            vitamin_A:0,
            vitamin_B2:0,
            vitamin_B3:0,
            vitamin_C:0,
            vitamin_D:0,
            vitamin_E:0,
            vitamin_K:0,
            water:0
    }

    sortArrayByName(aux)

    // create the query for all items in the insert section
    aux.forEach((element:any) => query += `name.eq.${element.name},`);
    query = query.slice(0,-1);

    try {
        const { data, error }:PostgrestResponse<any> = await supabase.from(TABLE).select().or(query);

        if (data != null) sortArrayByName(data);

        // retrive the items in the insert with all of its information

        data?.forEach((element:any, index:number) => {
            // iterating for every full detailed food to create the output
            let output:FoodInfoOut = {
                calcium:0,
                calories:0,
                carbohydrates:0,
                cholesterol:0,
                dietary_fiber:0,
                iron:0,
                magnesium:0,
                potassium:0,
                protein:0,
                sodium:0,
                sugars:0,
                total_fat:0,
                vitamin_A:0,
                vitamin_B2:0,
                vitamin_B3:0,
                vitamin_C:0,
                vitamin_D:0,
                vitamin_E:0,
                vitamin_K:0,
                water:0
            }
            let factor = parseFloat(aux[index].amount)/element.portion

            // calculating info for each food
            let calcium = element.calcium * factor;
            let calories = element.calories * factor;
            let carbohydrates = element.carbohydrates * factor;
            let cholesterol = element.cholesterol * factor;
            let dietary_fiber = element.dietary_fiber * factor;
            let iron = element.iron * factor;
            let magnesium = element.magnesium * factor;
            let potassium = element.potassium * factor;
            let protein = element.protein * factor;
            let sodium = element.sodium * factor;
            let sugars = element.sugars * factor;
            let total_fat = element.total_fat * factor;
            let vitamin_A = element.vitamin_A * factor;
            let vitamin_B2 = element.vitamin_B2 * factor;
            let vitamin_B3 = element.vitamin_B3 * factor;
            let vitamin_C = element.vitamin_C * factor;
            let vitamin_D = element.vitamin_D * factor;
            let vitamin_E = element.vitamin_E * factor;
            let vitamin_K = element.vitamin_K * factor;

            // asigning each info a value
            output.calcium = calcium;
            output.calories = calories;
            output.carbohydrates = carbohydrates;
            output.cholesterol = cholesterol;
            output.dietary_fiber = dietary_fiber;
            output.iron = iron;
            output.magnesium = magnesium;
            output.potassium = potassium;
            output.protein = protein;
            output.sodium = sodium;
            output.sugars = sugars;
            output.total_fat = total_fat;
            output.vitamin_A = vitamin_A;
            output.vitamin_B2 = vitamin_B2;
            output.vitamin_B3 = vitamin_B3;
            output.vitamin_C = vitamin_C;
            output.vitamin_D = vitamin_D;
            output.vitamin_E = vitamin_E;
            output.vitamin_K = vitamin_K;

            // adding every food info
            sumObject.calcium += calcium;
            sumObject.calories += calories;
            sumObject.carbohydrates += carbohydrates;
            sumObject.cholesterol += cholesterol;
            sumObject.dietary_fiber += dietary_fiber;
            sumObject.iron += iron;
            sumObject.magnesium += magnesium;
            sumObject.potassium += potassium;
            sumObject.protein += protein;
            sumObject.sodium += sodium;
            sumObject.sugars += sugars;
            sumObject.total_fat += total_fat;
            sumObject.vitamin_A += vitamin_A;
            sumObject.vitamin_B2 += vitamin_B2;
            sumObject.vitamin_B3 += vitamin_B3;
            sumObject.vitamin_C += vitamin_C;
            sumObject.vitamin_D += vitamin_D;
            sumObject.vitamin_E += vitamin_E;
            sumObject.vitamin_K += vitamin_K;

            outArr.push(output)
        })
        
    } catch (error) {
        console.error(error);
    }

    outArr.unshift(sumObject)
    return outArr
}