import Character from '../character';
import Bowerman from '../bowerman';

test('error', () => {
  const person = new Bowerman('luba', 'Bowman');
  person.health = 0;
  expect(() => person.levelUp()).toThrow(new Error('Нельзя повысить level умершего!'));
});

test('error name', () => {
  const person = () => new Character('l', 'Bowman');
  expect(person).toThrow(new Error('Имя должно быть строкой от 2 до 10 символов'));
});

test('error name', () => {
  const person = () => new Character('lubavushka123', 'Bowman');
  expect(person).toThrow(new Error('Имя должно быть строкой от 2 до 10 символов'));
});
test('error type', () => {
  const person = () => new Character('luba', 'Boooman');
  expect(person).toThrow(new Error('Тип указан некорректно!'));
});

test('damage', () => {
  const person = new Bowerman('luba', 'Bowman');
  person.damage(20);
  expect(person).toEqual({
    health: 85, level: 1, attack: 25, defence: 25, name: 'luba', type: 'Bowman',
  });
});
