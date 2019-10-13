const BASE_URL = '/api/experience/';

export default {
  // index,
  create,
  getAllExperiences,
  addActivityToExperience,
  updateExperience,
  addJobToExperience
};

// function index() {
//   const url = `${BASE_URL}`
//   return fetch(BASE_URL).then(res => res.json());
// }

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

// function getAllExperiences(userId) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify({
//       userId
//     })

//   };
//   return fetch(BASE_URL, options).then(res => res.json());
// }

function getAllExperiences() {
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
