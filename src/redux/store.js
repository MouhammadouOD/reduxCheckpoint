import { createStore } from "../../../movie/movieapp/node_modules/redux";
import taskreducer from "./reducer";


export const store = createStore(taskreducer);