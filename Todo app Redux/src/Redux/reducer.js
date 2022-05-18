import filtersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/TodosSlice";
import { combineReducers } from "redux";
// const rootReducer = (state = {}, action) => {
//   // action là 1 obj
//   // {
//   //     type: 'todoList/addTodo'
//   //     payload: {id: 5, name: 'Learn steam', completed: false, priority: 'Low'}
//   // }
//   return {
//     filters: filtersReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer,
});

export default rootReducer;
