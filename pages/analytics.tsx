import React, { useRef } from 'react'
import { supabase } from '../supabaseClient';
import AnalyticCard from "../components/AnalyticCard"
import {useState} from "react"
import { Food, FoodMealInfo, Props } from "../types/types"

const DB_TABLE: string = 'day_food_info';

function analytics() {

  const [foodInfo, setFoodInfo] = useState()
  
  const selectedDate = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();


      if (selectedDate.current != null) {
        console.log(selectedDate.current.value);
        let qDay:string = selectedDate.current.value.slice(8)
        let qMonth:string = selectedDate.current.value.slice(5,7)
        let qYear:string = selectedDate.current.value.slice(0,4)

        let queryDate = `${qMonth}/${qDay}/${qYear}`
      

      try {
        const { data, error } = await supabase.from(DB_TABLE).select().eq('date',queryDate)
        
        if(data != null) {
          setFoodInfo(data[0]);
        }
      } catch (error) {
          alert(error)
      }
    }
    }


  return (
    <div className='analytics'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="date" ref={selectedDate}/>
        <button>Get Info</button>
      </form>
      {foodInfo != undefined  && <AnalyticCard foodInfo={foodInfo} />}
    </div>
  )
}

export default analytics