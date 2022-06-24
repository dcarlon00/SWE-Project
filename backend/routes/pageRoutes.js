const express = require('express')
const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Get User' })
})

router.post('/', (req, res) => {
    res.status(200).json({ message: 'Set User' })
})

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update user ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete user ${req.params.id}` })
})