import Todo from "./Todo";

const Todos = ({todos, changeTodoCompletion, deleteTodo,editTodo}) => {
    return (
        <div className="todos-list">
            {todos.map((todo) => {
                return <Todo todo={todo} key={todo.id} changeTodoCompletion={changeTodoCompletion}
                             deleteTodo={deleteTodo} editTodo={editTodo}/>;
            })}
            {
                todos.length === 0 ? <h3 className='no-todos'>لا يوجد مهام حاليه ....</h3> : null
            }
        </div>
    );
};

export default Todos;
