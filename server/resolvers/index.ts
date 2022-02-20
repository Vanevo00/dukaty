import { merge } from 'lodash'
import checkUserToken from './User/checkUserToken'
import loginByEmail from './User/loginByEmail'
import logout from './User/logout'
import registerUser from './User/registerUser'

export default merge(
  registerUser,
  loginByEmail,
  checkUserToken,
  logout
)
