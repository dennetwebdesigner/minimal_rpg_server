import { Wild_Cat } from '../Monsters/Wild_Cat';

export class Angry_Swap {
  public name: string;

  public creatures: any[];
  constructor() {
    this.name = 'Pantano Raivoso';
    this.creatures = [];
    this.setCreatures();
  }

  setCreatures() {
    this.creatures = [new Wild_Cat({}).name];
  }
}
