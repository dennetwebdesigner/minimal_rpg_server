import { UserRepository } from '../../repositories/implementations/UserRepository';
import { AuthCreateController } from './AuthCreateController';
import { AuthCreateService } from './AuthCreateService';


const userRepository = new UserRepository();
const authCreateService = new AuthCreateService(userRepository);
export const authCreateController = new AuthCreateController(authCreateService);
