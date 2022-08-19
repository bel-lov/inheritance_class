import Zombie from '../zombie';

test('instance of the class Zombie', () => {
  const person = new Zombie('luba');
  expect(person).toEqual({
    health: 100, level: 1, attack: 40, defence: 10, type: 'Zombie', name: 'luba'
  });
});

test('levelUp for class', () => {
  const person = new Zombie('luba');
  person.levelUp();
  expect(person).toEqual({
    health: 100, level: 2, attack: 48, defence: 12, name: 'luba', type: "Zombie"
  });
});