import Magician from '../magician';

test('instance of the class Magician', () => {
  const person = new Magician('luba');
  expect(person).toEqual({
    health: 100, level: 1, attack: 10, defence: 40, type: 'Magician', name: 'luba',
  });
});

test('levelUp for class', () => {
  const person = new Magician('luba');
  person.levelUp();
  expect(person).toEqual({
    health: 100, level: 2, attack: 12, defence: 48, name: 'luba', type: 'Magician',
  });
});
