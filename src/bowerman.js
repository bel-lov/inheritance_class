import Character from './character';

export default class Bowerman extends Character {
constructor(name, level, health) {
    super(name, level, health);
    this.type = 'Bowerman';
    this.attack = 25;
    this.defence = 25;
}
}
