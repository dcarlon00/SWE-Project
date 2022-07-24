const express = require('express')
const router = express.Router()
const { getForm, setForm, updateForm, deleteForm} = require('../controllers/formController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getForm).post(protect, setForm)
router.route('/:id').delete(protect, deleteForm).put(protect, updateForm)

module.exports = router