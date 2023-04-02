import { Jumping_Frog } from '../Monsters/Jumping_Frog';

export class Angry_Swap {
  public name: string;

  public creatures: any[];
  constructor() {
    this.name = 'Pantano Raivoso';
    this.creatures = [];
    this.setCreatures();
  }

  setCreatures() {
    this.creatures = [new Jumping_Frog({}).name];
  }
}
