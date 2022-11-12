import React from 'react'
import axios from 'axios'

function foods() {


    const URL = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=KL7fsBCTBNFBIMBs73k2AEkBDvkDNgf8BBE0eVaf`

    const getData = async () => {
        const {data} = await axios.get(URL)
        console.log(data);
    }

    getData()


  return (
    <div>foods</div>
  )
}

export default foods