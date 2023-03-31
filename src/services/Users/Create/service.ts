import { iUserRepository } from '../../../repositories/iUsersRepository';
import { setNewError } from '../../Error/CustomErrors';
import { password_hash } from './../../Crypt/index';
import { iUserCreateDTO } from './userCreateDTO';

export class UserCreateService {
  private repository: iUserRepository;
  constructor(repository: iUserRepository) {
    this.repository = repository;
  }

  async execute(data: iUserCreateDTO) {
    const { username, password } = data;

    if (!username || !password) throw new Error(setNewError(400, 'Dados incompletos.'));

    const hasUser = await this.repository.findByUsername({ username });

    if (hasUser) throw new Error(setNewError(400, 'Esta Conta já esta em uso!'));

    const hash = await password_hash(password);

    const user = await this.repository.store({ username, password: hash });

    return user;
  }
}
