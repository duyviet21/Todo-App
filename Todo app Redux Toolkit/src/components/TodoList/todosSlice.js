// const initState = [
//   { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
//   { id: 2, name: "Learn CSGO", completed: true, priority: "High" },
//   { id: 3, name: "Learn LOL", completed: false, priority: "Low" },
// ];

// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];

//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };

// export default todoListReducer;
// trên là code redux core

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  // nhận vào 1 obj
  name: "todoList",
  initialState: [
    { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
    { id: 2, name: "Learn CSGO", completed: true, priority: "High" },
    { id: 3, name: "Learn LOL", completed: false, priority: "Low" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },// tạo ra 1 action creators

    toggleTodoStatus: (state, action) => {
      const currentTodo = state.filter(todo => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    }
  }
});
