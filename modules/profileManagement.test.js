const profileManagement = require('./profileManagement');

test('get the input', () => 
{

  const [name, address, address2, city, state, zipcode] = profileManagement('Pedro','6300 Londress Avenue', '','Houston','TX','77500');

  expect(name).not.toBeNull();
  expect(address).not.toBeNull();
  expect(address2).not.toBeNull();
  expect(city).not.toBeNull();
  expect(state).not.toBeNull();
  expect(zipcode).not.toBeNull();
});