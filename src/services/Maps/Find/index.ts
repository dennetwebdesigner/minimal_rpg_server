import Maps from '../../../core/Maps';
import { MapFindController } from './controller';
import { MapFindService } from './service';

const mapFindService = new MapFindService(Maps);
export const mapFindController = new MapFindController(mapFindService);
