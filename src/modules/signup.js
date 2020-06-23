const SAVE_USER = 'signup/SAVE_USER';

export const saveUser = (user) => ({
  type: SAVE_USER,
  user,
});

const initialState = {
  first_name: '',
  post_code: null,
  email_address: '',
  phone_number: null,
};

export default function signup(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        first_name: action.user.first_name,
        post_code: action.user.post_code,
        email_address: action.user.email_address,
        phone_number: action.user.phone_number,
      };
    default:
      return state;
  }
}
