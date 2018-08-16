export const loadState = () => {
  try {
    const LoginReducer = localStorage.getItem('LoginReducer');
    if(LoginReducer === null) {
      return undefined;
    }
    return JSON.parse(LoginReducer);
  } catch (err) {
    return undefined;
  }
}

export const saveState = (value) => {
  localStorage.setItem('LoginReducer', value);
}
