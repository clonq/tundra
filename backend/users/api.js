const debug = require('debug')('tundra:users:api');
const model = require('./model');

model.sync(); //sux

const find = {
  all: () => model.findAll(),
  by: {
    id: id => model.findByPk(id)
  }
}

const create = data => model.build(data).save();

const update = async ({ id, ...rest }) => {
  const existingUser = await model.findOne({ where: { id: Number(id) } })
  const updatedUser = await existingUser.update(...rest).save();
  return updatedUser;
};

const remove = id => model.destroy({ where: { id: Number(id) }, force: true });

module.exports = { create, find, remove, update };
