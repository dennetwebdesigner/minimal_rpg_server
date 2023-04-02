import { Tongue_Lizard } from '../Monsters/Tongue_Lizard';

export class Perdition_Desert {
  public name: string;

  public creatures: any[];
  constructor() {
    this.name = 'Deserto da Perdição';
    this.creatures = [];
    this.setCreatures();
  }

  setCreatures() {
    this.creatures = [new Tongue_Lizard({}).name];
  }
}
