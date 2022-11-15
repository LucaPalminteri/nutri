import { PostgrestQueryBuilder } from "@supabase/postgrest-js";
import { supabase } from "../supabaseClient";
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

export async function insertDayInfoFood(obj:FoodInfoOut)
{
    console.log("inserting in database");
    console.log(obj);

    try {
        const {data, error} = await supabase.from("day_food_info").select()

        console.log(data);
        
    } catch (error) {
        
    }
    return
}