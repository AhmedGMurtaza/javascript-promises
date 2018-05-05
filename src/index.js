const showResponse = function(response){
  const data = JSON.parse(response).map(country=>{
    return "<li>"+country.name+"</li>";
  });
  document.querySelector('.data-text').innerHTML = data;
}

function get(url) {
  // create new promise
  return new Promise(function(resolve, reject) {
    const req = new XMLHttpRequest();
    req.open("GET", url);
    req.onload = function() {
      if (req.status === 200) {
        // resolve when status is successfull
        // same response parameter will be passed to .then methods
        resolve(req.response);
      } else {
        // same req.statusText parameter will be passed to catch()
        reject(Error(req.statusText));
      }
    };
    req.onerror = function() {
      // same req.statusText will be passes to .catch paremeters
      reject(Error(req.statusText));
    };
    req.send();
  });
}

const btn = document.querySelector("div");
btn.addEventListener("click", function() {
  get("https://restcountries.eu/rest/v2/all")
    // chaining callback
    .then(function(response){
      showResponse(response);
    })
    // catching error
    .catch(function(error){
      console.log(error);
    });
});