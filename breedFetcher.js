const request = require('request'); // request allows us to get the html code of a specified url


const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error || response.statusCode !== 200) {
      callback(error, null);
  
    } else {
      const data = JSON.parse(body);
     
      if (data[0]) {
        callback(null, data[0]['description']);
      } else {
        callback(null, 'Breed not found');
      }
    }
  });
  
};


module.exports = { fetchBreedDescription };


