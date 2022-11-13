import React, { useRef } from 'react'
import insertDB from '../functions/insertDB';

function insert() {

    const description = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await insertDB(description.current.value)
        description.current.value = ""
    }

    const handleCustomInsert = async (n) => {
        switch(n){
            case 1: await insertDB("1 Cappuccino Cup")
                break;
            case 2: await insertDB("1 Glass of Water")
                break;
            case 3: await insertDB("1 Handful of Nuts")
                break;
            case 4: await insertDB("4 toast with Penaut Butter")
                break;
        }

        alert('OK')
    }

  return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <textarea ref={description}></textarea>
            <button type='submit'>Submit</button>
        </form>
        <div className='btn-container'>
            <button className='shortcut-btn' onClick={() => handleCustomInsert(1)}>Cappuccino</button>
            <button className='shortcut-btn' onClick={() => handleCustomInsert(2)}>Glass of Water</button>
            <button className='shortcut-btn' onClick={() => handleCustomInsert(3)}>Handful of Nuts</button>
            <button className='shortcut-btn' onClick={() => handleCustomInsert(4)}>4 toast with Penaut Butter</button>
        </div>
    </div>
  )
}

export default insert