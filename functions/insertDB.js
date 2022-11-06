import { supabase } from '../supabaseClient'

export default async function insertDB(funDescription) {

    let date = new Date()
    let type = ""
    let hours = date.getHours()

    if (hours == -1 || hours == -2 || hours == -3) type = "Dinner"
    if(hours >= 0 && hours < 10) type = "Breakfast"
    else if(hours >= 10 && hours < 12) type = "Breakfast Snack"
    else if(hours >= 12 && hours < 14) type = "Lunch"
    else if(hours >= 14 && hours < 16) type = "Afterlunch Snack"
    else if(hours >= 16 && hours < 19) type = "Afternoon Snack"
    else if(hours >= 19 && hours < 21) type = "Night Snack"
    else if(hours >= 21 && hours < 24) type = "Dinner"

    try {
        const { data, error} = await supabase.from('meals').insert({created_at: new Date(),description:funDescription,type}) 
    } catch (error) {
        alert(error)
    }
}