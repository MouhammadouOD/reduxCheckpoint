import { ADD_TO_DO, EDIT } from './type';


export function addtodo(newtodo){
    return {
        type: ADD_TO_DO,
        payload: newtodo
    }
}

export function edittodo([id , description,isDone]){
    return {
        type: EDIT,
        payload: [id , description,isDone]
    }
}

