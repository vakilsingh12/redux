import { createStore } from "redux";
import cakeReducers from "./cakes/cakereducer";
const store=createStore(cakeReducers)
export default store