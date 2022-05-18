
export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}
// action creators là 1 function

export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}

export const statusFilterChange = (status) => {
    return {
        type: 'filters/statusFilterChange',
        payload: status
    }
}

export const priorityFilterChange = (priorities) => {
    console.log('in action : ',priorities);
    return {
        type: 'filters/prioritiesFilterChange',
        payload: priorities
    }
}

export const toggleTodoStatus = (todoId) => {
    return {
        type: 'todoList/toggleTodoStatus',
        // không cần payload chỉ cần true hoặc false
        payload: todoId // để biết todo nào 
    }
}
