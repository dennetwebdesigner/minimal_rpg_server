import { Wild_Cat } from '../Monsters/Wild_Cat';

export class Encantable_Forest {
  public name: string;

  public creatures: any[];
  constructor() {
    this.name = 'Floresta-Encantada';
    this.creatures = [];
    this.setCreatures();
  }

  setCreatures() {
    this.creatures = [new Wild_Cat({}).name];
  }
}
