import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  name: string | null
  hp:  number | string | null
  id: number,
  image: string,
  stats: [],
  type: string
};
type Actions = {
  setName: (user: string) => void
  setHp: (hp: number) => void
  setId: (id: number) => void
  setImage: (image: string) => void
  setStats: (stats: []) => void
  setType: (type: string) => void,
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
        image: '',
        setImage: (image: string) =>
        set((state) => ({
          image
        })),
        stats: [],
        setStats: (stats: []) =>
        set((state) => ({
          stats
        })),
        type: 'normal',
        setType: (type: string) =>
        set((state) => ({
          type
        })),
    }),
    {
      name: "pokemon",
    }
  )
);