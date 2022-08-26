import Character from '../character';
import Bowerman from '../bowerman';

test('instance of the class Character', () => {
  const person = new Character('luba');
  expect(person).toEqual({
    health: 100, level: 1, attack: undefined, defence: undefined,
  });
});

test('error', () => {
  const person = new Bowerman('luba');
  person.health = 0;
  expect(() => person.levelUp()).toThrow('Нельзя повысить level умершего!');
});

test('error name', () => {
  const person = () => new Character('l');
  expect(person).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('error name', () => {
  const person = () => new Character('lubavushka123');
  expect(person).toThrow(('Имя должно быть строкой от 2 до 10 символов'));
});

test('damage', () => {
  const person = new Bowerman('luba');
  expect(person.damage(20)).toEqual({
    health: 86, level: 2, attack: 30, defence: 30, name: 'luba', type: 'Bowman',
  });
});
