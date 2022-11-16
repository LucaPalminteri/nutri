import { PostgrestResponse } from "@supabase/supabase-js";
import { supabase } from "../supabaseClient";
import { FoodInfoOut } from "../types/types"

const DB_TABLE: string = 'day_food_info';

export async function insertDayInfoFood(obj: FoodInfoOut) {
    const date = new Date()
    date.setHours(date.getHours() - 3);

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    let queryDate = `${month}/${day}/${year}`

    try {
        const { data, error }: PostgrestResponse<FoodInfoOut> = await supabase.from(DB_TABLE).select().eq('date', queryDate)

        if (data?.length == 0) {
            //insert
            try {
                const res = await supabase.from(DB_TABLE).insert({
                    date: queryDate,
                    calcium: obj.calcium,
                    calories: obj.calories,
                    carbohydrates: obj.carbohydrates,
                    cholesterol: obj.cholesterol,
                    dietary_fiber: obj.dietary_fiber,
                    iron: obj.iron,
                    magnesium: obj.magnesium,
                    potassium: obj.potassium,
                    protein: obj.protein,
                    sodium: obj.sodium,
                    sugars: obj.sugars,
                    total_fat: obj.total_fat,
                    vitamin_A: obj.vitamin_A,
                    vitamin_B2: obj.vitamin_B2,
                    vitamin_B3: obj.vitamin_B3,
                    vitamin_C: obj.vitamin_C,
                    vitamin_D: obj.vitamin_D,
                    vitamin_E: obj.vitamin_E,
                    vitamin_K: obj.vitamin_K,
                    water: obj.water
                })

            } catch (error) {
                console.error(error)
            }
        }

        else {
            //sum
            let foodsInfo: FoodInfoOut;
            if (data != null) {
                foodsInfo = data[0]
                try {
                    const res = await supabase.from(DB_TABLE).update({
                        calcium: foodsInfo.calcium + obj.calcium,
                        calories: foodsInfo.calories + obj.calories,
                        carbohydrates: foodsInfo.carbohydrates + obj.carbohydrates,
                        cholesterol: foodsInfo.cholesterol + obj.cholesterol,
                        dietary_fiber: foodsInfo.dietary_fiber + obj.dietary_fiber,
                        iron: foodsInfo.iron + obj.iron,
                        magnesium: foodsInfo.magnesium + obj.magnesium,
                        potassium: foodsInfo.potassium + obj.potassium,
                        protein: foodsInfo.protein + obj.protein,
                        sodium: foodsInfo.sodium + obj.sodium,
                        sugars: foodsInfo.sugars + obj.sugars,
                        total_fat: foodsInfo.total_fat + obj.total_fat,
                        vitamin_A: foodsInfo.vitamin_A + obj.vitamin_A,
                        vitamin_B2: foodsInfo.vitamin_B2 + obj.vitamin_B2,
                        vitamin_B3: foodsInfo.vitamin_B3 + obj.vitamin_B3,
                        vitamin_C: foodsInfo.vitamin_C + obj.vitamin_C,
                        vitamin_D: foodsInfo.vitamin_D + obj.vitamin_D,
                        vitamin_E: foodsInfo.vitamin_E + obj.vitamin_E,
                        vitamin_K: foodsInfo.vitamin_K + obj.vitamin_K,
                        water: foodsInfo.water + obj.water
                    })
                        .match({ date: queryDate })

                } catch (error) {
                    console.error(error)
                }
            }
        }

    } catch (error) {
        console.error(error)
    }
    return
}