import PokeDescription from './PokeDescription';
import PokeImage from './PokeImage';
import PokeName from './PokeName';

function PokeCard() {
  return (
    <div className='w-72 h-1/2 px-2 rounded bg-slate-500'>
      <PokeName/>
      <PokeImage/>
      <PokeDescription/>
    </div>
  )
}

export default PokeCard