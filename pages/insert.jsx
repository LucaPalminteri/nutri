import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient'
function insert() {

    useEffect(() => {
        getFood()
    },[])

    const [foods, setFoods] = useState([])
    const [selectedFoods, setSelectedFoods] = useState([])
    const [infoFoods, setInfoFoods] = useState([])
    
    const nameFood = useRef();
    const amountFood = useRef();

    const getFood = async () => {
        try {
            const {data,error} = await supabase.from("foods").select("*")
            setFoods(data);
        } catch (error) {
            console.error(error);
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        // validations

        // if(infoFoods.some(food => food.name == "default")) {
        //     alert("Some food info fields are empty")
        //     return ;
        // }

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

        let meal_info = JSON.stringify([...infoFoods,{name:nameFood.current.value,amount:amountFood.current.value}])
        
        try {
            const { data, error} = await supabase.from('meals').insert({created_at: new Date(),type,meal_info}) 
            setSelectedFoods([])
            setInfoFoods([])
        } catch (error) {
            alert(error)
        }

        return ;
    }

    const optionFoods = ()=> {
        return foods.sort((a, b) => {
            let fa = a.name.toLowerCase();
            let fb = b.name.toLowerCase();
            return (fa < fb) ? -1 : (fa > fb) ? 1 : 0;
        })
        .map(food => <option className='option-food' key={food.id} value={food.name}>{food.name}</option>)
    }

    const selectFoods = () => {
        if (selectedFoods.length > 0) setInfoFoods(prev => prev.concat({name:nameFood.current.value,amount:amountFood.current.value}));
        setSelectedFoods(prev => prev.concat(
            <div className='row-food' key={Math.random()}>
                <select className='select-food' ref={nameFood}>
                    <option value="default" defaultValue={true}>~~ food ~~</option>
                    {optionFoods()}
                </select>
                <input className='select-food' type="number" min={0} step="any" ref={amountFood}/>
            </div>
        )) 
    }

    
    
  return (
    <div className='insert'>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className='label-container'>
                <label>Food Name:</label>
                <label>Amount (g/L):</label>
            </div>
            {selectedFoods}
            <button type='button' className='trapezoid-down' onClick={()=> selectFoods()}></button>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default insert