import React, { use, useRef } from 'react'
import { supabase } from '../supabaseClient'

function insert() {

    const description = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let date = new Date()

        let type = ""
        let hours = date.getHours()

        if(hours >= 0 && hours < 10) type = "Breakfast"
        if(hours >= 10 && hours < 12) type = "Breakfast Snack"
        if(hours >= 12 && hours < 14) type = "Lunch"
        if(hours >= 14 && hours < 16) type = "Afterlunch Snack"
        if(hours >= 16 && hours < 19) type = "Afternoon Snack"
        if(hours >= 19 && hours < 21) type = "Night Snack"
        if(hours >= 21 && hours < 24) type = "Dinner"

        try {
            const { data, error} = await supabase.from('meals').insert({
                created_at: new Date(),
                description:description.current.value,
                type
            }) 
            description.current.value = ""
        } catch (error) {
            alert(error)
        }
    }
  return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <textarea ref={description}></textarea>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default insert