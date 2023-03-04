import axios from './axiosConfig';


export const getPokemon = async (id?: number) => {
  if (id === undefined) {
    id = 1;
  }
  const {data} = await axios.get(`/pokemon/${id}`);
  return data;
};
