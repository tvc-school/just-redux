import { log } from './ke-log'


const SET_USER_NAME = 'setUserName'

// An action has a 'type' property
const setUserName = {
  type: SET_USER_NAME,
}
/* call action */
log('setUserName', setUserName)
