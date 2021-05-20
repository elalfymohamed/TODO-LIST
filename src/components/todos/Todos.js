import PropTypes from "prop-types";

import Todo from "./Todo";

const Todos = ({ todos, changeTodoCompletion, deleteTodo, editTodo }) => {
  return (
    <div className="todos-list">
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            changeTodoCompletion={changeTodoCompletion}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
      {todos.length === 0 ? (
        <h3 className="no-todos">لا يوجد مهام حاليه ....</h3>
      ) : null}
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  changeTodoCompletion: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default Todos;
