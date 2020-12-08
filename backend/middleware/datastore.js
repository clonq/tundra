const debug = require("debug")("tundra:middleware:datastore");
const { Sequelize } = require("sequelize");

let sequelize;

const connect = async () => {
  debug("connecting to datastore");
  sequelize = new Sequelize("sqlite::memory:");
  try {
    // await sequelize.authenticate();
    const User = require('../users/model')(sequelize); //sux
    await User.sync();
  } catch (error) {
    debug("Unable to connect to the database:", error);
  }
};

const disconnect = () => {
  debug("disconnecting from datastore");
  sequelize.close();
};

module.exports = { connect, disconnect, instance: sequelize };
