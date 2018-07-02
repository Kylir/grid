import { createStore } from 'redux';
import { toggleCell } from './reducers';

export const store = createStore(toggleCell);