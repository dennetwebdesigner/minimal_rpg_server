import { iCharacterrepository } from '../../../repositories/iCharacterRepository';
import { iCharSelectDTO } from './CharSelectDTO';

export class CharacterSelectService {
  private repository: iCharacterrepository;
  constructor(repository: iCharacterrepository) {
    this.repository = repository;
  }

  async execute({ user_id }: iCharSelectDTO) {
    const chars = await this.repository.findByUser({ user_id });
    return chars;
  }
}
