import { log } from './ke-log'


const SET_USER_NAME = 'setUserName'

/* An action creator is a function that returns an action
*/
const setUserNameV1 = () => ({
  type: SET_USER_NAME,
})
/* Call action */
log('setUserNameV1', setUserNameV1())

/*
    An action may or may not have other properties, but often
    has properties with data to pass to reducers. The data is typically in
    a property called 'payload', but that property name
    is completely up to the developer.
*/
const setUserNameV2 = (name) => ({
  type: SET_USER_NAME,
  payload: {
    name: name
  }
})
/* Call action */
log('setUserNameV2(bob)', setUserNameV2('Bob'))
