import { User } from '../models/User'
import {
  IFindOneUserArgs,
  ILoginUserArgs,
  IRegisterUserArgs,
  IUserDocument
} from '../types/User'
import validateDuplicate from '../utils/validateDuplicate'
import validateEmail from '../utils/validateEmail'
import validatePassword from '../utils/validatePassword'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from 'config'
import { IContext } from '../types/Context'

export class UserService {
  async findOne (args: IFindOneUserArgs): Promise<IUserDocument> {
    const user = await User.findOne(args)
    if (!user) throw new Error('user not found')
    return user
  }

  async register (args: IRegisterUserArgs): Promise<IUserDocument> {
    try {
      const preparedUserData = await this.validateAndPrepareUserData(args)

      const createdUser = await User.create(preparedUserData)

      return createdUser
    } catch (err: any) {
      throw new Error(err)
    }
  }

  async loginByPassword (args: ILoginUserArgs, res: IContext['res']): Promise<IUserDocument> {
    try {
      const {
        email,
        password
      } = args

      const user = await User.findOne({ email: email.toLowerCase() })

      if (!user) throw new Error('user not found')
      if (!(await bcrypt.compare(password, user.password))) throw new Error('invalid password')

      const userToken = jwt.sign(user.toJSON(), config.get('jwt.secret'), { expiresIn: '7 days' })
      res.cookie('userToken', userToken, {
        httpOnly: true,
        sameSite: 'none',
        secure: true
      })

      return user
    } catch (err: any) {
      throw new Error(err)
    }
  }

  async logout (res: IContext['res']): Promise<boolean> {
    res.clearCookie('userToken', {
      httpOnly: true,
      sameSite: 'none',
      secure: true
    })
    return true
  }

  async checkUserToken (req: IContext['req'], res: IContext['res']): Promise<IUserDocument | boolean> {
    try {
      const user: any = jwt.verify(req.cookies.userToken, config.get('jwt.secret'))
      return user
    } catch (err) {
      res.clearCookie('userToken')
      return false
    }
  }

  async validateAndPrepareUserData (args: IRegisterUserArgs) {
    const {
      name,
      email,
      password
    } = args

    await Promise.all([
      validateDuplicate({ name }),
      validateDuplicate({ email }),
      validateEmail(email),
      validatePassword(password)
    ])

    const lowercaseEmail = email.toLowerCase()

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    return {
      ...args,
      email: lowercaseEmail,
      password: hashedPassword
    }
  }
}
