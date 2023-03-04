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
  const queryClient = useQueryClient();
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemon"],
    queryFn: () => getPokemon(id)
  });


  const handleNext = () => {
    setId(id + 1);
    queryClient.invalidateQueries({ queryKey: ["pokemon"] });
  };

  const handlePrev = () => {
    setId(id - 1);
    queryClient.invalidateQueries({ queryKey: ["pokemon"] });
  };

  useEffect(() => {
    if (data) {
      setName(data.name)
      setHp(data.stats[0].base_stat)
    }
  }, [data, setName, setHp]);

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;

  return (
    <div className="text-white absolute inset-0 flex flex-col justify-center items-center">
      <PokeCard />
      <PokeButton onClick={handleNext} title={"Next"}/>
      <PokeButton onClick={handlePrev} title={"Prev"}/>
    </div>
  );
}

export default App;
