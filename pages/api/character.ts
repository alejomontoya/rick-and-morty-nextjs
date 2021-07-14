import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
  const { page = 1 } = req.query
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
  const data = await response.json()

  res.json(data)
}
