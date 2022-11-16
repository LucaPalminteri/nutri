import React from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { supabase } from '../supabaseClient';
import MealInfo from './MealInfo';
import { Props } from "../types/types"

const DB_TABLE: string = 'meals';

function Meal({ meal, foods }: Props) {

  const date: Date = new Date(meal.created_at)
  date.setHours(date.getHours() - 3);

  let monthName: string = date.toLocaleString("default", { month: "long" });
  let dayName: string = date.toLocaleString("default", { weekday: "long" });
  let dayNumber: number = date.getDate();
  let nHours: number = date.getHours();
  let nMinutes: number = date.getMinutes();
  let strMinutes: string = nMinutes.toString();
  let strHours: string = nHours.toString();
  if (nMinutes < 10) strMinutes = '0' + nMinutes.toString();
  if (nHours < 10) strHours = '0' + nHours.toString();


  const handleDelete = async () => {
    if (confirm(`Are you sure you want to delete the meal with id: ${meal.id}?`) == false) return;
    try {
      const { data, error } = await supabase.from(DB_TABLE).delete().eq('id', meal.id)
      location.reload()
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className='card'>
      <header className='text'>
        <h4>{meal.type}</h4>
        <button onClick={handleDelete}><DeleteOutlinedIcon fontSize='small' /></button>
      </header>
      <div className='divider'></div>
      {<MealInfo meal={meal} foods={foods} />}
      <div className='divider'></div>
      <footer className='text'>
        <span>{dayName} {dayNumber}, {monthName}</span>
        <span>{strHours}:{strMinutes} hs</span>
      </footer>
    </div>
  )
}

export default Meal