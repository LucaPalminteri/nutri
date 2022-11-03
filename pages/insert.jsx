import React from 'react'
import { supabase } from '../supabaseClient'

function insert() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data, error} = await supabase.from('meals').insert({
                created_at: new Date(),
                description:""
            }) 
        } catch (error) {
            alert(error)
        }
    }
  return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <textarea></textarea>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default insert