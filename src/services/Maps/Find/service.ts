import { NOT_FOUND_CONTENT, setNewError } from '../../Error/CustomErrors';

export class MapFindService {
  maps: any[];
  constructor(maps: any[]) {
    this.maps = maps;
  }

  execute() {
    if (this.maps.length <= 0) throw new Error(setNewError(NOT_FOUND_CONTENT, 'Nenhum Mapa Encontrado'));

    return this.maps;
  }
}
