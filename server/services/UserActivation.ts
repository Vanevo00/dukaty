import { v4 as uuid } from 'uuid'
import nodemailer from 'nodemailer'
import { IUserDocument } from '../types/User'
import { IUserActivation, IUserActivationArgs } from '../types/UserActivation'
import { UserActivation } from '../models/UserActivation'
import config from 'config'
import { generateHtmlActivationEmail, generatePlainActivationEmail } from '../mailer/activationEmail'
import jwt from 'jsonwebtoken'
import { IContext } from '../types/Context'

export class UserActivationService {
  async findOne (args: IUserActivationArgs): Promise<IUserActivation | null> {
    try {
      return await UserActivation
        .findOne(args)
        .populate('user')
    } catch (err: any) {
      throw new Error(err)
    }
  }

  async activate (args: IUserActivationArgs, res: IContext['res']): Promise<IUserDocument> {
    const activation = await this.findOne(args)
    if (!activation) throw new Error('activation code not found')
    if (activation.user.activated === true) throw new Error('user already activated')

    activation.user.activated = true

    const userToken = jwt.sign(activation.user.toJSON(), config.get('jwt.secret'), { expiresIn: '7 days' })
    res.cookie('userToken', userToken, {
      httpOnly: true,
      sameSite: 'none',
      secure: true
    })

    return activation.user.save()
  }

  async create (user: IUserDocument): Promise<void> {
    try {
      const preparedActivation = this.prepareActivation(user)

      const createdActivation = await UserActivation.create(preparedActivation)

      await this.sendActivationEmail(user.email, createdActivation.activationCode)
    } catch (err: any) {
      throw new Error(err)
    }
  }

  prepareActivation (user: IUserDocument) {
    const activationCode = uuid()

    return {
      user,
      activationCode
    }
  }

  async sendActivationEmail (userEmail: string, activationCode: string) {
    try {
      const transporter = nodemailer.createTransport({
        host: config.get('nodemailer.smtp'),
        auth: {
          user: config.get('nodemailer.user'),
          pass: config.get('nodemailer.password')
        }
      })

      await transporter.sendMail({
        from: config.get('nodemailer.user'),
        to: userEmail,
        subject: 'Duk??ty.cz - aktiva??n?? k??d',
        text: generatePlainActivationEmail(activationCode),
        html: generateHtmlActivationEmail(activationCode)
      })

      console.log(`Email with activation code sent to: ${userEmail}`)
    } catch (err) {
      console.log(err)
    }
  }
}
