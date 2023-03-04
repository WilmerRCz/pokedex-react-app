import PokeCard from './components/PokeCard'
import { getPokemon } from './api/resPokemon';
import { Pokemon } from './interface/Pokemon';


function App() {
  
  async function fetchPokemon() {
    try {
      const pokemon: Pokemon = await getPokemon(99);
      console.log(pokemon); // debería mostrar el id del Pokémon en la consola
      console.log(pokemon.name); // debería mostrar el nombre del Pokémon en la consola
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchPokemon();

  return (
    <div className="text-white absolute inset-0 flex flex-col justify-center items-center">
      <PokeCard/>
    </div>
  )
}

export default App
