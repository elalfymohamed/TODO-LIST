import { useState } from "react";
import PropTypes from "prop-types";

import FeatherIcon from "feather-icons-react";

const TodosForm = ({ addTodoHandler, showUncompleteHandle, mode, todos }) => {
  const [newTitle, setNewTitle] = useState("");
  const [editRender, setEditRender] = useState(false);

  if (mode === "edit" && !editRender) {
    setNewTitle(todos[0].title);
    setEditRender(true);
  }
  // newTodoHandler
  const newTodoHandler = (e) => {
    setNewTitle(e.target.value);
  };
  // addNewTodoHandler
  const addNewTodoHandler = () => {
    let nTitle = newTitle;
    setNewTitle("");
    setEditRender(false);
    return addTodoHandler(nTitle);
  };
  // btnString
  let btnString = "اضافة";
  if (mode === "edit") {
    btnString = "تعديل..";
  }
  return (
    <div className={"todos-form"}>
      <div
        className={
          mode === "not-done" ? "todos-form_icon active" : "todos-form_icon"
        }
        onClick={showUncompleteHandle}
      >
        <FeatherIcon icon="circle" />
      </div>
      <div className={"todos-form_form"}>
        <input
          type="text"
          placeholder="اضف مهمة جديدة ...."
          onChange={newTodoHandler}
          value={newTitle}
        />
      </div>
      <div className={"todos-form_submit"}>
        <button
          type="button"
          className={mode === "edit" ? "btn edit-btn" : "btn"}
          onClick={addNewTodoHandler}
          disabled={newTitle.trim() ? false : true}
        >
          {btnString}
        </button>
      </div>
    </div>
  );
};

TodosForm.propTypes = {
  addTodoHandler: PropTypes.func.isRequired,
  showUncompleteHandle: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,
};

export default TodosForm;
