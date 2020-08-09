import UserActionTypes from './user.type';

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const SignInSuccess = () => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
});

export const SignInFailure = () => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});
