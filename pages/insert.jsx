import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
import insertDB from '../functions/insertDB';
import { supabase } from '../supabaseClient'
function insert() {

    useEffect(() => {
        getFood()
    },[])

    const [foods, setFoods] = useState([])
    const [selectedFoods, setsSelectedFoods] = useState([])
    
    const description = useRef();

    const getFood = async () => {
        try {
            const {data,error} = await supabase.from("foods").select("*")
            setFoods(data);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(foods);


    const handleSubmit = async (e) => {
        e.preventDefault();
        return ;
        await insertDB(description.current.value)
        description.current.value = ""
    }

    const optionFoods = ()=> {
        return foods.sort((a, b) => {
            let fa = a.name.toLowerCase(),
                fb = b.name.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        })
        .map(food => {
            return (
                <option className='option-food' key={food.id} value={food.name}>{food.name}</option>
            )
        })
    }

    const selectFoods = () => {
        setsSelectedFoods(prev => prev.concat(<select className='select-food' key={Math.random()} ref={description}>
            <option value="default" selected>~~ food ~~</option>
            {optionFoods()}
        </select>)) 
    }

    console.log(selectedFoods);

  return (
    <div className='insert'>
        <form onSubmit={(e) => handleSubmit(e)}>
            {selectedFoods}
            <button onClick={()=> selectFoods()}>+</button>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default insert