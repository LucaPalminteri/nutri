import React from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { supabase } from '../supabaseClient';
import MealInfo from './MealInfo';

function Meal({meal,food}) {

  //TODO: fix last 3 hours of the day

  let mealDate = meal.created_at;

    const date = new Date(meal.created_at)

    let monthName = date.toLocaleString("en-US", { month: "long" });
    let dayName = date.toLocaleString("en-US", { weekday: "long" });
    let dayNumber = date.getDate();
    let hours = date.getHours() - 3;
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) minutes = '0' + hours;

    if(hours == -1 || hours == -2 || hours == -3) hours += 24


    const handleDelete = async () => {
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