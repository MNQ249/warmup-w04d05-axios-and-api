// If you get stuck go to axiox documentations
// https://github.com/axios/axios

const baseUrl = `https://sei-relativity-ruh.herokuapp.com/developers`
// const axios = require('axios').default;


// Make a request for a user with a given ID
axios.get('https://sei-relativity-ruh.herokuapp.com/developers')
  .then(function (response) {
    // handle success
    
    console.log(response.data.forEach(element => {
        console.log(element.name);
    }));
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
 

const testPost = function(){
  axios.post('https://sei-relativity-ruh.herokuapp.com/developers', {
    name: "Mesfer",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

testPost();

