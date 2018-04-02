import { log } from './ke-log'
import { createStore, combineReducers } from 'redux'

const SET_USER_NAME = 'setUserName'
const SET_USER_CITY = 'setUserCity'

/* Action Creators */
const setUserName = (name) => ({
  type: SET_USER_NAME,
  payload: {
    name: name
  }
})

const setUserCity = (city) => ({
  type: SET_USER_CITY,
  payload: {
    city: city
  }
})

/* Reducers */
const userNameReducer = (state = '', { type, payload }) => {
  switch (type) {
    case SET_USER_NAME:
      return {
        ...state,
        name: payload.name
      }
    default:
      return state
  }
}

const userCityReducer = (state = '', { type, payload }) => {
  // log('type', type)
  // log('payload', payload)
  switch (type) {
    case SET_USER_CITY:
    return {
      ...state,
      city: payload.city
    }
    default:
      return state
  }
}

/* combinedReducers() */
const rootReducer = combineReducers({
  userNameReducer,
  userCityReducer,
})

/* Create the store passing in the combined reducers */
const store = createStore(rootReducer)

/* dispatch */
store.dispatch(setUserName('Joe'))
store.dispatch(setUserCity('San Ramon'))

log('getStore-1', store.getState())

store.dispatch(setUserName('Bob'))

/* Change name to Bob */
log('getStore-2', store.getState())

/* Subscribe */
const callbackFunction = () => {
  log('callbackFunction', store.getState())
}
store.subscribe(callbackFunction)

/* change name to Ann */
store.dispatch(setUserName('Ann'))
