import Character from './character';

export default class Undead extends Character {
  constructor(name, level, health) {
    super(name, level, health);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}
