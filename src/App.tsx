import PokeCard from "./components/PokeCard";
import { getPokemon } from "./api/resPokemon";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usePokeStore } from "./store/pokemon";
import PokeButton from "./components/PokeButton";
import { useEffect } from "react";
import PokeId from "./components/PokeId";
import {
  faArrowRight,
  faArrowLeft,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PokeNotFound from "./components/PokeNotFound";
import PokeFoundId from "./components/PokeFoundId";


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
    if (id >= 1010) {
      return alert("No hay mas pokemones");
    }
    setId(id + 1);
    queryClient.invalidateQueries({ queryKey: ["pokemon"] });
  };

  const handlePrev = () => {
    if (id <= 1) {
      return alert("No hay mas pokemones");
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

  if (isLoading)
    return (
      <div className="text-white absolute inset-0 flex flex-col justify-center items-center">
        <FontAwesomeIcon
          icon={faSpinner}
          size="3x"
          style={{
            transform: "rotate(0deg)",
            animation: "spin 1s linear infinite",
          }}
        />
      </div>
    );
  else if (isError)
    return <PokeNotFound/>

  return (
    <div className="text-white absolute inset-0 flex flex-col justify-center items-center">
      <PokeId />
      <PokeFoundId/>
      <PokeCard />
      <div className="flex gap-8 mt-2">
        <PokeButton onClick={handlePrev} icon={faArrowLeft} />
        <PokeButton onClick={handleNext} icon={faArrowRight} />
      </div>
    </div>
  );
}

export default App;
