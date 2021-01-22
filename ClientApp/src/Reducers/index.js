import { combineReducers } from 'redux';
import ClassifiedReducer from '../Reducers/ClassifiedReducer'
import VisibleReducer from '../Reducers/VisibleReducer'


export const Reducers = combineReducers({
    classified: ClassifiedReducer,
    visible: VisibleReducer
  });