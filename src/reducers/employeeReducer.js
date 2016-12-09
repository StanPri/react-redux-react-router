export default function employeeReducer(state = [], action){
  switch (action.type) {
    case 'CREATE_EMPLOYEE':
      debugger;
      return [...state,
        Object.assign({}, action.employeezzz)];

    default:
      return state;
  }
}
