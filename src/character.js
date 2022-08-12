export class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
    if (this.type !== 'Bowman' || 'Swordsman' || 'Magician' || 'Daemon' || 'Undead' || 'Zombie') {
      throw new Error('Тип указан некорректно!');
    }
    if (this.name.length < 2 && this.name.length > 10) {
      throw new Error('Недопустимая длинна имя игрока');
    }
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('нельзя повысить левел умершего');
    } else {
      this.level += 1;
      this.attack = this.attack / 100 * 20;
      this.defence = this.defence / 100 * 20;
      this.health = 100;
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
