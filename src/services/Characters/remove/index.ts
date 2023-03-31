import { Characterrepository } from '../../../repositories/implementations/CharacterRepository';
import { CharacterRemoveController } from './controller';
import { CharacterRemoveService } from './service';

const characterrepository = new Characterrepository();
const characterRemoveService = new CharacterRemoveService(characterrepository);
export const characterRemoveController = new CharacterRemoveController(characterRemoveService);
