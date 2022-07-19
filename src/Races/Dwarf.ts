import Race from './Race';

class Dwarf extends Race {
  public life: number;
  static count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.life = 80;
    Dwarf.count += 1;
  }

  get maxLifePoints(): number {
    return this.life;
  }

  static createdRacesInstances(): number {
    return this.count;
  }
}

export default Dwarf;