const express = require('express')
const router = express.Router()
const { getUsers, setUsers, updateUsers, deleteUsers} = require('../controllers/userController')

router.route('/').get(getUsers).post(setUsers)
router.route('/:id').delete(deleteUsers).put(updateUsers)

router.get('/', (getUsers))

router.post('/', (setUsers))

router.put('/:id', (updateUsers))

router.delete('/:id', (deleteUsers))

module.exports = router