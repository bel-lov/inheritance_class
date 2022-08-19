import Bowerman from '../bowerman';

test('instance of the class Bowerman', () => {
  const person = new Bowerman('luba');
  expect(person).toEqual({
    health: 100, level: 1, attack: 25, defence: 25, type: 'Bowman', name: 'luba'
  });
});

test('levelUp for class', () => {
  const person = new Bowerman('luba');
  person.levelUp();
  expect(person).toEqual({
    health: 100, level: 2, attack: 30, defence: 30, name: 'luba', type: "Bowman"
  });
});
