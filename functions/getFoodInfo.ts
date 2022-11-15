import { supabase } from "../supabaseClient";

type FoodMealInfo = {
    name:string,
    amount:string
}

const TABLE = 'foods';

export async function getFoodInfo(arrayInfo:string) {

    let aux:Array<FoodMealInfo> = JSON.parse(arrayInfo)
    let query:string = ''
    let output:Object = {}

    // create the query for all items in the insert section
    aux.forEach((element:any) => query += `name.eq.${element.name},`);
    query = query.slice(0,-1);

    try {
        const { data, error } = await supabase.from(TABLE).select().or(query);
        console.log(error);
        console.log(data);

        // retrive the items in the insert with all of its information

        data?.forEach((element:any, index:number) => {
            // iterating for every full detailed food to create the output
            let factor = parseFloat(aux[index].amount)/element.portion
            console.log(factor);
        })
        
    } catch (error) {
        console.error(error);
    }

}