const url = 'https://www.flickr.com/services/rest/';

export function getAllPhotos() {
  return (
    fetch(url, { mode: 'cors' })
      .then(res => res.json())
  )
};