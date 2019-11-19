const BASE_URL = '/api/experience/';

export default {
  create,
  getAllExperiences,
  deleteExperience,
  addActivityToExperience,
  updateExperience,
  addJobToExperience,
  getNewExperience
};

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

function getAllExperiences() {
  return fetch(BASE_URL).then(res => res.json());
}

function getNewExperience() {
  return fetch(BASE_URL).then(res => res.json());
}

function addActivityToExperience(activity) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(activity)
  };
  return fetch(BASE_URL, options).then(res => res.json());
  
}

function addJobToExperience(job) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(job)
  };
  return fetch(BASE_URL, options).then(res => res.json());

}

function updateExperience(experience) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(experience)
  };
  return fetch(BASE_URL + "update", options).then(res => res.json());
}

function deleteExperience(experience) {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(experience)
  };
  return fetch(BASE_URL + "update", options).then(res => res.json());
}
