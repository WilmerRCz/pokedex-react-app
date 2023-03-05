import PokeCard from "./components/PokeCard";
import { getPokemon } from "./api/resPokemon";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usePokeStore } from "./store/pokemon";
import PokeButton from "./components/PokeButton";
import { useEffect } from "react";
import PokeId from "./components/PokeId";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function App() {
  const id = usePokeStore((state) => state.id);
  const setId = usePokeStore((state) => state.setId);
  const setName = usePokeStore((state) => state.setName);
  const setHp = usePokeStore((state) => state.setHp);
  const setImage = usePokeStore((state) => state.setImage);
  const setStats = usePokeStore((state) => state.setStats);
  const setType = usePokeStore((state) => state.setType);
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemon(id),
  });

  const handleNext = () => {
    if (id >= 1279) {
      return console.log("No hay mas pokemones");
    }
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

  // console.log(data);

  useEffect(() => {
    if (data) {
      setName(data.name);
      setHp(data.stats[0].base_stat);
      setImage(data.sprites.front_default);
      setStats(data.stats);
      setType(data.types[0].type.name);
    }
  }, [data, setName, setHp, setImage, setStats, setType]);

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;

  return (
    <div className="text-white absolute inset-0 flex flex-col justify-center items-center">
      <PokeId />
      <PokeCard />
      <div className="flex gap-8 mt-2">
        <PokeButton onClick={handlePrev} icon={faArrowLeft}/>
        <PokeButton onClick={handleNext} icon={faArrowRight} />
      </div>
    </div>
  );
}

export default App;
