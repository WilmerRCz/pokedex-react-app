import React from 'react'
import { usePokeStore } from '../store/pokemon'

function PokeId() {
  const id = usePokeStore((state) => state.id)

  const structuringId = () => {
    if(id > 0 && id <= 9){
      return <span className="text-md">#00{id}</span>
    }else if(id > 9 && id <= 99){
      return <span className="text-md">#0{id}</span>
    }else {
      return <span className="text-md">#{id}</span>
    }
  } 
  return (
    <h1 className='text-4xl font-bold'>{structuringId()}</h1>
  )
}

export default PokeId