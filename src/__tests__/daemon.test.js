import Daemon from '../daemon';

test('instance of the class Daemon', () => {
  const person = new Daemon('luba');
  expect(person).toEqual({
    health: 100, level: 1, attack: 10, defence: 40, type: 'Daemon', name: 'luba',
  });
});

test('levelUp for class', () => {
  const person = new Daemon('luba');
  person.levelUp();
  expect(person).toEqual({
    health: 100, level: 2, attack: 12, defence: 48, name: 'luba', type: 'Daemon',
  });
});
