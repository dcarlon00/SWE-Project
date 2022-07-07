const express = require('express')
const router = express.Router()
const { getForm, setForm, updateForm, deleteForm} = require('../controllers/formController')

router.route('/').get(getForm).post(setForm)
router.route('/:id').delete(deleteForm).put(updateForm)

module.exports = router