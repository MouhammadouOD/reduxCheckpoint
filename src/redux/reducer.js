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
  ], 
  nextId:5
};

const taskreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
        nextId: state.nextId+1
      };
      
    case EDIT:
      var copy = state.todo;
      const newtodo = {id :action.payload[0] ,description :action.payload[1] , isDone : action.payload[2] }
      copy.splice(Number(action.payload[0])-1 , 1  ,newtodo )
      

      
      return {
        ...state,
        todo: copy
      };

    default:
      return state;
  }
};

export default taskreducer;
