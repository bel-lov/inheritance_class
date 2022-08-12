import Character from './character';

export default class Magician extends Character {
  constructor(name, level, health) {
    super(name, level, health);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}
