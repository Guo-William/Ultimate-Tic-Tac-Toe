import { combineReducers } from 'redux';
import sectorReducer from './sectorReducer';

const app = combineReducers({
    sectorReducer
});

export default app;
