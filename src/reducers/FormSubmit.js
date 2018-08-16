import { FORM_SUBMIT } from '../constants/ActionTypes';

const initialState = {
  userData: '',
  isAuthenticated: false,
};

const formSubmitData = (state = initialState, action) => {
  console.log(action.payload && JSON.stringify(action.payload.value));
  switch (action.type) {
    case FORM_SUBMIT:
      localStorage.setItem('LoginReducer', JSON.stringify(action.payload.value));
      return { ...state, userData: action.payload.value, isAuthenticated: true, };
    default:
      return state;
  }
};

export default formSubmitData;
