import { A, usePath } from 'hookrouter';
import React, { useState } from 'react';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';
import { IPokemons, PokemonsRequest } from '../../interface/pokemons';

import s from './Pokedex.module.scss';

interface IQuery {
  name?: string;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});
  const debouncedValue = useDebounce(searchValue, 500);
  const path = usePath();

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <>
      <Layout className={s.root}>
        <Heading size="l" className={s.title}>
          {!isLoading && data && data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div>
          <input type="text" value={searchValue} onChange={handleSearchChange} />
        </div>
        <div>
          {!isLoading &&
            data &&
            data.pokemons.map((item: PokemonsRequest) => (
              <A href={`${path}/${item.id}`}>
                <PokemonCard
                  name={item.name}
                  attack={item.stats.attack}
                  defense={item.stats.defense}
                  types={item.types.map((el) => (
                    <span>{el}</span>
                  ))}
                  img={item.img}
                />
              </A>
            ))}
        </div>
      </Layout>
    </>
  );
};

export default PokedexPage;
