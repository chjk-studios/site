function generateProjects(item) {
    const gridProjects = document.getElementById('projectsgrid');
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.innerHTML = `
<div class="card-head">
    <div class="card-title">
        <h3>${item.title}</h3>
        <p>${item.subtitle}</p>
    </div>
    <a href="${item.site || "#"}">
        <img src="${item.imgsrc}">
    </a>
</div>
<p>${item.desc}</p>`;
    gridProjects.appendChild(newCard);
}

function generateMembers(item) {
    const gridMembers = document.getElementById('membersgrid');
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.innerHTML = `
<div class="card-head">
    <div class="card-title">
        <h3>${item.name}</h3>
        <p>${item.role}</p>
    </div>
    <a href="${item.link || "#"}">
        <img src="${item.profilepicture}">
    </a>
</div>
<p>${item.bio}</p>`;
    gridMembers.appendChild(newCard);
}

fetch("/projects.json")
    .then(res => res.json())
    .then(data => {
        data.forEach(project => generateProjects(project));
    })
    .catch(err => console.error(err));

fetch("/members.json")
    .then(res => res.json())
    .then(data => {
        data.forEach(project => generateMembers(project));
    })
    .catch(err => console.error(err));
