abstract class Race {
  private _name: string;
  private _dexterity: number;

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