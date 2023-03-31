import { iCharacterrepository } from '../../../repositories/iCharacterRepository';
import { setNewError } from '../../Error/CustomErrors';
import { NOT_FOUND_CONTENT } from './../../Error/CustomErrors';
import { CharacterRemoveDTO } from './dto';

export class CharacterRemoveService {
  private repository: iCharacterrepository;
  constructor(repository: iCharacterrepository) {
    this.repository = repository;
  }

  async excute({ id }: CharacterRemoveDTO) {
    if (!id) throw new Error(setNewError(NOT_FOUND_CONTENT, ''));

    return await this.repository.remove({ id });
  }
}
