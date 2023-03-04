import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  name: string | null
  hp:  number | string | null
  id: number
};
type Actions = {
  setName: (user: string) => void,
  setHp: (hp: number) => void
  setId: (id: number) => void
};

export const usePokeStore = create(
  persist<State & Actions>(
    (set) => ({
      name: '',
      setName: (name: string) =>
        set((state) => ({
          name
        })),
        hp: 0,
        setHp: (hp: number) =>
        set((state) => ({
          hp
        })),
        id: 1,
        setId: (id: number) =>
        set((state) => ({
          id
        })),

    }),
    {
      name: "pokemon",
    }
  )
);