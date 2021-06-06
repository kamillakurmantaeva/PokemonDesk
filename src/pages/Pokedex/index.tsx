import cn from 'classnames';
import { A, usePath } from 'hookrouter';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import { configEndpoint } from '../../config';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';
import { IPokemons, PokemonsRequest } from '../../interface/pokemons';
import { getPokemonsTypes, getPokemonsTypesLoading, getTypesAction } from '../../store/pokemons';

import s from './Pokedex.module.scss';

interface IQuery {
  limit: number;
  name?: string;
}

const PokedexPage = () => {
  const dispatch = useDispatch();
  const types = useSelector(getPokemonsTypes);
  const isTypesLoading = useSelector(getPokemonsTypesLoading);
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({ limit: 12 });
  const debouncedValue = useDebounce(searchValue, 500);
  const path = usePath();

  const { data, isLoading, isError } = useData<IPokemons>(configEndpoint.getPokemon, query, [debouncedValue]);

  useEffect(() => {
    dispatch(getTypesAction());
  }, [dispatch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };

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
        <div>{isTypesLoading ? <Loader /> : types?.map((item) => <div>{item}</div>)}</div>
        <div className={cn(s.wrapper, { [s.isLoading]: isLoading })}>
          {isLoading && <Loader />}
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
