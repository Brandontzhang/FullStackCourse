import Axios from 'axios';
const baseUrl = 'http://localhost:3001/api/persons';

const getPersons = () => {
  const request = Axios.get(baseUrl);
  return request.then((res) => res.data);
};

const createPerson = (person) => {
  const request = Axios.post(baseUrl, person);
  return request.then((res) => res.data);
};

const deletePerson = (itemId) => {
  const request = Axios.delete(`${baseUrl}/${itemId}`);
  return request.then((res) => res.data);
};

const updateNumber = (person, newNumber) => {
  const request = Axios.put(`${baseUrl}/${person._id}`
      , {...person, number: newNumber});
  return request.then((res) => res.data);
};

export default {getPersons, createPerson, deletePerson, updateNumber};
