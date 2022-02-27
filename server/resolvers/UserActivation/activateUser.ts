import { IUserDocument } from '../../types/User'
import { UserActivationService } from '../../services/UserActivation'
import { IUserActivationArgs } from '../../types/UserActivation'
import { IContext } from '../../types/Context'

const userActivationService = new UserActivationService()

export default {
  Mutation: {
    activateUser: async (_: undefined, args: IUserActivationArgs, { res }: IContext): Promise<IUserDocument> => await userActivationService.activate(args, res)
  }
}
