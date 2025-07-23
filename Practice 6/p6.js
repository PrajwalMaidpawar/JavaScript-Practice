let url = "https://api.spacexdata.com/v4/launches/upcoming";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let ihtml = "";
    let card = document.getElementById("card");

    data.slice(0, 6).forEach((launch) => {
      ihtml += `<div class="card" style="width: 18rem; margin: 10px;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8xvB2FGIa5guzJ-F9Zy2_ZnAGvjVL1Od2og&s" class="card-img-top" alt="Mission Patch">
        <div class="card-body">
          <h5 class="card-title">${launch.name}</h5>
          <p class="card-text">Launch Date: ${new Date(launch.date_utc).toLocaleDateString()}</p>
          <a href="${launch.links.webcast || '#'}" target="_blank" class="btn btn-primary">Watch Launch</a>
        </div>
      </div>`;
    });

    card.innerHTML = ihtml;
  });
