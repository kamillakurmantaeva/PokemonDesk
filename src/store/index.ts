import { combineReducers } from 'redux';
import app from './app';
import pokemons, { IPokemonsInitialState } from './pokemons';

export interface IInitialState {
  pokemons: IPokemonsInitialState;
}

const createRootReducer = () => combineReducers({ app, pokemons });

export default createRootReducer;
