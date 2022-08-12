import Character from './character';

export default class Zombie extends Character {
  constructor(name, level, health) {
    super(name, level, health);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}
