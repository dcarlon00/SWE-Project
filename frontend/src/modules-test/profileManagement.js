function profileManagement(name, address, address2 ,city, state, zipcode) 
{
    if (arguments.length > 0)
    {
        return [name, address, address2, city, state, zipcode];
    }
}
module.exports = profileManagement;