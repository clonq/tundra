const debug = require('debug')('tundra:users:router');
const router = require('express').Router();
const { success, error } = require('./responder');
const api = require('./api');

router.route('/')
  .get(async (req, res) => {
    try {
      const allUsers = await api.find.all();
      success(res, allUsers);
    } catch (err) {
      debug(err);
      error(res, err);
    }
  })
  .post(async (req, res) => {
    try {
      const result = await api.create(req.body);
      success(res, result);
    } catch (err) {
      debug(err);
      error(res, err);
    }
  });

router.route('/:id')
.put(async (req, res) => {
  try {
    await api.update({ ...req.body, id: Number(req.params.id) });
    success(res, id);
  } catch (err) {
    debug(err);
    error(res, err);
  }
})
.delete(async (req, res) => {
    try {
      await api.remove(req.params.id);
      success(res, id);
    } catch (err) {
      debug(err);
      error(res, err);
    }
  })

module.exports = router;
