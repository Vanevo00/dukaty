import { merge } from 'lodash'
import loginByPassword from './User/loginByPassword'
import registerUser from './User/registerUser'

export default merge(
  registerUser,
  loginByPassword
)
