import { UserRepository } from '../../../repositories/implementations/UserRepository';
import { UserCreateController } from './controller';
import { UserCreateService } from './service';

const userRepository = new UserRepository();
const userCreateService = new UserCreateService(userRepository);
export const userCreateController = new UserCreateController(userCreateService);
