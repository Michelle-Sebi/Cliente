import React from 'react'
import { useSelector } from 'react-redux'
import { selectScore } from '../pokemonSlice'

export default function Score() {
    const score = useSelector(selectScore)
  return <>
    <div id="score">
        Score: {score}
    </div>
  </>
}
