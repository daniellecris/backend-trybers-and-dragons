abstract class Race {
  protected readonly _name: string;
  protected readonly _dexterity: number;

  constructor(name: string, dexteriry: number) {
    this._name = name;
    this._dexterity = dexteriry;
  }
  
  get name(): string {
    return this.name;
  }
    
  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances():number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;