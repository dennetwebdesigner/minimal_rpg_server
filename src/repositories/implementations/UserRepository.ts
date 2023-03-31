import { database } from '../../database';
import { iUserRepository } from '../iUsersRepository';

export class UserRepository implements iUserRepository {
  async findByUsername({ username }: { username: string }): Promise<any> {
    return await database.user.findFirst({ where: { username } });
  }

  async store(data: { username: string; password: string }): Promise<any> {
    return await database.user.create({ data });
  }
}
