import Character from './character';

export default class Swordsman extends Character {
  constructor(name, level, health) {
    super(name, level, health);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}
