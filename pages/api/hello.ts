// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const URL = `https://api.nal.usda.gov/fdc/v1/foods/search?query=milk&dataType=Survey%20%28FNDDS%29&pageSize=10&pageNumber=2&sortBy=dataType.keyword&sortOrder=asc&api_key=KL7fsBCTBNFBIMBs73k2AEkBDvkDNgf8BBE0eVaf`

    const getData = async () => {
        const {data} = await axios.get(URL)
        console.log(data);
        res.status(200).json(data)
    }

    getData()
  //res.status(200).json({ name: 'John Doe' })
}
