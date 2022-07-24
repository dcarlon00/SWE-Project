const fuelForm = require('./fuelForm');
const moment= require('moment');
test('Test if the input and output are correct', () => 
{
    const total = 600 * 5;
    const [gallons, address, deliveryDate, pricePerGallon] = fuelForm(600,'6300 Londress Avenue','2022-01-15',5);
    expect(Number(gallons)).not.toBeNaN();
    expect(address).toBeDefined();
    expect(moment(deliveryDate,'YYYY-MM-DD', true).isValid()).toBeTruthy();
    expect(Number(pricePerGallon)).not.toBeNaN();
    expect(total).toEqual(gallons * pricePerGallon);
});