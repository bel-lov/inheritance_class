export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    // this.name = name;
    // this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
    
    if (!types.includes(type)) {
      throw new Error('Тип указан некорректно!');
    }
    else{
      this.type = type;
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть строкой от 2 до 10 символов');
    }
    else{
      this.name = name;
    }
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить level умершего!');
    } else {
      this.level += 1;
      this.attack += ((this.attack / 100) * 20);
      this.defence += ((this.defence / 100) * 20);
      this.health = 100;
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - (this.defence / 100));
    }
  }
}
