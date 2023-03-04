import PokeCard from "./components/PokeCard";
import { getPokemon } from "./api/resPokemon";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usePokeStore } from "./store/pokemon";
import PokeButton from "./components/PokeButton";
import { useEffect } from "react";

function App() {
  const id = usePokeStore((state) => state.id);
  const setId = usePokeStore((state) => state.setId);
  const setName = usePokeStore((state) => state.setName);
  const setHp = usePokeStore((state) => state.setHp);
  const setImage = usePokeStore((state) => state.setImage);
  const setStats = usePokeStore((state) => state.setStats);
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemon(id),
  });

  const handleNext = () => {
    setId(id + 1);
    queryClient.invalidateQueries({ queryKey: ["pokemon"] });
  };

  const handlePrev = () => {
    if (id <= 1) {
      return console.log("No hay mas pokemones");
    }
    setId(id - 1);
    queryClient.invalidateQueries({ queryKey: ["pokemon"] });
  };

  /* console.log(data); */

  useEffect(() => {
    if (data) {
      setName(data.name);
      setHp(data.stats[0].base_stat);
      setImage(data.sprites.front_default);
      setStats(data.stats)
    }
  }, [data, setName, setHp, setImage, setStats]);

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;

  return (
    <div className="text-white absolute inset-0 flex flex-col justify-center items-center">
      <PokeCard />
      <div className="flex gap-4 mt-2">
        <PokeButton onClick={handlePrev} title={"Prev"} />
        <PokeButton onClick={handleNext} title={"Next"} />
      </div>
    </div>
  );
}

export default App;
