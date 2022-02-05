import { merge } from 'lodash'
import checkUserToken from './User/checkUserToken'
import loginByPassword from './User/loginByPassword'
import registerUser from './User/registerUser'

export default merge(
  registerUser,
  loginByPassword,
  checkUserToken
)
