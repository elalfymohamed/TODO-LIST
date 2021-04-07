import {useState} from "react";
import Todos from "../components/todos/Todos";
import TodosForm from "../components/todos/TodosForm";

const TodoList = () => {
    // const initialState = [
    //     {id: 1, title: "شراء مستلزمات", done: false},
    //     {id: 2, title: "شراء مستلزمات", done: true},
    // ];
    const initialState = JSON.parse(localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : [];
    const [todos, setTodos] = useState(initialState);
    const [activeTodo, setActiveTodo] = useState({})
    //mode => add || not-done || edit
    const [mode, setMode] = useState('add')
    // localStorage
    const setToLocal = (todos) => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }
    // changeTodoCompletion
    const changeTodoCompletion = (id) => {
        const curTodos = [...todos];
        const newTodos = curTodos.map((el) => {
            if (el.id === id) {
                el.done = !el.done;
                return el;
            }
            return el;
        });
        setToLocal(newTodos)
        setTodos(newTodos);
    };
    // deleteTodo
    const deleteTodo = (id) => {
        const curTodos = [...todos];
        const newTodos = curTodos.filter((el) => el.id !== id);
        setToLocal(newTodos)
        setTodos(newTodos)
    }
    // addTodoHandler
    const addTodoHandler = (title) => {
        if (mode !== 'edit') {
            const newTodo = {
                id: Math.floor(Math.random() * 1000),
                title: title,
                done: false
            };
            const newTodos = [...todos, newTodo];
            setToLocal(newTodos)
            setTodos(newTodos)
        } else {
            const curTodos = [...todos];
            const newTodos = curTodos.map((el) => {
                if (el.id === activeTodo.id) {
                    el.title = title;
                    return el
                }
                return el
            })
            setToLocal(newTodos)
            setTodos(newTodos)
            setActiveTodo({})
            setMode('add')
        }
    }
    // showUncompleteHandle
    const showUncompleteHandle = () => {
        if (mode === 'not-done') {
            setMode('add')
        } else {
            setMode('not-done')
        }
    }
    let currentTodos = [...todos];
    if (mode === 'not-done') {
        currentTodos = currentTodos.filter((todo) => !todo.done)
    }
    // edieTodo
    const editTodo = (todo) => {
        setMode('edit')
        setActiveTodo(todo)
    }

    return (
        <main>
            <div className="container">
                <div className="todos">
                    <TodosForm addTodoHandler={addTodoHandler} showUncompleteHandle={showUncompleteHandle} mode={mode}
                               todos={mode !== 'edit' ?
                                   currentTodos : [activeTodo]}/>
                    <Todos todos={mode !== 'edit' ?
                        currentTodos : [activeTodo]} changeTodoCompletion={changeTodoCompletion} deleteTodo={deleteTodo}
                           editTodo={editTodo}/>
                </div>
            </div>
        </main>
    );
};

export default TodoList;
