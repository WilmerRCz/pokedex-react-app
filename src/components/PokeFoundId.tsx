import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { usePokeStore } from "../store/pokemon";
import {
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

function PokeFoundId() {
  const setId = usePokeStore((state) => state.setId);
  const [inputValue, setInputValue] = useState(0);

  const handleSubmitId = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setId(inputValue);
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputNumber = parseInt(event.target.value);
    if (!isNaN(inputNumber) && inputNumber >= 0 && inputNumber <= 1010) {
      setInputValue(inputNumber);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitId} className="my-2 flex gap-4">
        <input
          type="number"
          placeholder="546"
          id="inputId"
          name="inputId"
          value={inputValue}
          onChange={handleInputChange}
          className="text-black rounded-full px-2 border-2 focus:border-yellow-500 outline-none"
        />
        <button className="border-2 border-yellow-500 rounded-full px-2 ">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
        </button>
      </form>
    </div>
  );
}

export default PokeFoundId;
