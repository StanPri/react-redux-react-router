import * as types from "../actions/actionTypes";

export default function employeeReducer(state = [], action){

  debugger;

  switch (action.type) {
    case types.CREATE_EMPLOYEE:
      return [...state,
        Object.assign({}, action.employeezzz)];

    default:
      return state;
  }
}
