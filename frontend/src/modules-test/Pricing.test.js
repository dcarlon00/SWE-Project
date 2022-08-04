const  Pricing = require('../components/Pricing')

test('Test if the pricing values are valid', () => 
{
    var result = Pricing(50, 'TX', 1)
    expect(result.ppGal).toEqual(1.71);
    expect(result.roundedTotal).toEqual("85.50");
});