import { iUserRepository } from '../../repositories/iUsersRepository';
import { password_validate } from '../Crypt';
import { setNewError, NOT_FOUND_CONTENT, BAD_REQUEST } from '../Error/CustomErrors';
import { tokenCreate } from '../token/create';
import { AuthDTO } from './AuthDTO';

export class AuthCreateService {
  private repository: iUserRepository;
  constructor(repository: iUserRepository) {
    this.repository = repository;
  }

  async execute(data: AuthDTO): Promise<{ token: string; rule: string }> {
    const { username, password } = data;

    if (!username || !password) throw new Error(setNewError(NOT_FOUND_CONTENT, 'Esta faltando dados!'));

    const user = await this.repository.findByUsername({ username });

    if (!user) throw new Error(setNewError(BAD_REQUEST, 'Está conta não existe!'));
    const pass_validate = await password_validate(password, user.password);
    if (!pass_validate) throw new Error(setNewError(BAD_REQUEST, 'Dados não são validos!'));

    const token = await tokenCreate(user.id);

    let response = !user.RulesOnUser[0].rule.name ? { token, rule: 'player' } : { token, rule: user.RulesOnUser[0].rule.name };

    return response;
  }
}
