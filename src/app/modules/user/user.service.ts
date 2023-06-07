import config from '../../../config/index'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id = await generateUserId()
  user.id = id
  // default password
  if (!user.password) {
    user.password = config.user_default_pass as string
  }

  const createdUser = await User.create(user)

  if (!createUser) {
    throw new Error('Failed to create user!')
  }
  return createdUser
}

export const UserService = {
  createUser,
}
