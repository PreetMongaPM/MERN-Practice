import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  items: [],
  addItem: () => {},
  deleteItem: () => {},
});

const formatDateToDDMMYYYY = (isoDate) => {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-");
  return `${day}/${month}/${year}`;
};

const todoListReducer = (currToDoItems, action) => {
  let newTodoItems = currToDoItems;

  if (action.type === "NEW_ITEM") {
    const dueDate = formatDateToDDMMYYYY(action.payload.dueDate);
    const todoItem = action.payload.todoItem;

    newTodoItems = [...currToDoItems, { todoItem, dueDate }];
  } else if (action.type === "DELETE_ITEM") {
    let itemIndex = action.payload.itemIndex;
    newTodoItems = currToDoItems.filter((item, index) => {
      return index !== itemIndex;
    });
  }

  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  //As a children we get the content overthere
  const [todoItems, dispatchToDoItems] = useReducer(todoListReducer, []);
  const addTaskOnClick = ({ todoItem, dueDate }) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        todoItem: todoItem,
        dueDate: dueDate,
      },
    };
    dispatchToDoItems(newItemAction);
    //we are sending an action object;
  };

  const handleDeleteOnCLick = (index) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemIndex: index,
      },
    };
    dispatchToDoItems(deleteItemAction);

    return (
      <TodoItemsContext.Provider
        value={{
          items: todoItems,
          addItem: addTaskOnClick,
          deleteItem: handleDeleteOnCLick,
        }}
      >
        {children}
      </TodoItemsContext.Provider>
    );
  };
};

export default TodoItemsContextProvider;
