import { merge } from 'lodash'
import checkUserToken from './User/checkUserToken'
import loginByEmail from './User/loginByEmail'
import logout from './User/logout'
import registerUser from './User/registerUser'
import activateUser from './UserActivation/activateUser'

export default merge(
  registerUser,
  loginByEmail,
  checkUserToken,
  activateUser,
  logout
)
