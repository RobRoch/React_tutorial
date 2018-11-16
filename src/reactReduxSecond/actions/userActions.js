import axios from 'axios';

export const FETCH_USERS_START = 'FETCH_USERS_START'
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'

export const fetchUsersStart = () => ({
  type: FETCH_USERS_START
})

export const fetchUsersError = (error) => ({
  type: FETCH_USERS_ERROR,
  payload : {error}
})

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload : {users}
})

// export const fetchUsers = (dispatch) => {
//   dispatch({type:"HAHAH"})
// }

export function fetchUsers() {
  return dispatch => {
    dispatch(fetchUsersStart());
    
    axios.get('https://api.github.com/users')
      .then((res) => {
        setTimeout(() => {
          dispatch(fetchUsersSuccess(res.data));
        }, 1);
      })
      .catch((err) => {
        dispatch(fetchUsersError(err));
      })
  };
}