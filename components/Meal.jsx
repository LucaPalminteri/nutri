import React from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { supabase } from '../supabaseClient';
import MealInfo from './MealInfo';

function Meal({meal,food}) {

    const date = new Date(meal.created_at)
    date.setHours(date.getHours() - 3);

    let monthName = date.toLocaleString("default", { month: "long" });
    let dayName = date.toLocaleString("default", { weekday: "long" });
    let dayNumber = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) minutes = '0' + hours;


    const handleDelete = async () => {
      if(confirm(`Are you sure you want to delete the meal with id: ${meal.id}?`) == false) return ;
      try {
        const { data, error} = await supabase.from('meals').delete().eq('id',meal.id)
        location.reload()
    } catch (error) {
        alert(error)
    }
    }
    
  return (
    <div className='card'>
        <header className='text'>
            <h4>{meal.type}</h4>
            <button onClick={handleDelete}><DeleteOutlinedIcon fontSize='small'/></button>
        </header>
        <div className='divider'></div>
        {<MealInfo meal={meal} foods={food}/>}
        <div className='divider'></div>
        <footer className='text'>
            <span>{dayName} {dayNumber}, {monthName}</span>
            <span>{hours}:{minutes} hs</span>
        </footer>
    </div>
  )
}

export default Meal