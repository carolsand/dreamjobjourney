const BASE_URL = '/api/experience';

export default {
  index,
  create,
  getAllExperiences
};

function index() {
  return fetch(BASE_URL).then(res => res.json());
}

function create(experience) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(experience)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

function getAllExperiences(userId) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      userId
    })

  };
  return fetch(BASE_URL, options).then(res => res.json());
}