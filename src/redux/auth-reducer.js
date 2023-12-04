import { stopSubmit } from "redux-form";
import { headerAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
        //  isAuth: true,
      };
    }

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const getAuthUserData = () => async (dispatch) => {
  let data = await headerAPI.getHeader();
  if (data.resultCode === 0) {
    let { userId, email, login } = data.data;
    dispatch(setAuthUserData(userId, email, login, true));
  }
  // this.props.setUsers(response.data.items);
};

// export const getAuthUserData = () => (dispatch) => {
//   return headerAPI.getHeader().then((data) => {
//     if (data.resultCode === 0) {
//       let { userId, email, login } = data.data;
//       dispatch(setAuthUserData(userId, email, login, true));
//     }
//     // this.props.setUsers(response.data.items);
//   });
// };

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await headerAPI.getLogin(email, password, rememberMe);

  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};
// export const login = (email, password, rememberMe) => {
//   return (dispatch) => {
//     headerAPI.getLogin(email, password, rememberMe).then((response) => {
//       if (response.data.resultCode === 0) {
//         dispatch(getAuthUserData());
//       } else {
//         let message =
//           response.data.messages.length > 0
//             ? response.data.messages[0]
//             : "Some error";
//         dispatch(stopSubmit("login", { _error: message }));
//       }
//     });
//   };
// };
export const logout = () => async (dispatch) => {
  let response = await headerAPI.getLogout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

// export const logout = () => {
//   return (dispatch) => {
//     headerAPI.getLogout().then((response) => {
//       if (response.data.resultCode === 0) {
//         dispatch(setAuthUserData(null, null, null, false));
//       }
//     });
//   };
// };

export default authReducer;
