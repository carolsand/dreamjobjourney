const url = 'https://www.flickr.com/services/rest/';

export function getAllApartments() {
  return (
    fetch(url, { mode: 'cors' })
      .then(res => res.json())
  )
};