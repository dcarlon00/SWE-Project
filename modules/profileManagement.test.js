const profileManagement = require('./profileManagement');

test('Test if all form entries match the frontend restrictions', () => 
{
    const [name, address, address2, city, state, zipcode] = profileManagement('Pedro','6300 Londress Avenue','','Houston','TX','77500');

    expect(name.length).toBeLessThan(51);
    expect(address.length).toBeLessThan(101);
    expect(address2.length).toBeLessThan(101);
    expect(city.length).toBeLessThan(101);
    expect(state.length).toEqual(2);
    expect(zipcode.length).toBeLessThan(10);
    expect(zipcode.length).toBeGreaterThan(4);
});