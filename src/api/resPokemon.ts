import { AxiosResponse } from 'axios';
import { Pokemon } from '../interface/Pokemon';
import axios from './axiosConfig';


export const getPokemon = async (id: number) => {
  const {data}:AxiosResponse<Pokemon> = await axios.get(`/pokemon/${id}`);
  return data;
};
