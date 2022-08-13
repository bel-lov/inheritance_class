import Character from '../character';
import Bowerman from '../bowerman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
import Daemon from '../daemon';

test('instance of the class Character', () => {
  const person = new Character();
  expect(person).toEqual({
    health: 100, level: 1, attack: undefined, defence: undefined,
  });
});

test('instance of the class Bowerman', () => {
  const person = new Bowerman();
  expect(person).toEqual({
    health: 100, level: 1, attack: 25, defence: 25, type: 'Bowman',
  });
});

test('instance of the class Daemon', () => {
  const person = new Daemon();
  expect(person).toEqual({
    health: 100, level: 1, attack: 10, defence: 40, type: 'Daemon',
  });
});

test('instance of the class Magician', () => {
  const person = new Magician();
  expect(person).toEqual({
    health: 100, level: 1, attack: 10, defence: 40, type: 'Magician',
  });
});

test('instance of the class Swordsman', () => {
  const person = new Swordsman();
  expect(person).toEqual({
    health: 100, level: 1, attack: 40, defence: 10, type: 'Swordsman',
  });
});

test('instance of the class Undead', () => {
  const person = new Undead();
  expect(person).toEqual({
    health: 100, level: 1, attack: 25, defence: 25, type: 'Undead',
  });
});

test('instance of the class Zombie', () => {
  const person = new Zombie();
  expect(person).toEqual({
    health: 100, level: 1, attack: 40, defence: 10, type: 'Zombie',
  });
});

test('levelUp for class', () => {
  const person = new Bowerman();
  person.levelUp();
  expect(person).toEqual({
    health: 100, level: 2, attack: 48, defence: 12,
  });
});

test('error', () => {
  const person = new Bowerman();
  person.health = 0;
  expect(() => person.levelUp()).toThrow('Нельзя повысить level умершего!');
});
