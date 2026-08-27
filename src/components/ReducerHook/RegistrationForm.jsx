import React, { useReducer } from 'react';

const initialState = { name: '', email: '', step: 1, errors: {} };

function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'NEXT_STEP':
      return { ...state, step: state.step + 1 };
    case 'SET_ERRORS':
      return { ...state, errors: action.payload };
    case 'RESET':
      return initialState;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export function RegistrationForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <form>
      <input 
        value={state.name} 
        onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'name', value: e.target.value })} 
      />
      <button type="button" onClick={() => dispatch({ type: 'NEXT_STEP' })}>
        Next Step (Currently on: {state.step})
      </button>
    </form>
  );
}
