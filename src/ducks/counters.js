//ACTIONS
export const ADD_COUNTER = 'ADD_COUNTER';
export const DELETE_COUNTER = 'DELETE_COUNTER';
export const CHANGE_COUNTER = 'CHANGE_COUNTER';
export const RESET_ALL_COUNTERS = 'RESET_ALL_COUNTERS';
export const CHANGE_EVERY = 'INCREASE_EVERY_EVEN_COUNT';

//ACTION CREATORS
export const ACTION_ADD_COUNTER = value => ({
  type: ADD_COUNTER,
  payload: value,
});

export const ACTION_DELETE_COUNTER = value => ({
  type: DELETE_COUNTER,
  payload: value,
});

export const ACTION_CHANGE_COUNTER = value => ({
  type: CHANGE_COUNTER,
  payload: value,
});

export const ACTION_RESET_ALL_COUNTERS = value => ({
  type: RESET_ALL_COUNTERS,
  payload: value,
});

export const ACTION_CHANGE_EVERY = value => ({
  type: CHANGE_EVERY,
  payload: value,
});

//REDUCERS
export const initialCountersState = {
  counters: [],
};

export const counters = (prevState = initialCountersState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...prevState,
        counters: [...prevState.counters, action.payload],
      };
    case DELETE_COUNTER:
      return {
        ...prevState,
        counters: prevState.counters.filter((item) => item.id !== Number(action.payload)),
      }
    case CHANGE_COUNTER: 
      return {
        ...prevState,
        counters: prevState.counters.map((item) => {
          return (
            Number(item.id) === Number(action.payload.id) ? action.payload : item
          )
        })
      }
    case RESET_ALL_COUNTERS: 
      return {
        ...prevState,
        counters: action.payload === true ? [] : prevState.counters,
      }
    case CHANGE_EVERY: 
      return {
        ...prevState,
        counters: action.payload,
      }
    default: 
      return {
        ...prevState,
      };
  }
}