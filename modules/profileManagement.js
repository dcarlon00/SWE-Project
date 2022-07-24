function profileManagement(name, address, address2 ,city, state, zipcode) 
{
    if (arguments.length > 0)
    {
        return [name, address, address2, city, state, zipcode];
    }
    // Add forwarding for database on the next assignment
}
module.exports = profileManagement;