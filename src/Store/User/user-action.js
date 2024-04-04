import axios from "axios";
import { userActions } from "./user-slice";

//handle user signup
export const getSignUp = (user) => async (dispatch) => {
  try {
    dispatch(userActions.getSignupRequest());
    const { data } = await axios.post("/api/v1/rent/user/signup", user);
    dispatch(userActions.getSignupDetails(data.user));
  } catch (error) {
    dispatch(userActions.getError(error.response.data.message));
  }
};

// handle user login
export const getLogIn = (user) => async (dispatch) => {
    try {
      dispatch(userActions.getLoginRequest());
      const { data } = await axios.post("/api/v1/rent/user/login", user);
      dispatch(userActions.getLoginDetails(data.user));
    } catch (error) {
      dispatch(userActions.getError(error.response.data.message));
    }
};
//get current user info
export const currentUser = () => async (dispatch) => {
    try {
      dispatch(userActions.getCurrentUserRequest());
      const { data } = await axios.get("/api/v1/rent/user/me");
      dispatch(userActions.getCurrentUser(data.user));
    } catch (error) {
      dispatch(userActions.getError(error.response.data.message));
    }
};

// to update user info
export const updateUser = (updateUser) => async (dispatch) => {
    try {
      dispatch(userActions.getUpdateUserRequest());
      await axios.patch("/api/v1/rent/user/updateMe", updateUser);
      const { data } = await axios.get("/api/v1/rent/user/me");
      dispatch(userActions.getCurrentUser(data.user));
    } catch (error) {
      dispatch(userActions.getError(error.response.data.message));
    }
};

//to handle forgot pass
export const forgotPassword = (email) => async (dispatch) => {
    try {
      await axios.post("/api/v1/rent/user/forgotPassword", { email });
    } catch (error) {
      dispatch(userActions.getError(error.response.data.message));
    }
};

//pass reset
export const resetPassword = (repassword, token) => async (dispatch) => {
    try {
      await axios.patch(`/api/v1/rent/user/resetPassword/${token}`, repassword);
    } catch (error) {
      dispatch(userActions.getError(error.response.data.message));
    }
};

//pass update
export const updatePassword = (passwords) => async (dispatch) => {
    try {
      dispatch(userActions.getPasswordRequest());
      await axios.patch("/api/v1/rent/user/updateMyPassword", passwords);
      const { data } = await axios.get("/api/v1/rent/user/me");
      dispatch(userActions.getPasswordSuccess(true));
    } catch (error) {
      dispatch(userActions.getError(error.response.data.message));
    }
};

// user logout
export const Logout = () => async (dispatch) => {
    try {
      await axios.get("/api/v1/rent/user/logout");
      dispatch(userActions.getLogout(null));
    } catch (error) {
      dispatch(userActions.getError(error));
    }
};