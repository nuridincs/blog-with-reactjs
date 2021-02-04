const redux = require('redux');
const createStore = redux.createStore;

const inititalState = {
  value: 0,
  age: 17,
};

// reducer
const rootReducer = (state = inititalState, action) => {
  switch (action.type) {
    case 'ADD_AGE':
      return {
        ...state,
        age: state.age + 2,
      };
    case 'CHANGE_VALUE':
      return {
        ...state,
        value: action.newValue,
      };
    default:
      return state;
  }
};

// store
const store = createStore(rootReducer);
console.log('store', store.getState());

// subscription
store.subscribe(() => {
  console.log('store subscribe', store.getState());
});

// dispatching action
store.dispatch({ type: 'ADD_AGE' });
store.dispatch({ type: 'CHANGE_VALUE', newValue: 12 });
