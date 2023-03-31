import { iCharacterrepository } from '../../../repositories/iCharacterRepository';
import { NOT_FOUND_CONTENT, setNewError, BAD_REQUEST } from './../../Error/CustomErrors';
import { characterCreateDTO } from './characterCreateDTO';

export class CharacterCreateService {
  private repository: iCharacterrepository;
  constructor(repository: iCharacterrepository) {
    this.repository = repository;
  }

  async execute(data: characterCreateDTO) {
    const { name, id } = data;

    if (!name || !id) throw new Error(setNewError(NOT_FOUND_CONTENT, 'Dados incompletos!'));

    const hasChar = await this.repository.findByName({ name });

    if (hasChar) throw new Error(setNewError(BAD_REQUEST, 'Este nome já esta em uso!'));

    return await this.repository.store({ id, name });
  }
}
