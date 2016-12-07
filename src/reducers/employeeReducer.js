export function employeeReducer(state = [], action){
  switch (action.type) {
    case 'CREATE_EMPLOYEE':
      return [...state, Object.assign({}, action.employee)];

    default:
      return state;
  }
}
