const fuelFormTest = require('./fuelFormTest');
const moment= require('moment');
test('Test if the form values are valid', () => 
{
    const [gallons, address, deliveryDate, pricePerGallon, total] = fuelFormTest(600,'6300 Londress Avenue','2022-01-15',5,7);
    expect(Number(gallons)).not.toBeNaN();
    expect(address).toBeDefined();
    expect(moment(deliveryDate,'YYYY-MM-DD', true).isValid()).toBeTruthy();
    expect(Number(pricePerGallon)).not.toBeNaN();
    expect(total);
});