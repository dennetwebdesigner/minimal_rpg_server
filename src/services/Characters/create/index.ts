import { Characterrepository } from '../../../repositories/implementations/CharacterRepository';
import { CharacterCreateController } from './controller';
import { CharacterCreateService } from './service';

const characterrepository = new Characterrepository();
const characterCreateService = new CharacterCreateService(characterrepository);
export const characterCreateController = new CharacterCreateController(characterCreateService);
