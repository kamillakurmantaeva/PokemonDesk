import React from 'react';
import useData from '../../hook/getData';
import { PokemonsRequest } from '../../interface/pokemons';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<PokemonsRequest>('getPokemon', { id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>This is pokemon id equal {data?.name}</div>;
};

export default Pokemon;
