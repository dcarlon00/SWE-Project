import Pricing from '../components/Pricing'

test('Test if the pricing values are valid', () => 
{
    const [ppGal,roundedTotal] = Pricing(50, 0 /*profile[0].state*/, 1)
    expect(ppGal).toEqual(1.71);
    expect(roundedTotal).toEqual(85.50);
});