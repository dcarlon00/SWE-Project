// This gets all users.
// GET /api/users


const getUsers = (req, res) => {
    res.status(200).json({ message: 'Get User' })
}

const setUsers = (req, res) => {
    console.log(req.body.text)

    res.status(200).json({ message: 'Set User' })
}

const updateUsers = (req, res) => {
    res.status(200).json({ message:  `Update User ${req.params.id}` })
}

const deleteUsers = (req, res) => {
    res.status(200).json({ message:  `Delete User ${req.params.id}` })
}

module.exports = {
    getUsers, setUsers, updateUsers, deleteUsers
}