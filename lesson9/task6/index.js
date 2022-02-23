const getPeople = (obj) => {
  let result = Object.values(obj);
  let and = result.flat()
  let and2 = and.map(el => el.name)
  console.log(and2);

  return and2 ;
};

getPeople(
  (rooms = {
    room1: [{ name: 'Jack' }, { name: 'Dan' }],
    room2: [{ name: 'Jack' }, { name: 'Ann' }],
  })
);
