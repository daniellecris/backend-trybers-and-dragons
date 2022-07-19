import Race from './Race';

class Elf extends Race {
  public life: number;
  static count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.life = 99;
    Elf.count += 1;
  }

  public get maxLifePoints(): number {
    return this.life;
  }

  static createdRacesInstances(): number {
    return this.count;
  }
}

export default Elf;