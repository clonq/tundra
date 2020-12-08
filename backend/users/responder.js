const ERR = require('../errors');

const success = (res, data) => res.json({ data });
const error = (res, err) => res.json({ err: Object.assign(ERR.UNKNOWN, { message: err.message}) });
const withCode = (res, code) => res.status(code).send();

module.exports = { success, error, withCode }
