import { combineReducers } from 'redux';
import listReducer from './listReducer';
import categoryReducer from './categoryReducer';
import detailReducer from './detailReducer';

const reducer = combineReducers({
  category: categoryReducer,
  list: listReducer,
  detail: detailReducer,
})

export default reducer;