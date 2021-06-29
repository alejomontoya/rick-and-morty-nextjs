import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
  
  const response = await fetch('https://rickandmortyapi.com/api/character')
  const data = await response.json()

  res.json(data)
}
