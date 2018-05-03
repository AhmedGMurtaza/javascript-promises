function get(url) {
  // create new promise
  return new Promise(function(resolve, reject) {
    const req = new XMLHttpRequest();
    req.open("GET", url);
    req.onload = function() {
      if (req.status === 200) {
        // resolve when status is successfull
        resolve(req.response);
      } else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = function() {
      reject(Error(req.statusText));
    };
    req.send();
  });
}

const btn = document.querySelector("div");
btn.addEventListener("click", function() {
  get("https://restcountries.eu/rest/v2/all");
});
