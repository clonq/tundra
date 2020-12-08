import axios from 'axios';
const apicfg = require('../../apicfg.json');

export const saveUser = async user => {
  const updateFlag = !!user.id;
  const { base, url, method } = updateFlag ? apicfg.updateUser : apicfg.createUser;
  const { data: newUser } = await axios.request({
    baseURL: base,
    url: url.replace(/\{id\}/, user.id),
    method,
    data: user,
  });
  return { ...newUser.data };
}

export const deleteUser = async userId => {
  const { base, url, method } = apicfg.deleteUser;
  await axios.request({
    baseURL: base,
    url: url.replace(/\{id\}/, userId),
    method,
  });
  return { userId };
}
