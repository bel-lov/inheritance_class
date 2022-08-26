import Undead from '../undead';

test('instance of the class Undead', () => {
  const person = new Undead('luba');
  expect(person).toEqual({
    health: 100, level: 1, attack: 25, defence: 25, type: 'Undead', name: 'luba',
  });
});

test('levelUp for class', () => {
  const person = new Undead('luba');
  person.levelUp();
  expect(person).toEqual({
    health: 100, level: 2, attack: 30, defence: 30, name: 'luba', type: 'Undead',
  });
});
