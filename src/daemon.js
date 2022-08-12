import Character from './character';

export default class Daemon extends Character {
  constructor(name, level, health) {
    super(name, level, health);
    this.type = 'Daemon';
    this.attack = 10;
    this.deffence = 40;
  }
}
