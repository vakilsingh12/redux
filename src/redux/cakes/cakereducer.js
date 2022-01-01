import { BUY_CAKE } from "./cakeTypes"

const initialState={
  numofCakes:100
}

const cakeReducers = (state=initialState,action) => {
  switch(action.type){
    case BUY_CAKE:
      return{
        ...state,
        numofCakes:state.numofCakes+100
      }
    default:
      return state
  }
}
export default cakeReducers