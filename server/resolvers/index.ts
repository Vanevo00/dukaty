import { merge } from 'lodash'
import checkUserToken from './User/checkUserToken'
import loginByPassword from './User/loginByPassword'
import logout from './User/logout'
import registerUser from './User/registerUser'

export default merge(
  registerUser,
  loginByPassword,
  checkUserToken,
  logout
)
