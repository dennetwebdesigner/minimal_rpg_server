interface iAtt {
  attack: {
    min: number;
    max: number;
  };

  life: {
    current: number;
    max: number;
  };
}

export interface iAttrubutes {
  attack: {
    min: number;

    max: number;
  };

  life: {
    current: number;
    max: number;
  };

  setAttack(): { min: number; max: number };
  setLife(): { min: number; current: number };
}

class Attributes implements iAttrubutes {
  attack: {
    min: number;

    max: number;
  };

  life: {
    current: number;
    max: number;
  };

  constructor(data: iAtt) {
    this.attack = data.attack;
    this.life = data.life;
    this.life.current = this.life.max;

    if (!data.attack) {
    }
  }

  setAttack(): { min: number; max: number } {
    return { min: 1, max: 3 };
  }

  setLife(): { min: number; current: number } {
    return { min: 19, current: 19 };
  }
}
