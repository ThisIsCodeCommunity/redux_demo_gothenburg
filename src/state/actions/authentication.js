import axios from 'axios';

export const setEmail = (email) => ({
  type: 'SET_EMAIL',
  payload: email
})

export const setPassword = (password) => ({
  type: 'SET_PASSWORD',
  payload: password
})

export const asyncLogin = (email, password) => {
  return dispatch => {
    axios.post('https://reqres.in/api/login', {
      email: email,
      password: password
    })
      .then((response) => {
        dispatch(login(response.data.token))
      })
  }
}

const login = (token) => ({
  type: 'AUTHENTICATE', 
  payload: token
})