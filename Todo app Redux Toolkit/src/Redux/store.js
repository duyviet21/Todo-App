// import { createStore } from 'redux';
// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composedEnhensers = composeWithDevTools();
// const store = createStore(rootReducer, composedEnhensers );

// export default store; đây là import redux core

import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from '../components/Filters/filtersSlice';
import todoListReducer from '../components/TodoList/todosSlice'; 

const store = configureStore({
  // nhận vào 1 obj
  reducer: {
    filters: filtersReducer,
    todoList: todoListReducer,
  },
});

export default store;
