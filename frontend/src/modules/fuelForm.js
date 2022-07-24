function fuelForm(gallons, address, deliveryDate ,pricePerGallon) 
{
    console.log("The FuelForm function works")
    var total = pricePerGallon * gallons;
    if (arguments.length > 0)
    {
        return [gallons, address, deliveryDate, pricePerGallon, total];
    }
    // Add forwarding for database on the next assignment
}
module.exports = fuelForm;





