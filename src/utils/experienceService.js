const BASE_URL = '/api/experience/';

export default {
  index,
  create,
  getAllExperiences,
  addActivityToExperience,
  updateExperience
};

function index() {
  const url = `${BASE_URL}experience`
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

// function getAllExperiences() {
//   const url = `${BASE_URL}experience`
//   return fetch(BASE_URL).then(res => res.json());
// }

function addActivityToExperience(activity) {
  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'Content-type': 'application/json'
  //   },
  //   body: JSON.stringify(activity)
  // };
  // return fetch(BASE_URL, options).then(res => res.json());
  
}
function addJobToExperience(req, res) {
  // flight.push(req.body.ticketId);
  // req.body.experience = req.params.id;
  // Job.create(req.body, function (err) {
  //   res.redirect(`/`);
  // });
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
