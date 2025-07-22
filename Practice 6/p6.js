url = ("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
let response = fetch(url);
response.then((v) => {
    return v.json();
}).then((data) => {
    console.log(data);
    for (i in data) {
        console.log(data[i]);
        ihtml = `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data[i].activity}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`}
});
