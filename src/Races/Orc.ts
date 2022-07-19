import Race from './Race';

class Orc extends Race {
  public life: number;
  static count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.life = 74;
    Orc.count += 1;
  }

  public get maxLifePoints(): number {
    return this.life;
  }

  static createdRacesInstances(): number {
    return this.count;
  }
}

export default Orc;