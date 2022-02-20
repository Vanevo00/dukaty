import { ILoginUserArgs, IUserDocument } from '../../types/User'
import { UserService } from '../../services/User'
import { IContext } from '../../types/Context'

const userService = new UserService()

export default {
  Mutation: {
    loginByEmail: async (_: undefined, args: ILoginUserArgs, { res }: IContext): Promise<IUserDocument> => {
      return await userService.loginByEmail(args, res)
    }
  }
}
