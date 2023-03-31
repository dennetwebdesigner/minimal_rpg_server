import { Characterrepository } from '../../../repositories/implementations/CharacterRepository';
import { CharacterSelectController } from './controller';
import { CharacterSelectService } from './service';

const characterrepository = new Characterrepository();
const characterSelectService = new CharacterSelectService(characterrepository);
export const characterSelectController = new CharacterSelectController(characterSelectService);
