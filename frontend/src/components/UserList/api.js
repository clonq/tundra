import axios from 'axios';
const apicfg = require('../../apicfg.json');

export const fetchUsers = async () => {
  const { base, url, method = 'GET' } = apicfg.getUsers;
  const { data } = await axios.request({
    baseURL: base,
    url,
    method
  });
  return data;
}

export const deleteUser = async matterId => {
  const { base, url, method } = apicfg.deleteUser;
  await axios.request({
    baseURL: base,
    url: url.replace(/\{id\}/, matterId),
    method,
  });
  return { matterId };
}
