const breed = process.argv[2];

const request = require('request'); // request allows us to get the html code of a specified url


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

  if (error || response.statusCode !== 200) {
    console.log('error:', error);

  } else {
    const data = JSON.parse(body);
    
    if (data[0]) {
      console.log(data[0]['description']);
    } else {
      console.log('Breed name not found');
    }
  }


});




