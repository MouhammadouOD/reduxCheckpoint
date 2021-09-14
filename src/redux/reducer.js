import { ADD_TO_DO, EDIT } from "./type";

const initialState = {
  todo: [
    {
      id: 1,
      description: "Take Breakfast",
      isDone: "no",
    },

    {
      id: 2,
      description: "Training",
      isDone: "no",
    },

    {
      id: 3,
      description: "Learn courses",
      isDone: "yes",
    },

    {
      id: 4,
      description: "Complete a meet",
      isDone: "no",
    }
  ]
};

const taskreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
      
    case EDIT:
      const selecttodo = state.todo.find((item) => item.id === action.id);
      selecttodo.description = action.description;
      selecttodo.isDone = action.isDone;

      return {
        ...state,
        todo: [...state.todo[action.id], selecttodo],
      };

    default:
      return state;
  }
};

export default taskreducer;
