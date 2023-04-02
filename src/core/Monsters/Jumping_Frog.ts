interface JumpingFrogDTO {
  life?: { max: number; current: number };
  attack?: { max: number; min: number };
  defense_rate?: number;
  level?: number;
}

export class Jumping_Frog {
  public name: string;
  public life: { max: number; current: number };
  public attack: { max: number; min: number };
  public defense_rate: number;
  public level: number;

  constructor(data: JumpingFrogDTO) {
    this.name = 'Sapo Pulador';
    this.life = data.life ? data.life : { max: 20, current: 20 };
    this.attack = data.attack ? data.attack : { max: 3, min: 1 };
    this.defense_rate = data.defense_rate ? data.defense_rate : 3;
    this.level = data.level ? data.level : 1;
  }
  reward() {
    return { exp: Math.floor(Math.random() * (8 - 1 + 1) + 1) };
  }
}
