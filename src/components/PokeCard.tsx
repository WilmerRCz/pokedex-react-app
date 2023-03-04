import React from 'react'
import PokeDescription from './PokeDescription';
import PokeImage from './PokeImage';

function PokeCard() {
  return (
    <div className='w-72 h-1/2 px-6 py-7 rounded bg-slate-500'>
      <PokeImage/>
      <PokeDescription/>
    </div>
  )
}

export default PokeCard