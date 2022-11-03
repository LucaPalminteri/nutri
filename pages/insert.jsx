import React, { use, useRef } from 'react'
import { supabase } from '../supabaseClient'

function insert() {

    const description = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data, error} = await supabase.from('meals').insert({
                created_at: new Date(),
                description:description.current.value
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